/* jshint indent: 2 */

const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');

const Ingredient_param = connexion.define('T_Ingredient_param', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qte_theorique: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qte_reel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    difference: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ingredient_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'T_Ingredient',
        key: 'id'
      }
    },
    recupSession_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Recup_sessionAlimnt',
            key: 'id'
        }
    },
    livraison_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Livraison',
            key: 'id'
        }
    }
  }, {
    tableName: 'T_Ingredient_param'
  })

module.exports = Ingredient_param;
