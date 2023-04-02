'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Call extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Applicant, { foreignKey: 'applId' });
      // define association here
    }
  }
  Call.init({
    date: DataTypes.INTEGER,
    intervwName: DataTypes.STRING,
    intervwPhone: DataTypes.INTEGER,
    intervwZoom: DataTypes.STRING,
    applId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Call',
  });
  return Call;
};