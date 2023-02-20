"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.listing);
    }
  }
  user.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      full_address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      role: DataTypes.STRING,
      mrt: DataTypes.STRING,
      username: DataTypes.STRING,
      profilephoto_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return user;
};