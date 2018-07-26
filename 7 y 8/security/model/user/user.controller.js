const User = require("./user.schema");
const JWT  =require("jsonwebtoken");


function signtToken(user){

    return JWT.sign({
        exp:new Date().setDate(new Date().getDate()+1),
        iss:"AxelCandia",
        sub:user._id 
    },"SUPERSECRETO");

    retu
}

function login(req,res,next){

}

function sendToken(req,res,next){  
    let token = signtToken(req.user);
    res.json({token});
}


function signup(req,res,next){  
    //Tengo que guardarlas  
    
    User.findOne({email:req.body.email})
    .then(data=>{
        if(data) throw ({status:401}) 
        return data; 
    })
    User(req.body)
    .save()
    .then(data=>{
        res.send( signtToken(user) );

    })
    .catch(e=>res.send(e));

    //Devolver un token valido
}


function secret(req,res,next){
    res.send("hola");
}




module.exports = {
login,
signup,
secret,
sendToken

}
