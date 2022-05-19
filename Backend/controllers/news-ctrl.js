const mysql = require("mysql");
const connectionDB = require("../config/db");
const News = require("../model/news-model");
const fs = require("fs");

connectionDB.getConnection(function (err) {
  if (err) throw err;
  console.log("connecte");
});

// ---------récuperer toutes les news de tous les utilisateurs---------------
exports.getAllNews = function (req, res) {
  News.getAllNews((err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};

//-------------récuperer les news d'un utilisateur précis-----------------
exports.getAllNewsThisUser = function (req, res) {
  const news = new News({
    quadri: req.params.quadri,
  });
  News.getAllNewsThisUser(news, (err, data) => {
    console.log(req.params.quadri);
    console.log(data);
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};

//-----------Mettre à jour une news-----------------------
exports.updateOneNews = function (req, res) {
  News.getOneNewsThisUser(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({ message: "probleme de requete" });
    } else if (data.length == []) {
      return res
        .status(400)
        .json({ message: "il n'y a pas de message correspondant" });
    }
    
    if (!req.file) {
      const news = new News({
        content: req.body.content,
        updateAt: new Date(),
        isActive: true,
        id: req.params.id,
      });

      News.updateOneNews(news, (err, data) => {
        console.log(data);
        if (err) {
          return res.status(400).json({ message: err.message });
        } else {
          return res.status(200).json({ message: data });
        }
      });
    }else{

      console.log(data[0].messages_imageUrl);
      if (data[0].messages_imageUrl != "") {
        const oldImage = data[0].messages_imageUrl.split("/images/news/")[1];
        console.log(oldImage);
        fs.unlink(`images/news/${oldImage}`,()=>{
          if (err) console.log (err);
          else console.log('image supprimée')
        })
      }

      console.log ("essai")
      const news = new News({
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get("host")}/images/news/${
          req.file.filename
        }`,
        updateAt: new Date(),
        isActive: true,
        id: req.params.id,
      });

      News.updateOneNews(news, (err, data) => {
        console.log(data);
        if (err) {
          return res.status(400).json({ message: err.message });
        } else {
          return res.status(200).json({ message: data });
        }
      });
      
    }
  });
};

//------------Creer une news --------------------------
exports.postNews = function (req, res) {
  const news = new News({
    quadri: req.auth.userId,
    content: req.body.content,
    imageUrl: `${req.protocol}://${req.get("host")}/images/news/${
      req.file.filename
    }`,
    likes: "",
    dislikes: "",
  });
  console.log(req.auth);
  
  News.postOneNews(news, (err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};
// -------------------------------Supprimer une news-----------------------------
exports.deleteOneNews = function (req, res) {
  const news = new News({
    id: req.params.id,
  });

  News.deleteOneNews(news, (err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(200).json({ message: data });
    }
  });
};
