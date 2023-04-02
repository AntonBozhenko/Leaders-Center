const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Stage, { foreignKey: 'stageId' });
      this.hasOne(models.Commentary, { foreignKey: 'applId' });
      this.hasOne(models.Call, { foreignKey: 'applId' });
    }
  }

  Applicant.init({
    applPhoto: DataTypes.STRING,
    applName: DataTypes.STRING,
    applLastName: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    phone: DataTypes.BIGINT,
    applEmail: DataTypes.STRING,
    pdf: DataTypes.STRING,
    position: DataTypes.STRING,
    wage: DataTypes.STRING,
    location: DataTypes.STRING,
    about: DataTypes.TEXT,
    stageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Applicant;
};
