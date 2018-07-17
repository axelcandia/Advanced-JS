var express = require('express');
var router = express.Router();
const fs = require("fs");
function getStream(req,res,next){

  let readStream = fs.createReadStream(__dirname+"/../Database/"+req.params.listName+".json",{encoding:"utf-8"});

  readStream.on("data",function(chunks){ 
    res.json(JSON.parse(chunks).task);
  })

} 

/* GET home page. */
router.get('/task/:listName',getStream);

module.exports = router;
