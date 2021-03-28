const { v4 } = require('uuid');
module.exports.generate = ()=>{
  uuid = v4()
  id = `${uuid.split("-")[0]}${uuid.substr(uuid.length - 2)}`
  return id
}