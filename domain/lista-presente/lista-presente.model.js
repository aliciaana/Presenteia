module.exports = (sequelize, DataTypes) => {
  const ListaPresente = sequelize.define('ListaPresente', {
    nome: DataTypes.STRING,
    imagem: DataTypes.TEXT,
    url: DataTypes.STRING,
    id_casamento: DataTypes.INTEGER
  }, {
    tableName: 'tb_lista_presentes'
  });

  ListaPresente.associate = models => {
    ListaPresente.belongsTo(models.Casamento, { foreignKey: 'id_casamento' });
    ListaPresente.hasMany(models.Presente, { foreignKey: 'id_lista' });
  };

  return ListaPresente;
};
