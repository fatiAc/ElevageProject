/* jshint indent: 2 */
const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');
const Periode_ration = require('./T_Periode_Ration');
const Recup_session = require('./T_Recup_sessionAlimnt');
const Ingredient_param = require('./T_Ingredient_param');

const Livraison = connexion.define('T_Livraison', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recup_sessionAlimnt_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'T_Recup_sessionAlimnt',
        key: 'id'
      }
    }
  }, {
    tableName: 'T_Livraison'
  })

Livraison.hasMany(Periode_ration, {as : 'T_Periode_Ration', foreignKey : 'livraison_ID', sourceKey: 'id'});
Periode_ration.belongsTo(Livraison, {as: 'T_Livraison', foreignKey: 'livraison_ID', targetKey: 'id'});

Livraison.hasMany(Ingredient_param, {as : 'T_Ingredient_param', foreignKey: 'livraison_ID', sourceKey: 'id'});
Ingredient_param.belongsTo(Livraison, {as : 'T_Livraison', foreignKey: 'livraison_ID', targetKey: 'id'});

Livraison.hasOne(Recup_session, {as : 'T_Recup_sessionAlimnt', foreignKey: 'T_Recup_sessionAlimnt'});


module.exports = Livraison;
