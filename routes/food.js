const express = require("express");
const router  = express.Router();
const meetups = require('./meetups')
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5000/',
  optionSuccessStatus: 200,
  credentials: true
}

router.use(cors(corsOptions));

module.exports = () =>{
  router.get("/:lat/:lon", (req, res) => {
    let lat = req.params.lat;
    let lon = req.params.lon;
    meetups(lat,lon)
    .then((events) => {
      //filter events such that events without location/description removed
      events = events.filter((event) => {
        return event.venue !== undefined;
      })

      //sort by events that are soonest
      events.sort((a,b) => {
        return a.time - b.time
      })

      res.send(events);
    })
  })

  return router;
}