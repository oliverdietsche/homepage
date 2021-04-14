import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

export const THEME: Theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				light: '#7C3CA3',
				main: '#4B2563',
				dark: '#422057',
				contrastText: '#fff',
			},
			secondary: {
				light: '#FAF750',
				main: '#FCF951',
				dark: '##D1CF43',
				contrastText: '#000',
			},
		},
	})
);
