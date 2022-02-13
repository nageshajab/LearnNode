const sqlite3 = require('sqlite3');
const dbfilepath = require('../config').dbfilepath;

exports.Open = () => {
    let db = new sqlite3.Database(dbfilepath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the password database.');
    });
    return db;
}
exports.Close = (db) => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}



