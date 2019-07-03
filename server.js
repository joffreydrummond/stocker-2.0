const express = require("express"),
authRoutes = require("./routes/authRoutes"),
otherRoutes = require("./routes/otherRoutes")
passportSetup = require("./config/passport"),
  cookieParser = require('cookie-parser'),
  app = express(),
  dotenv = require("dotenv"),
  passport = require("passport"),
  PORT = process.env.PORT || 3001,
  path = require("path");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(passport.initialize());
app.use("/auth", authRoutes);
// app.use("/", otherRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
