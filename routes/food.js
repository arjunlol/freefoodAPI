const express = require("express");
const router  = express.Router();
const meetups = require('./meetups')
const cors = require('cors');

let whitelist = ['http://localhost:5000', 'https://arjunlol.github.io']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
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