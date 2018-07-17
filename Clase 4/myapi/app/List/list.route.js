var express           = require('express');
var router            = express.Router();
const listController  = require("./list.controller");

router.get('/:id',listController.getList );
router.post('/:fileName',listController.createList );

module.exports = router;
