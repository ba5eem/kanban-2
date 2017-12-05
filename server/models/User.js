module.exports = function(sequelize,DataTypes){
  const User = sequelize.define('users', {
    email : DataTypes.STRING,
    first_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    last_name: DataTypes.STRING,
    link: DataTypes.STRING,
    locale: DataTypes.STRING,
    name: DataTypes.STRING,
    timezone: DataTypes.INTEGER,
    updated_time: DataTypes.STRING,
    verified: DataTypes.BOOLEAN

  });

  return User;
};