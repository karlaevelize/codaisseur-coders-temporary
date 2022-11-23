"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class postLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postLike.belongsTo(models.user);
      postLike.belongsTo(models.post);
    }
  }
  postLike.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "postLike",
    }
  );
  return postLike;
};
