const mysql = require("mysql");
const likes = require("../model/likes-model");
const connectionDB = require("../config/db");

exports.like = (req, res) => {

const messages_id = req.params.id;
const users_quadri = req.body.userId
console.log(messages_id, users_quadri)

    let likedOrDisliked = `select count(*) as exist from likes where likes_id = ? AND likes_quadri = ?`;

    connectionDB.query(likedOrDisliked,[messages_id,users_quadri],(err, result)=>{
       
console.log(result)
    });


}

