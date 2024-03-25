require("dotenv").config();
const stripeKey = process.env.STRIPE_SECRET_KEY;
// console.log(stripeKey);
const stripe = require("stripe")(stripeKey);
// console.log(stripe);

const payment = async (req, res) => {
  const cartItems = req.body.cartItems;
  const UserId = req.body.UserId;
  const quantities = req.body.quantities;
  // console.log(quantities);
  // console.log(cartItems, UserId);

  const line_items = cartItems.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.ProductName,
        images: [product.ProductImage],
      },
      unit_amount: product.ProductPrice * 100,
    },
    quantity: quantities,
  }));
  // console.log(line_items);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: "http://localhost:5173",
      cancel_url: "http://localhost:5173",
    });
    // console.log(session);
    res.json({ id: session.id });
  } catch (er) {
    console.log(er);
  }
};

module.exports = { payment };
