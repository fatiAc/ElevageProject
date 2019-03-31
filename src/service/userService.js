const user = require('../models/T_User');

class userService {

    static findOneByCredinitals(userLogin, userPassword) {
        return user.findOne({
            where: {
                login: userLogin,
                password: userPassword
            }, attributes: ['password']

        })
    };

    static findByLogin(userLogin) {
        return user.findOne({
            where: {
                login: userLogin
            }, attributes: ['login']

        })
    };


}

module.exports = userService;
