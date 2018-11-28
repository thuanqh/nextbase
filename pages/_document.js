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
			<html lang="en">
				<Head>
					<Manifest themeColor='#000000' />
					<link rel='stylesheet' href='/_next/static/style.css' />
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
