import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { ThemeProvider } from '../theme';
import { Layout } from '../ui';

/**
 * Overwrites default App and allows to add page-wide shared code
 * @param Component - The page component that gets rendered
 * @param pageProps - The props that belong to the page component
 */
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Layout>
				<Fragment>
					<Head>
						<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
						<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
						<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
						<link rel="manifest" href="/site.webmanifest" />
						<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#282c3c" />
						<meta name="msapplication-TileColor" content="#282c3c" />
						<meta name="theme-color" content="#282c3c" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta charSet="UTF-8" />
					</Head>
					<Component {...pageProps} />
				</Fragment>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
