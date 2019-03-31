let sessionAlimentation = require('../models/T_Session_alimentation');


class sessionAlimentationService {

    static create(date, userLogin) {
        return sessionAlimentation.create({
            date: date,
            user_login: userLogin
        });
    }

}

module.exports = sessionAlimentationService;
