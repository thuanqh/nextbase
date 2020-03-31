require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const images = require("next-images");

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];
    return config;
  }
};

module.exports = withPlugins(
  [
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
    images
  ],
  nextConfig
);
