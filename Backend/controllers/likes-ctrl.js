const mysql = require("mysql");
const likes = require("../model/likes-model");
const connectionDB = require("../config/db");

exports.likeInfo = (req, res) => {
  const messages_id = req.params.id;
  const users_quadri = req.auth.userId;
  console.log(messages_id, users_quadri);

  let likedOrDisliked = `select message_liked,message_disliked from likes where likes_message_id = ? AND likes_message_quadri = ?`;

  connectionDB.query(
    likedOrDisliked,
    [messages_id, users_quadri],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      switch (req.body.like) {
        case "1": {
          if (result[0].message_liked == 0 && result[0].message_disliked == 0) {
            console.log("case 1");
            console.log(req.body.like);
            let liked = `update likes set message_liked = ? where likes_message_id = ? AND likes_message_quadri = ?`;
            console.log(req.body.like);
            connectionDB.query(
              liked,
              [req.body.like, messages_id, users_quadri],
              (err, data) => {
                if (err) {
                  return res.status(400).json({ message: err.message });
                } else {
                  res.status(200).json({ message: "message liké" });
                }
              }
            );
          }
          else{
            res.status(200).json({ message: "avis deja donné" });
          }
          break;
        }
        case "-1": {
          if (result[0].message_liked == 0 && result[0].message_disliked == 0) {
            let disliked = `update likes set message_disliked = ? where likes_message_id = ? AND likes_message_quadri = ?`;
            console.log(req.body.like);
            const message_disliked = "1";
            connectionDB.query(
              disliked,
              [message_disliked, messages_id, users_quadri],
              (err, data) => {
                if (err) {
                  return res.status(400).json({ message: err.message });
                } else {
                  return res.status(200).json({ message: "message dislike" });
                }
              }
            );
          }
          else{
            res.status(200).json({ message: "avis deja donné" });
          }
         
          break;
        }

        case "0":
          {
            console.log("case 0");
            console.log(req.body.like);
            if (result[0].message_liked == 0) {
              let disliked = `update likes set message_disliked = ? where likes_message_id = ? AND likes_message_quadri = ?`;
              console.log(req.body.like);
              const noLikeOrDislike = "0";
              connectionDB.query(
                disliked,
                [noLikeOrDislike, messages_id, users_quadri],
                (err, data) => {
                  if (err) {
                    return res.status(400).json({ message: err.message });
                  }
                }
              );
            } else if (result[0].message_disliked == 0) {
              let disliked = `update likes set message_liked = ? where likes_message_id = ? AND likes_message_quadri = ?`;
              console.log(req.body.like);
              const noLikeOrDislike = "0";
              connectionDB.query(
                disliked,
                [noLikeOrDislike, messages_id, users_quadri],
                (err, data) => {
                  if (err) {
                    return res.status(400).json({ message: err.message });
                  }
                }
              );
            }
            res
              .status(400)
              .json({ message: "Vous n'avez pas d'avis sur ce messages" });
          }
          break;
      }
    }
  );
};

/*(result[0].message_liked == 0 && result[0].message_disliked==0) {
        console.log (result[0].message_disliked)
        return res.status(200).json({ message: result });
      }*/

exports.like = (req, res) => {
  let liked = "update likes set (message_liked) values (?)";
  console.log(req.body.like);
  connectionDB.query(liked, [req.body.like], (err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: "message liké" });
    }
  });

  switch (req.body.like) {
    case 1: {
      console.log("case 1");
      console.log(req.body.like);
      break;
    }

    case -1: {
      console.log("case -1");
      console.log(req.body.like);
      break;
    }

    case 0: {
      console.log("case 0");
      console.log(req.body.like);
      break;
    }
  }
};
