const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  id: Number,
});

const StudentModule = 
  mongoose.model("Student", StudentSchema);

module.exports = StudentModule;