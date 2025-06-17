'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Casamento.init({
    nome_dos_noivos: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    local: DataTypes.STRING,
    cor_1: DataTypes.STRING,
    cor_2: DataTypes.STRING,
    imagem: DataTypes.TEXT,
    estilo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Casamento',
  });
  return Casamento;
};