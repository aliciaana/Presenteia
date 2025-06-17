'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Presente.init({
    imagem: DataTypes.TEXT,
    preco: DataTypes.FLOAT,
    id_convidado: DataTypes.INTEGER,
    id_lista: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Presente',
  });
  return Presente;
};