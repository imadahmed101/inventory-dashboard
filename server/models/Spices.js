const mongoose = require ('mongoose');

const SpiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const Spices = mongoose.model("Spice", SpiceSchema);
module.exports = Spices;