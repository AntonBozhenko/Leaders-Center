const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Applicant, { foreignKey: 'stageId' });
      // define association here
    }
  }
  Stage.init({
    stageName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};
