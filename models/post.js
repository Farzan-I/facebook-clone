const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  post_picture: {type: String, default: null},
  
  comments:[{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comment",
  }],
  
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  },
    
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
