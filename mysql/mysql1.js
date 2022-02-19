var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

const connect = () => {
  return new Promise((resolve, reject) => {
    if (!connection._connectCalled) {
      connection.connect(function (err) {
        if (err) throw err;
        console.log("mysql Connected!");
      });
    }
    resolve(connection);
  });
}

const query = (sql, callback) => {
  
  connect().then(()=>{
    connection.query(sql, function (err, result) {
      if (err) throw err;    
      return callback(result);
    });
  })
}

module.exports = {
  connect,
  query
};
