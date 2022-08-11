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
    featured: {
        type: String,
        required: false,
    }
});

const Spices = mongoose.model("Spice", SpiceSchema);
module.exports = Spices;