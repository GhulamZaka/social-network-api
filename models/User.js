const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
