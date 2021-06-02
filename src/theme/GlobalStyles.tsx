import { css, Global } from '@emotion/core';
import { useTheme } from './ThemeProvider';

export function GlobalStyles() {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				@import '/normalize.min.css';
				@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

				html {
					/*background: ${theme.primaryPalette.background};
					color: ${theme.primaryPalette.text.primary};*/
					font-family: 'Poppins', sans-serif;
					font-size: 16px;
				}
			`}
		/>
	);
}
