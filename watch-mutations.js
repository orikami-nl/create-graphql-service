const EE = require("eventemitter3");
const events = new EE();

module.exports.trigger = events.emit.bind(events);
module.exports.watch = events.on.bind(events);
