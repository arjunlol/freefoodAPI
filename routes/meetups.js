    // uri: "https://api.meetup.com/find/events?&sign=true&photo-host=public&lon=-79.395197&radius=100&lat=43.644625&only=name,description,time,venue&key=",

//location/radius hard coded, refactor later for function to take in loc
const request = require("request-promise");
require("dotenv").config();

module.exports = () => {
  let options = {
    method: 'GET',
    uri: `https://api.meetup.com/find/events?photo-host=public&text=pizza&sig_id=212972038&lon=-79.3776580&lat=43.6401590&sig=fc3244af53dba47f21c4ca6a5d8177947236d96b`,
    json: true
  };

  request(options).then((data) => {
    console.log(data)
  });
};
