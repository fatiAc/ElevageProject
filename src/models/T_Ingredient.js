/* jshint indent: 2 */

const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');
const Ingredient_param = require('./T_Ingredient_param');

const Ingredient = connexion.define('T_Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'T_Ingredient'
  })

Ingredient.hasMany(Ingredient_param, {as: 'T_Ingredient_param', foreignKey: 'ingredienParam_ID', sourceKey: 'id'})
Ingredient_param.belongsTo(Ingredient, {as : 'T_Ingredient', foreignKey: 'ingredienParam_ID', targetKey: 'id'});




module.exports = Ingredient;
