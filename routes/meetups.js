const request = require("request-promise");
require("dotenv").config();

module.exports = (lat, lon) => {
  let options = {
    method: 'GET',
    uri: `https://api.meetup.com/find/events?photo-host=public&text=pizza&sig_id=212972038&lon=${lon}&lat=${lat}&only=time%2Cdescription%2Cname%2Cvenue&sig=12cfedcce8cc8bb0db6ccb84a874de83fb102ed3`,
    json: true
  };

  //return promise
  return request(options)
};
