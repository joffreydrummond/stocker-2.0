const express = require("express"),
  mongoose = require("mongoose"),
  routes = require("./routes"),
  app = express(),
  helmet = require('helmet');
  PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(helmet());
app.use(routes);
// app.use("/", otherRoutes);

// Send every request to the React app
// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || "mongodb://smoker:B1gdank@ds349587.mlab.com:49587/heroku_z7lhdsd6");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
