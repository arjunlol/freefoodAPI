const express = require("express");
const router  = express.Router();
const meetups = require('./meetups')
const cors = require('cors');

//allow localhost:3000 origin for testing
const whitelist = ['https://arjunlol.github.io', 'http://localhost:3000']

//configure cors with dynamic origin
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionSuccessStatus: 200,
  credentials: true
}

router.use(cors(corsOptions));

module.exports = () =>{
  router.get("/:type/:lat/:lon", (req, res) => {
    let type = req.params.type;
    let lat = req.params.lat;
    let lon = req.params.lon;
    meetups(lat,lon,type)
    .then((events) => {
      //filter events such that events without location/description are removed
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