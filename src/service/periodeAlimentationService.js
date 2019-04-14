let periodeAlimentation = require('../models/T_Periode_alimentation');


class periodeAlimentationService{


    static getPeriodesInfo(){
        return periodeAlimentation.findAll({
            attributes: ['id','periode']
        });
    }

    static findIdByName(periodeName) {
        return periodeAlimentation.findOne({
            where: {periode: periodeName},
            attributes: ['id']
        });
    }

    static findIdByID(id) {
        return periodeAlimentation.findOne({
            where: {id: id},
            attributes: ['periode']
        });
    }

};

module.exports = periodeAlimentationService;
