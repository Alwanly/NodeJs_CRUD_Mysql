var mysql  = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'wad_kelas'
});

con.connect(function(err){
    if(err) throw err;
    console.log("koenk");
});

module.exports = con;