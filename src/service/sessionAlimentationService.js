let sessionAlimentation = require('../models/T_Session_alimentation');


class sessionAlimentationService {

    static create(date, userLogin) {
        return sessionAlimentation.create({
            date: date,
            user_login: userLogin
        });
    }

    static findBydateAndUser(date, userLogin) {
        return sessionAlimentation.findOne({
            where: {
                date: date,
                user_login: userLogin
            }, attributes: ['id']
        })
    }

}

module.exports = sessionAlimentationService;
