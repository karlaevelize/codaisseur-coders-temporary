"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class technology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      technology.belongsToMany(models.user, {
        through: "favoriteTechnologies",
        foreignKey: "technologyId",
      });
    }
  }
  technology.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "technology",
    }
  );
  return technology;
};
