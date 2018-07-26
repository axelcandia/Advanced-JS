const passport = require("passport"); 

const JwtStrategy   = require('passport-jwt').Strategy;

const LocalStrategy     = require('passport-local').Strategy;
const GPlusTokenStrategy =require("passport-google-plus-token");

const  {ExtractJwt}     = require('passport-jwt'); 
const User = require("./user/user.schema");
var opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"SUPERSECRETO"
}   

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    User.findById(jwt_payload.sub)
    .then(data=>{ 
        if(!data) return done(null,false);
        done(null,data);
    }).catch(e=>done(e,null))
}));

passport.use(new LocalStrategy({
    usernameField:"email"
},function(email,pass,done){ 
    User
    .findOne({email})
    .then(data=>{
        console.log(data);
        if(!data) return done(null,false)
        done(null,data);
    }).catch(e=>{
        done(e,null)
    })

}));

passport.use("googleToken",new GPlusTokenStrategy({
    clientID: "3012911440-i3kq75q9ofhb8epsci9uevgkhnqmiifn.apps.googleusercontent.com",
    clientSecret: "VZr1TS-H45T-c77LB9Pc7wxh", 
},function(token,refreshToken,profile,done){
    let email = profile.emails[0].value;
    let id    = profile.id;

    console.log(email);
    //Existe?
    User
    .findOne({ "google.email":email })
    .then(user=>{
        if(user) return user;
        let newUser = User.create({
            type:"google",
            google: { email, id }
        })
       return newUser.save();
    })
    .then(user=>{
        done(null,user);
    })
    .catch( e => done(e,null) ) ; 


}))