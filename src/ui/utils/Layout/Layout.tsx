import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import { LayoutConfig } from '../../../config';

export interface ILayoutProps {
	children: JSX.Element;
	headerComponent?: JSX.Element;
}

export function Layout({ children, headerComponent }: ILayoutProps) {
	return (
		<Fragment>
			{headerComponent && <header>{headerComponent}</header>}
			<Container component="main" maxWidth={LayoutConfig.maxWidth}>
				{children}
			</Container>
		</Fragment>
	);
}
