const mysql = require("mysql");
const connectionDB = require("../config/db");
const News = require("../model/news-model");

connectionDB.getConnection(function (err) {
  if (err) throw err;
  console.log("connecte");
});

exports.getAllNews = function (req, res) {
  News.getAllNews((err, data) => {
    console.log(data);
  });
};

exports.getAllNewsThisUser = function (req, res) {
  const news = new News({
    quadri: req.params.quadri,
  });
  News.getAllNewsThisUser(req.params.quadri, (err, data) => {
    console.log(req.params.quadri);
    console.log(data);
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};

/*exports.updateOneNews = function (req, res) {
  News.updateOneNews(req, (err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      const oldNews = data;
      const news = new News({
        content: req.body.content,
      });
      let updateOneNewsPart2 = `update messages set ?`;
      connectionDB.query(updateOneNewsPart2, news.content
      );
    }
  });
};*/

exports.updateOneNews = function (req, res) {
  News.updateOneNewsPart2(req, (err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      console.log(data);
    }
  });
};
exports.postNews = function (req, res) {
 
  News.postOneNews(req.body.content, (err, data) => {
    
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};

exports.deleteNews = function (req, res) {
  if (req.params) {
    connectionDB.query(
      `delete  from message where message_id = '${req.params["id"]}'`,
      function (err, result) {
        if (err) throw err;

        return res.status(200).json({ message: result });
      }
    );
  }
};
