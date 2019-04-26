const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");

module.exports = withPlugins([[offline]]);
