'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req,res){
    connection.query('SELECT * FROM tb_users',function(err,rows,fields){
        if(err) {
            console.log(err);
        } 
        response.ok(rows,res);
        console.log("bisa");
    });
};

exports.findUser = (req,res)=>{
    const id = req.params.id;

    connection.query('SELECT * FROM tb_users WHERE id = ?',[id],(err,rows,fields)=>{
        if(err) return console.log('error');
        response.ok(rows,res);
    })
}

exports.updateUser = (req,res)=>{
    const id = req.body.id;    
    const nama = req.body.nama;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const jk = req.body.jk;
    const alamat = req.body.alamat;
    
    connection.query("UPDATE tb_users set nama = ? , email = ? , username = ? , password = ? , jk = ? , alamat = ? WHERE id = ?",
    [nama,email,username,password,jk,alamat,id],(err,rows,field)=>{
        if(err) return console.log('error');
        response.ok("Berhasil Update ", res);
    })
}

exports.createUser = (req,res)=>{
    const nim = req.body.nim;
    const nama = req.body.nama;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const jk = req.body.jk;
    const alamat = req.body.alamat;
    
    connection.query("INSERT INTO tb_users (NIM,nama,email,username,password,jk,alamat) VALUES(?,?,?,?,?,?,?)",
    [nim,nama,email,username,password,jk,alamat],(err,rows,field)=>{
        if(err) return console.log(err);
        response.ok("Berhasil Update ", res);
    })
}

exports.index = function(req,res){
    response.ok("Hai", res); 
    
}

