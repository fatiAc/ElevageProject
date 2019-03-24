const paddock = require('../models/T_Paddock');

class paddockService {

    static gettAll() {
        return paddock.findAll({
            attributes: ['nom']
        });
    }

    static findPaddock(id) {
        return paddock.findOne({
            where: {
                id: id
            }
        })
    };
}

module.exports = paddockService;
