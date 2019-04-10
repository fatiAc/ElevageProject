const paddock = require('../models/T_Paddock');

class paddockService {

    static gettAll() {
        return paddock.findAll({
            attributes: ['nom']
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
            }, attributes: ['nom']
        });
    };
}

module.exports = paddockService;
