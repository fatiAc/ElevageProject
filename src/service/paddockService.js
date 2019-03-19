
const paddock = require('../models/T_Paddock');
const animal = require('../models/T_Animal');

class paddockService{

    static gettAll(){
        return paddock.findAll({
            include: [{model: animal, as: 'T_Animal' ,attributes: ['snit']}]}
        )};
}

module.exports = paddockService;
