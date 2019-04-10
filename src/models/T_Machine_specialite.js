/* jshint indent: 2 */
const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');
const Machine = require('./T_Machine');
const Nourriture = require('./T_Nourriture');

const Machine_specialite = connexion.define('T_Machine_specialite', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nourriture_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Nourriture',
            key: 'id'
        }
    },
    machine_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Machine',
            key: 'id'
        }
    }
}, {
    tableName: 'T_Machine_specialite'
});

Machine_specialite.hasOne(Nourriture, {as: 'nourriture_ID', foreignKey: 'nourriture_ID'});
Machine_specialite.hasOne(Machine, {as: 'machine_ID', foreignKey: 'machine_ID'});

module.exports = Machine_specialite;
