let mesure = require('../models/T_Mesure');


class mesureService {

    static create(poids, dateMesure, user_login, animal_ID) {
        return mesure.create({
            poids: poids,
            dateMesure: dateMesure,
            user_login: user_login,
            animal_ID: animal_ID
        });
    }

}

module.exports = mesureService;
