'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_casamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_dos_noivos: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATEONLY
      },
      local: {
        type: Sequelize.STRING
      },
      cor_1: {
        type: Sequelize.STRING
      },
      cor_2: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.TEXT
      },
      estilo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Casamentos');
  }
};