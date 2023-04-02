const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Commentary extends Model {
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
  Commentary.init({
    text: DataTypes.TEXT,
    applId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Commentary',
  });
  return Commentary;
};
