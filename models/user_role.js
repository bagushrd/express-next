'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
  }, {
    tableName: 'user_roles',
  });
  UserRole.associate = function(models) {
    // associations can be defined here
    UserRole.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' });
    UserRole.belongsTo(models.Role, { foreignKey: 'role_id', targetKey: 'id' });
  };
  return UserRole;
};