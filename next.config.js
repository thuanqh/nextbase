const withPlugins = require('next-compose-plugins')
const workbox = require('next-workbox')
const manifest = require('next-manifest')
const sass = require('@zeit/next-sass')

module.exports = withPlugins([
	[workbox],
	[manifest, {
		manifest: {
			icons: {
				src: './assets/icon-512x512.png',
				cache: true
			}
		}
	}],
	[sass],
])
