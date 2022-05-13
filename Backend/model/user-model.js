const connectionDB = require("../config/db");

const User = function (user) {
    
    this.users_quadri = user.quadri;
    this.users_email = user.email;
    this.users_first_name = user.first_name;
    this.users_last_name = user.last_name;
    this.users_password = user.password;
    this.users_bio = user.bio;
    this.users_avatar = user.avatar;
    this.users_isAdmin = user.isAdmin;
    this.users_isActive = user.isActive
};

User.create = function (user, result) {
  let createUser = `insert into
  users (
    users_quadri,
    users_email,
    users_first_name,
    users_last_name,
    users_password,
    users_bio,
    users_avatar,
    users_isAdmin,
    users_isActive
  )
values
  (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
 
  connectionDB.query(createUser, [
    user.users_quadri,
    user.users_email,
    user.users_first_name,
    user.users_last_name,
    user.users_password,
    user.users_bio,
    user.users_avatar,
    user.users_isAdmin,
    user.users_isActive,
  ],(err,res)=>{
      if(err){
          console.log(err)
          result(err,null)
        } else {
            console.log(result)
            console.log(user)
            result(null, {user})
        }
    });
};

User.findOneByQuadri = function (user, result) {
    
  let userByQuadri = `select * from users where users_quadri = ?`
  connectionDB.query(userByQuadri, [
    user
  ],(err,res) => {
    if(err){
        console.log(err)
        result(err,null)
      } else {
          
          result(null, res )
      }
  });
};
 


module.exports = User;
