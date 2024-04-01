const express = require("express");
// const { payment } = require("../controller/paymentController");
const RouterPayment = express.Router();

require("dotenv").config();
const stripeKey = process.env.STRIPE_SECRET_KEY;
// console.log(stripeKey);
const stripe = require("stripe")(stripeKey);

// RouterPayment.post("/", payment);

RouterPayment.post("/", async (req, res) => {
  const cartItems = req.body.cartItems;
  const UserId = req.body.UserId;
  // const quantities = req.body.quantities;
  // console.log(quantities);
  console.log(cartItems, UserId);
  // console.log(UserId);

  const line_items = cartItems.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.ProductName,
        images: [product.ProductImage],
      },
      unit_amount: product.ProductPrice * 100,
    },
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
      maximum: 10,
    },
    quantity: 1,
  }));
  // console.log(line_items);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      custom_fields: [
        {
          key: "Name",
          label: {
            type: "custom",
            custom: "Name",
          },
          type: "text",
        },
      ],
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      shipping_address_collection: {
        allowed_countries: ["US", "IN"],
      },
      custom_text: {
        shipping_address: {
          message:
            "Please note that we can't guarantee 2-day delivery for PO boxes at this time.",
        },
        submit: {
          message: "We'll email you instructions on how to get started.",
        },
      },
      success_url: "http://localhost:5173",
      cancel_url: "http://localhost:5173",
    });
    console.log(session);
    res.json({ 
      id: session.id, 
      session: session 
    });
  } catch (er) {
    console.log(er);
  }
});

const endpointSecret =
  "whsec_3fd88f7b9afe27f8d049c02d692bb7b1637f0f455f626287afb4fdcf7943903a";
RouterPayment.post("/webhook",express.json({ type: "application/json" }),(request, response) => {
    console.log("webhook triggered");
    const sig = request.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("event came");
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        console.log(paymentIntentSucceeded);
        break;
      //   case "checkout.session.completed":
      //     const checkOutCompleteData = WebhookEvent.data;
      //     console.log(checkOutCompleteData);
      //     const checkOutCompleteId = checkOutCompleteData.id;
      //     console.log(checkOutCompleteId);
      //     console.log("check Out Complete Data - ", checkOutCompleteData);
      //     const customerId = checkOutCompleteData.customer;
      //     const client_reference_id = checkOutCompleteData.client_reference_id;
      //     const subscriptionId = checkOutCompleteData.subscription;
      //     console.log(client_reference_id);
      //     console.log(subscriptionId);

      //     const url = `https://api.stripe.com/v1/checkout/sessions/${checkOutCompleteId}/line_items`;
      //     const options = {
      //       method: "GET",
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/x-www-form-urlencoded",
      //         Authorization: `Bearer ${stripeKey}`,
      //       },
      //     };
      //     const payment_response = fetch(url, options);
      //     console.log(payment_response);
      //     const payment_data = payment_response.json();
      //     console.log(payment_data);
      // break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    console.log(`Unhandled event type ${event.type}`);
    response.send();
  }
);

module.exports = RouterPayment;
