module.exports = function(sequelize,DataTypes){
  return sequelize.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
}
