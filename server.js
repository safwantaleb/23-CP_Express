const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
var mustacheExpress = require("mustache-express");
var fulldate = require("dateformat");
var now = new Date();
var jour = fulldate(now, "dddd");
var hour = fulldate(now, "HH:MM");
console.log(jour, hour);

app.use(express.static(path.join(__dirname, "public")));

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  if (hour >= "09:00" && hour <= "17:00") {
    if (jour != "Sunday" && jour != "Saturday") {
      res.render("home");
    } else res.render("closed");
  } else res.render("closed");
});

app.get("/our-services", (req, res) => {
  if (hour >= "09:00" && hour <= "17:00") {
    if (jour != "Sunday" && jour != "Saturday") {
      res.render("our-services");
    } else res.render("closed");
  } else res.render("closed");
});

app.get("/contact-us", (req, res) => {
  if (hour >= "09:00" && hour <= "17:00") {
    if (jour != "Sunday" && jour != "Saturday") {
      res.render("contact-us");
    } else res.render("closed");
  } else res.render("closed");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
