import { css, Global } from '@emotion/core';
import { useTheme } from './ThemeProvider';

export function GlobalStyles() {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				body {
					background: ${theme.palette.background.default};
				}
			`}
		/>
	);
}
