'use strict';

const helper = require('../helpers');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
  });

  User.prototype.isPasswordCorrect = function(password, callback) {
    return helper.encryption.comparePassword(password, this.password, function(err, isPasswordMatch) {
      return callback(isPasswordMatch);
    });
  },

  User.prototype.isAdmin = function() {
    // role:
    //   1 Super Admin
    //   2 Admin
    const roles = this.roles.map((r) => r.role_id);
    return roles.includes(1) || roles.includes(2);
  }

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserRole, { foreignKey: 'user_id', as: 'roles' });
  };
 
  User.beforeSave((user, options) => {
    return helper.encryption.cryptPassword(user.password, function(err, hash) {
      user.password = hash;
    });
  });
  
  return User;
};

