var p = require('./pomelo/pomelo-client.js')
typeof(window) == "undefined" ? this.pomelo = p : window.pomelo = p;
