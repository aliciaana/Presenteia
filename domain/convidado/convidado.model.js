module.exports = (sequelize, DataTypes) => {
  const Convidado = sequelize.define('Convidado', {
    nome: DataTypes.STRING,
    acompanhantes_confirmados: DataTypes.INTEGER,
    acompanhantes: DataTypes.INTEGER,
    id_casamento: DataTypes.INTEGER
  }, {
    tableName: 'tb_convidados'
  });

  Convidado.associate = models => {
    Convidado.belongsTo(models.Casamento, { foreignKey: 'id_casamento' });
    Convidado.hasMany(models.Presente, { foreignKey: 'id_convidado' });
  };

  return Convidado;
};
