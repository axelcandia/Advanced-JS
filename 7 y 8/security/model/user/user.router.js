const controller = require('./user.controller')
const Router = require('express').Router
const router = new Router();
const validation  = require("./user.validation");
const validate    = require('express-validation')
const passport    = require("passport"); 



router.route('/login').post(passport.authenticate('local'),controller.login);
router.route('/signup').post(validate(validation.signup),controller.signup);

router.route('/oauth/google').post(passport.authenticate('googleToken', { session: false }), controller.sendToken);
router.route('/secret').post(passport.authenticate('jwt', { session: false }),


function(req, res) {
    res.send(req.user);
}
);

module.exports = router
