const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Gallery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hitpoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_dead: {
      type: DataTypes.BOOLEAN,
      default: 'false',
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
  }
);

module.exports = Pokemon;