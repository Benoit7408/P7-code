const connectionDB = require("../config/db");

const News = function (news) {
  this.messages_id = news.id;
  this.messages_quadri = news.quadri;
  this.messages_content = news.content;
  this.messages_likes = news.likes;
  this.messages_dislikes = news.dislikes;
  this.messages_createdAt = news.createdAt;
  this.messages_updatedAt = news.updatedAt;
};

News.getAllNews = function (result) {
  let allNews = `select * from messages`;

  connectionDB.query(allNews, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

News.getAllNewsThisUser = function (news, result) {
  let allNewsQuadri = `select * from messages join users where users_quadri=messages_quadri and messages_quadri= ?`;
  connectionDB.query(allNewsQuadri, [news], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

News.updateOneNews = function (req, result) {
  let updateOneNews = `select * from messages where messages_id = ? `;
  connectionDB.query(updateOneNews, [req.params.id], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
News.updateOneNewsPart2 = function (req, result) {
  let updateOneNewsPart2 = `update messages set "ef" where messages_id = ?`;
  connectionDB.query(updateOneNewsPart2, [req.params.id], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

News.postOneNews = function (req, result) {
  let postNews = `insert into messages (messages_content) values ?`;
  connectionDB.query(postNews,[req], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = News;
