const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(' sk_test_51HxOyPJ5Ow2zPMhe7hRXWU3x52b9VHDcRXFuoS5Jp4QpI7qwAM414zkblzt0C7impWqVVQSdDMUrbMhkcE7JPq6900Wg8vVzip ');

const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'inr'
    });

    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send('404, This is bhawesh Paliwal');
});

exports.api = functions.https.onRequest(app);