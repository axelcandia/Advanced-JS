const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  task: [{
    type:ObjectId,
    ref:"Task"
  }],
  body: String,
  date: Date
});

module.exports= mongoose.model("blogSpot",BlogPost);


