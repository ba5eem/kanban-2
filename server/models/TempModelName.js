module.exports = function(sequelize,DataTypes){
  const TempTableName = sequelize.define('temp', {
    title : DataTypes.STRING,
    data  : DataTypes.STRING
  });
  TempTableName.associate = function(models){
    TempTableName.belongsTo(models.name);
  };
  return TempTableName;
};