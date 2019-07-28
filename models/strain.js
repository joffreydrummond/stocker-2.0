const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const strainSchema = new Schema({
    name: { type: String, required: true },
    information: String,
    inStock: Boolean,
    date: { type: Date, default: Date.now }
});
  
const Strain = mongoose.model("Strain", strainSchema);

module.exports = Strain;