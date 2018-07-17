const listService = require("./list.service");
const fs = require("fs");
const getList = function(req,res,next){ 
    listService.get(req.params.id)
    .then(data=> res.json(data))
    .catch(e=>{
        res.json(e);
    })
}

const createList = function(req,res,next){
   fs.writeFile( __dirname+"/../Database/"+req.params.fileName+".json",
                JSON.stringify(req.body),
                function(err,data){ 
                    if(err) return res.send(400);
                    res.send(200);
   });
}





module.exports = {
    getList,
    createList
}