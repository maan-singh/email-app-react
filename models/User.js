const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//ES 2015 destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
