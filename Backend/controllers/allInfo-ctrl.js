const connectionDB = require("../config/db");
 

  exports.getAllInfo = function (req, res) {

    let getInfo = `select * from messages join comments where messages_id = comments_message_id  join likes where messages_id = likes_message_id`;

    connectionDB.query(getInfo, (err, result) => {
        if (err) {
          res.status(400).json({message: err.message});
        } else {
          res.status(200).json({message: result})
        }
      });
    };


  