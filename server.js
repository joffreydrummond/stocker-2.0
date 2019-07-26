const express = require("express"),
  mongoose = require("mongoose"),
  routes = require("./routes"),
  app = express(),
  PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// app.use("/", otherRoutes);

// Send every request to the React app
// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stockerapp");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
