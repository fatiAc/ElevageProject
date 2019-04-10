let machine = require('../models/T_Machine');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');


class machineService {

    static gettAll() {
        return machine.findAll({
            order: [
                ['name', 'ASC'],
            ],
            attributes: ['id', 'capacite', 'name']
        });
    }

    static findByNourriture(nourritureID) {
        let query = `SELECT T_Machine.id, name, capacite FROM T_Machine
                     INNER JOIN T_Machine_specialite TMs ON T_Machine.id = TMs.machine_ID
                     WHERE TMs.nourriture_ID = ${nourritureID}`;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})

    }
}

module.exports = machineService
