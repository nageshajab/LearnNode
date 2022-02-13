const { Connection } = require('mongoose');
const sqlite3 = require('sqlite3');
const dbfilepath = require('./config').dbfilepath;
const connection = require('./Common/Connection');
const AppDAO = require('./Common/AppDAO');

exports.ListPasswords = () => {
    let db = connection.Open();
    db.serialize(() => {
        db.each(`SELECT name as id,
                        password as name
                 FROM passwords`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row.id + "\t" + row.name);
        });
    });

    connection.Close(db);
}

exports.CreatePassword = () => (name, password) => {
    let dao = new AppDAO(dbfilepath);

    return dao.run(
        'INSERT INTO passwords (name,password) VALUES (?,?)',
        [name, password]);
}

exports.UpdatePassword = () => (id, name, password) => {
    let dao = new AppDAO(dbfilepath);

    return dao.run(
        'UPDATE passwords set name= ?, password=? WHERE id= ?',
        [name, password, id]);
}

exports.DeletePassword = () => (id) => {
    let dao = new AppDAO(dbfilepath);

    return dao.run(
        'DELETE FROM passwords WHERE id= ?',
        [id]);
}

