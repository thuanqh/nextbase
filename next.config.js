const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const images = require("next-images");

module.exports = withPlugins([
  [
    offline,
    {
      workboxOpts: {
        swDest: "static/service-worker.js"
      },
      experimental: {
        async rewrites() {
          return [
            {
              source: "/service-worker.js",
              destination: "/_next/static/service-worker.js"
            }
          ];
        }
      }
    }
  ],
  [images]
]);
