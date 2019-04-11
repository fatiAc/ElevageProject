const paddock = require('../models/T_Paddock');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');


class paddockService {

    static gettAll() {
        return paddock.findAll({
            attributes: ['id', 'nom'],
            order: [
                ['typePaddock', 'ASC'],
                ['nom', 'ASC'],

            ],
        });
    }

    static findPaddockID(paddockName) {
        return paddock.findOne({
            where: {
                nom: paddockName
            }, attributes: ['id']
        });
    };

    static findByID(paddockName) {
        return paddock.findOne({
            where: {
                id: paddockName
            }, attributes: ['nom'],
        });
    };

    static findByAnimal(snit) {
        let query = `SELECT id, paddock.nom as paddockName from T_Animal
                     INNER JOIN T_Paddock paddock ON paddock.id= T_Animal.paddock_ID
                     WHERE snit = ${snit}`;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static getDesPaddocks(snit) {
        let query = `SELECT id, nom AS paddockName from T_Paddock WHERE id NOT IN (SELECT paddock_ID from T_Animal
                     INNER JOIN T_Paddock paddock ON paddock.id= T_Animal.paddock_ID
                     WHERE snit =${snit}) ORDER BY typePaddock,nom`;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static getPaddocksDest(paddock_ID) {
        let query = `SELECT id, nom FROM T_Paddock WHERE id NOT IN (${paddock_ID})`;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

}

module.exports = paddockService;
