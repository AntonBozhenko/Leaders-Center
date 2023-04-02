/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applicants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      applPhoto: {
        type: Sequelize.STRING,
      },
      applName: {
        type: Sequelize.STRING,
      },
      applLastName: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      applEmail: {
        type: Sequelize.STRING,
      },
      pdf: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      wage: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.TEXT,
      },
      stageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stages',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applicants');
  },
};
