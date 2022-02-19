const redis = require('redis');
const logHandler = require('./LogHandler');
const mysql1 = require('./mysql1');
const removeSpecialChars = require('./common');

const connect = async () => {
  // console.log('inside redis connect');
  return new Promise((resolve, reject) => {
    //   console.log('inside redis promise connect');
    const client = redis.createClient({
      url: "redis://localhost:6379/0"
    });

    client.on('error', (err) => console.log('Redis Client Error', err));

    client.connect().then(() => {
      //    console.log('redis connected');
      getLength(client).then((length) => {
        mysql1.connect().then((connection) => {
          //       console.log(`got length from promise ${length}`);
          iterate(length, client, connection).then(() => {
            resolve(client, connection);
          })
        });
      });
    });
  });
};
const iterate = (length, client, connection) => {
  //  console.log(`inside iterate ${length}`);

  return new Promise((resolve, reject) => {
    const x = async () => {
      for (var i = 0; i < length; i++) {
        const json = await client.sendCommand(['lindex', 'filebeat', `${i}`]); // 'OK'
        //      console.log(json);
        var obj = JSON.stringify(JSON.parse(json));
        obj = obj.replace('@', '');
        var obj1 = JSON.parse(obj);
        if (obj1 === null || obj1 === undefined)
          continue;
        //console.log(obj1);
        var host = '';
        if (obj1.host !== null && obj1.host !== undefined && obj1.host.hostname !== null && obj1.host.hostname !== undefined)
          host = removeSpecialChars(obj1.host.hostname);
        var servicename = removeSpecialChars(obj1.log.file.path);
        var msg = removeSpecialChars(obj1.message);
        // console.log(msg);
        // process.exit(0);
        var sql = `INSERT INTO log (datetime, host,servicename,message) VALUES ('${obj1.timestamp}','${host}', '${servicename}','${msg}')`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          //      console.log(result);
          client.sendCommand(['lpop', 'filebeat']); // 'OK'
        });

        console.log(`processed ${i} record`);
      }
      resolve();
    }
    x();
  });
}
const getLength = (client) => {
  //  console.log('inside getLength');
  return new Promise((resolve, reject) => {
    //  console.log('inside getLength promise');
    const x = async () => {
      //  console.log('inside async getlength');
      const length = await client.sendCommand(['llen', 'filebeat'])
      //console.log(length);
      resolve(length);
    }
    x();
  });
}
module.exports = connect;