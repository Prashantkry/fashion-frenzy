const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// middle ware
app.use(express.json({ limit: "10mb" }));

// implementing cors start
// app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//! google login start
const helmet = require("helmet");
app.use(helmet({ crossOriginResourcePolicy: false })); // act as middleware check headers

const passport = require("passport"); // step 1
const { Strategy } = require("passport-google-oauth20"); // security reason implement with middleware

const cookieSessions = require("cookie-session"); // step 4

require("dotenv").config();
// google credential to login start
const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY1: process.env.COOKIE_KEY1,
  COOKIE_KEY2: process.env.COOKIE_KEY2,
};
// google credential to login end

const authOptions = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

const verifyCallback = (accessToken, refreshToken, profile, done) => {
  console.log("Google LogIn Data ", profile);
  done(null, profile);
};

passport.use(new Strategy(authOptions, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.use(
  cookieSessions({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY1, config.COOKIE_KEY2],
  })
);
app.use(passport.initialize());
function checkLoggedIn(req, res, next) {
  console.log("Current user:", req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in!",
    });
  }
  next();
}
// routing of all endpoints start
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https/www.google.com",
    successRedirect: "/",
    session: true,
  }),
  (req, res) => {
    console.log("google logged in");
  }
);
app.get("/auth/logout", (req, res) => {
  req.logOut();
  return res.redirect("/");
});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.send("It's personal");
});

app.get("/failure", (req, res) => {
  return res.send("Failed to log in!");
});

// ! google login end

// version routing
const versionAPI = require("./routes/VersionAPI");

// routing access
app.use("/api/v1", versionAPI);

app.get("/", (req, res) => {
  res.json({ message: "<h1>hi</h1>}" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
