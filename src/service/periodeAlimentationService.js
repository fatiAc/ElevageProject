let periodeAlimentation = require('../models/T_Periode_alimentation');


class periodeAlimentationService{


    static getPeriodeName(){
        return periodeAlimentation.findAll({
            attributes: ['periode']
        });
    }

    static findByName(periodeName) {
        return periodeAlimentation.findOne({
            where: {periode: periodeName},
            attributes: ['id']
        });
    }

};

module.exports = periodeAlimentationService;
