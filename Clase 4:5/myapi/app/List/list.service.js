const fs = require("fs");

function get(fileName){
    function _resolve(resolve,reject){
        fs.readFile(__dirname+"/../Database/"+fileName+".json",
                    "utf-8",
                    function(err,data){
                    if(err){
                        return reject({err:404,message:"Not found"});
                    } 
                    resolve(JSON.parse(data));
        })
    }
    

    return new Promise(_resolve);
}

module.exports ={
    get
}