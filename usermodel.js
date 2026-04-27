const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    name: String,
    place: String,
    age: Number,
});
const MyModel = mongoose.model("users", BlogPost);
module.exports = MyModel;