const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
const PORT = process.env.PORT|| 3000;
const foodRoutes = require("./routes/food");


app.use(bodyParser.urlencoded({extended: true}));
app.use("/food", foodRoutes());


app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});