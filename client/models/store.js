const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: { type: String, required: true },
    information: String,
    date: { type: Date, default: Date.now }
});
  
const storeSchema = mongoose.model("Store", storeSchema);

module.exports = Store;