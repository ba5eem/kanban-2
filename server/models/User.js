module.exports = function(sequelize,DataTypes){
  const User = sequelize.define('user', {
    displayName : DataTypes.STRING,
    facebookId: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING

  });

  return User;
};