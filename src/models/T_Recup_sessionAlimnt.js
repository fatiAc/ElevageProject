/* jshint indent: 2 */

const connexion = require('../../config/dbConnection');
const DataTypes = require('sequelize');
const Ingredient_param = require('./T_Ingredient_param');
const Machine = require('./T_Machine');
const Nourriture = require('./T_Nourriture');

const Recup_sessionAlimnt = connexion.define('T_Recup_sessionAlimnt', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nbrPreparation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    qteTotal: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nourriture_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Nourriture',
            key: 'id'
        }
    },
    sessionAlimnt_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Session_alimentation',
            key: 'id'
        }
    },
    ingredienParam_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'T_Ingredient_param',
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
    tableName: 'T_Recup_sessionAlimnt'
})

Recup_sessionAlimnt.hasMany(Ingredient_param, {
    as: 'T_Ingredient_param',
    foreignKey: 'recupSession_ID',
    sourceKey: 'id'
});
Ingredient_param.belongsTo(Recup_sessionAlimnt, {
    as: 'T_Recup_sessionAlimnt',
    foreignKey: 'recupSession_ID',
    sourceKey: 'id'
});

Recup_sessionAlimnt.hasOne(Machine, {as: 'T_Machine', foreignKey: 'machine_ID'});
Recup_sessionAlimnt.hasOne(Nourriture, {as: 'T_Nourriture', foreignKey: 'nourriture_ID'});

module.exports = Recup_sessionAlimnt;
