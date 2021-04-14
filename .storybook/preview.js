import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { Layout } from '../src/ui/utils';

const withThemeProvider = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
);

const withLayout = (Story) => (
	<Layout>
		<Story />
	</Layout>
);

export const decorators = [withThemeProvider, withLayout];

export const parameters = {
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'iphonex',
	},
	options: {
		storySort: {
			order: ['Pages', 'Components'],
		},
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
};
