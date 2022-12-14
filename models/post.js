"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user);
      post.hasMany(models.comment);
      post.hasMany(models.postLike);
      post.belongsToMany(models.tag, {
        through: "postTags",
        foreignKey: "postId",
      });
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
