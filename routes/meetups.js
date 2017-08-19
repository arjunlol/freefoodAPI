const request = require("request-promise");
require("dotenv").config();

module.exports = (lat, lon, type) => {
  //set api signature according to food type, default to pizza
  switch (type) {
    case 'beer':
      let sig = 'dcdd168aa7b39ab2bd64ea44d54fc65cf02c152e';
      break;
    default:
      let sig = '12cfedcce8cc8bb0db6ccb84a874de83fb102ed3';
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
