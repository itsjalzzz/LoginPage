const mysql = require('mysql2');
const { error } = require('node:console');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login"
})

db.connect((err) => {
    if(err){
        console.log('koneksi gagal');
        return;
    }
    else{
        console.log('koneksi berhasil');
    }
})

module.exports = db;