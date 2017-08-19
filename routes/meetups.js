const request = require("request-promise");
require("dotenv").config();

module.exports = (lat, lon, type) => {
  //set api signature according to food type, default to pizza
  let sig = '';
  switch (type) {
    case 'beer':
      sig = '1c1a039f4caddc573e3489c768b25c69cb2096b3';
      break;
    default:
      sig = '12cfedcce8cc8bb0db6ccb84a874de83fb102ed3';
  }
  //want venue time, location, name from api call
  let options = {
    method: 'GET',
    uri: `https://api.meetup.com/find/events?photo-host=public&text=${type}&sig_id=212972038&lon=${lon}&lat=${lat}&only=time%2Cdescription%2Cname%2Cvenue&sig=${sig}`,
    json: true
  };

  //return promise
  return request(options)
};
