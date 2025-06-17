module.exports = (sequelize, DataTypes) => {
  const Presente = sequelize.define('Presente', {
    imagem: DataTypes.TEXT,
    preco: DataTypes.FLOAT,
    id_convidado: DataTypes.INTEGER,
    id_lista: DataTypes.INTEGER
  }, {
    tableName: 'tb_presentes'
  });

  Presente.associate = models => {
    Presente.belongsTo(models.Convidado, { foreignKey: 'id_convidado' });
    Presente.belongsTo(models.ListaPresente, { foreignKey: 'id_lista' });
  };

  return Presente;
};
