var TinyEmitter = require("tiny-emitter");
var Request = require("browser-request");

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = Request;
    this.URL = "https://localhost:3000";
  }
}

module.exports = NTask;