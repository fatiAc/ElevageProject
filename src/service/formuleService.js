let formule = require('../models/T_Formule');

class formuleService {


    static findByRation(nourriture_ID) {
        return formule.findAll({
            where: {
                nourriture_ID: nourriture_ID
            },
            attributes: ['ingredient_ID', 'pourcentage']
        })
    }
}

module.exports = formuleService;
