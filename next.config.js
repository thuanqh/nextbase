const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const images = require("next-images");

module.exports = withPlugins([[offline], [images]]);
