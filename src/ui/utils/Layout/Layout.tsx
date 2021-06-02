import { Fragment } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export interface ILayoutProps {
	children: JSX.Element;
}

export function Layout({ children }: ILayoutProps) {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}
