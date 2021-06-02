interface ITheme {
	universalColors: {
		primary: string;
		secondary: string;
	};
	primaryPalette: IPalette;
	secondaryPalette: IPalette;
	mediaQueries: {
		tabletUp: string;
	};
}

interface IThemePalette {
	background: string;
	text: {
		primary: string;
		secondary: string;
		disabled: string;
	};
}
