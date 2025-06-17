module.exports = (sequelize, DataTypes) => {
  const Casamento = sequelize.define('Casamento', {
    nome_dos_noivos: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    local: DataTypes.STRING,
    imagem: DataTypes.TEXT,
    estilo: DataTypes.STRING,
    cor_1: DataTypes.STRING,
    cor_2: DataTypes.STRING
  }, {
    tableName: 'tb_casamentos'
  });

  Casamento.associate = models => {
    Casamento.hasMany(models.ListaPresente, { foreignKey: 'id_casamento' });
    Casamento.hasMany(models.Convidado, { foreignKey: 'id_casamento' });
  };

  return Casamento;
};
