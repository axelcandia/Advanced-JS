var Joi = require('joi');

let login =  {
    body: {
        email: Joi.string().email().required(),
        name: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
      },
    
}


let signup =  {
    body: {
        email: Joi.string().email().required(),
        name: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
      },
      options : {
        allowUnknownBody: false,
      }
}

module.exports = {
 login,
 signup
};