"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favoriteTechnology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favoriteTechnology.belongsTo(models.user);
      favoriteTechnology.belongsTo(models.technology);
    }
  }
  favoriteTechnology.init(
    {
      userId: DataTypes.INTEGER,
      technologyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favoriteTechnology",
    }
  );
  return favoriteTechnology;
};
