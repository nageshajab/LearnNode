//const connectmysql = require('./mysql1');
const connectredis = require('./redis');

connectredis().then((client,connection) => {
    console.log('closing redis client');
    client.quit();
    console.log('exiting process');
    process.exit(0);
});

