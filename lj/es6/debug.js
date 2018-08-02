//Learning JavaScript Chapter 20
//Customizing Modules with function modules

const debug = require("debug")("main");//note that we immediately call the
//function that the module returns
debug("starting"); //will  log "main starting +0ms if debugging is enabled"

let lastMessage;

module.exports = function(prefix) {
    return function(message) {
        const now = Date.now();
        const sinceLastMessage  = now - (lastMessage || now);
        console.log(`${prefix} ${message} + ${sinceLastMessage}ms`);
        lastMessage = now;
    };
};
