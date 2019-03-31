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
}

module.exports = paddockService;
