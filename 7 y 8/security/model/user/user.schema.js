const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt=require('bcrypt');

const userSchema = new Schema({
  type: String,
  google:{
    email:String,
    id:String
  },
  fb:{
    email:String,
    id:String
  },
  local:{
    email:String,
    pass:String
  }   
})
 
userSchema.pre("save",async function(next){
  if(this.local.password){
    let salt = await bcrypt.genSalt(10);
    this.local.password  = await bcrypt.hash(this.local.password,salt);
  }
 
 next();

})

userSchema.methods.isValidPass = async function(newPass){
  bcrypt.compare(this.local.password,newPass)
}
module.exports = mongoose.model("user",userSchema)


