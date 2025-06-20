'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaPresente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListaPresente.init({
    nome: DataTypes.STRING,
    imagem: DataTypes.TEXT,
    url: DataTypes.STRING,
    id_casamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListaPresente',
  });
  return ListaPresente;
};