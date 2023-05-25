'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    static associate (models) {
      RefreshToken.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
      });
    }
  }
  RefreshToken.init(
    {
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fingerprint: DataTypes.STRING,
      ua: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RefreshToken',
      timestamps: true,
    }
  );
  return RefreshToken;
};
