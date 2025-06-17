'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convidado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Convidado.init({
    nome: DataTypes.STRING,
    acompanhantes_confirmados: DataTypes.INTEGER,
    id_casamento: DataTypes.INTEGER,
    acompanhantes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Convidado',
  });
  return Convidado;
};