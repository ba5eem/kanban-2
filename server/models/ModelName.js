module.exports = function(sequelize,DataTypes){
  const TableName = sequelize.define('name', {
    username: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
  });
  TableName.associate = function(models){
    TableName.hasMany(models.temp);
  };
  return TableName;
};

//Most Likely you will have more than one table name: here is a good example of creating table with associations and references:

//TABLE MAIN:
//Jesse's example:
// module.exports = function(sequelize,DataTypes){
//   const Users = sequelize.define('users', {
//     username: {type: DataTypes.STRING, unique: true},
//     password: DataTypes.STRING,
//     avatar: DataTypes.STRING
//   });
//   Users.associate = function(models){
//     Users.hasMany(models.tasks, { foreignKey: 'createdBy', as: 'Cards'});
//     Users.hasMany(models.tasks, { foreignKey: 'assignedTo', as: 'Tasks'});
//   };
//   return Tasks;
// }

//TABLE SUB-MAIN: 
//Jesse's example:
// module.exports = function(sequelize,DataTypes){
//   const Tasks = sequelize.define('tasks', {
//     priority: DataTypes.STRING,
//     status: DataTypes.STRING,
//     title: DataTypes.STRING,
//     createdBy: DataTypes.STRING,
//     assignedTo: DataTypes.STRING
//   });
//   Tasks.associate = function(models){
//     Tasks.belongsTo(models.users, { foreignKey: 'createdBy', as: 'Creator'});
//     Tasks.belongsTo(models.users, { foreignKey: 'assignedTo', as: 'Dev'});
//   };
//   return Tasks;
// }