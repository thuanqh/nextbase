import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import ServiceWorker from 'next-workbox/service-worker'
import Manifest from 'next-manifest/manifest'

const isDev = process.env.NODE_ENV !== 'production'

export default class extends Document {
	static getInitialProps({renderPage}) {
		return {
			...renderPage(),
			styles: flush()
		}
  }

	render() {
		return (
			<html lang="en" amp=''>
				<Head>
					<link rel='canonical' href='/' />
					<meta name='viewport' content='width=device-width,minimum-scale=1' />
          			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
          			<style amp-boilerplate=''>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style><noscript><style amp-boilerplate=''>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
          			<style amp-custom=''>{`body {font-family: Roboto, sans-serif; padding: 30px; color: #444;} h1 {margin-bottom: 5px;} .byline { color: #aaa; margin-bottom: 25px; } p {font-size: 18px; line-height: 30px; margin-top: 30px;} .caption {color: #ccc; margin-top: 0; font-size: 14px; text-align: center;}`}</style>
          			<script async src='https://cdn.ampproject.org/v0.js' />
					<link rel="icon" href="/static/favicon.ico" />
					<title>NextBase Boilerplate</title>
					<meta name="description" content="NextBase Boilerplate" />
					<Manifest themeColor='#000000' />
					
				</Head>
				<body>
					<Main />
					<NextScript />
					<ServiceWorker src={'/static/workbox/sw.js'} scope={'../../'} unregister={isDev} />
				</body>
			</html>
		)
	}
}
