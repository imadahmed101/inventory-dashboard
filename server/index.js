const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://admin:Admin123!@cluster0.6popk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const SpicesModel = require('./models/Spices');

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

app.use(express.json());
app.use(cors());

app.get('/read', async (req, res) => {
    SpicesModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});

app.post('/insert', async (req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const Spices = new SpicesModel({ name: name, quantity: quantity });

    try {
        await Spices.save();
        console.log(`inserted ${name} into db`);
    }
    catch (err) {
        console.log(err);
    }
});


app.put('/update', async (req, res) => {
    const newQuantity = req.body.newQuantity;
    const id = req.body.id;

    try {
        SpicesModel.findById(id, (err, update) => {
            update.quantity = newQuantity;
            update.save();
            console.log(`updated quantity to ${newQuantity} in db`);
        })
    } catch (err) {
        console.log(err);
    }
});

app.put('/updatefeatured', async (req, res) => {
    const featured = "Yes";
    const id = req.body.id;

    try {
        SpicesModel.findById(id, (err, update) => {
            update.featured = featured;
            update.save();
            console.log('updated to featured in db');
        })
    } catch (err) {
        console.log(err);
    }
});

app.put('/updateunfeatured', async (req, res) => {
    const featured = "No";
    const id = req.body.id;

    try {
        SpicesModel.findById(id, (err, update) => {
            update.featured = featured;
            update.save();
            console.log('updated to unfeatured in db');
        })
    } catch (err) {
        console.log(err);
    }
});

app.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;
    await SpicesModel.findByIdAndRemove(id).exec();
    console.log(`removed id: ${id} from db`);

});