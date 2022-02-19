const insert = require('./mysql1');

const writeLog = (date, host, servicename, message, callback) => {
    // const date = '2022/02/16';
    // const host = 'local';
    // const servicename = 'om';
    // const message = 'message2';
    console.log('loghandler');
    console.log(callback);

    var sql = `INSERT INTO log (datetime, host,servicename,message) VALUES ('${date}','${host}', '${servicename}','${message}')`;

    insert(sql,callback);
}

module.exports = writeLog;