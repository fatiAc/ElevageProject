let animal = require('../models/T_Animal');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');

class animalService {


    static updatePadockOfAnimal(snit, paddock_ID) {
        return animal.findOne({
            where: {
                snit: snit
            },
            attributes: ['snit', 'paddock_ID']
        })
            .then(animal => {
                animal.update({
                    paddock_ID: paddock_ID
                })
            })
    }

    static countAnimalOfPaddock(paddock_ID) {
        let query = `SELECT count(*) AS nbrElement FROM T_Animal WHERE paddock_ID = ${paddock_ID}`;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static findAllByPaddock(paddock_srv) {
        return animal.findAll({
            where: {
                paddock_ID: paddock_srv
            },
            attributes: ['snit', 'paddock_ID']
        })
    }

    static updatePadockOfAnimals(paddock_srv, paddock_dest) {
        return this.findAllByPaddock(paddock_srv)
            .then(animals => {
                for (let animal of animals) {
                    animal.update({
                        paddock_ID: paddock_dest
                    })
                }
            })
    }

    static findByID(snit) {
        return animal.findOne({
            where: {
                snit: snit
            },
            attributes: ['snit']
        });
    }
}

module.exports = animalService;
