const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');
const port = 3000;

//middleware membaca data dari HTML
app.use(express.urlencoded({extended: true}));

// middleware ngenalin folder public,biar HTML otomatis membaca CSS
app.use(express.static(path.join(__dirname, 'public')));

//
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','login.html'))
})

app.post('/auth/login', (req,res) => {
    const {username , password} = req.body;

    const sql = "SELECT * FROM `data` WHERE username = ? AND password = ?";

    db.query(sql, [username,password],(err,result) => {
        if(err){
            res.send('[ERROR] ada yang salah nih reg')
            return;
        }
        if(result.length > 0){
            res.send(`[SUCCES] nahh ini nih yang guweh cari,hallo ${username}`)
        }
        else{
            res.send('[ERROR] username atau password salah');
        }
    })
})

app.listen(port, () => {
    console.log(`server berjalan di ${port}`);
});
