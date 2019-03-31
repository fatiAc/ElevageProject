let nourriture = require('../models/T_Nourriture');


class nourritureService {

    static getRationName() {
        return nourriture.findAll({
            attributes: ['nom']
        });
    }

    static findByName(rationName) {
        return nourriture.findOne({
            where: {nom: rationName},
            attributes: ['id']
        });
    }

};

module.exports = nourritureService;
