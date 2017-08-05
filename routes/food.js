const express = require("express");
const router  = express.Router();
const meetups = require('./meetups')
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
      res.send(events);
    })
  })

  return router;
}