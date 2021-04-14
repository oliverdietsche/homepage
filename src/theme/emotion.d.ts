import '@emotion/react';
import { Theme as MuiTheme } from '@material-ui/core';

declare module '@emotion/react' {
	// eslint-disable-next-line
	export interface Theme extends MuiTheme {}
}
