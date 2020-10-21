const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HdzGuK9CUVbYgbInW6rLwspKopXbmJ4R270G4w3FMVlhqjqIjVNCg4OSMQjXH22OeJjuBQN7n6ZOecicpgEqzps00fe6tJLBd")
//API

//App Config
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });
    //OK_created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen Command
exports.api = functions.https.onRequest(app);