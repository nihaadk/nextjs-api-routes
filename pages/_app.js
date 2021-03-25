// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
