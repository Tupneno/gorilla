const mongoose = require('mongoose');
const { Schema } = mongoose;
  

  const heroSchema = new Schema({
    name:  String,
    backstory: String,
    abilities: [{ title: String, description: String, icon: String }],
    price: [{inGamePrice: String, realMoneyPrice: String}],
    image: String
  });

const heroes = mongoose.model('Hero', heroSchema)
module.exports = heroes;