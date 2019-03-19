/* jshint indent: 2 */
const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');

const Machine = connexion.define('T_Machine', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    capacite: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'T_Machine'
  })

module.exports = Machine;
