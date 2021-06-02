import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';
import { ReactNode } from 'react';
import { THEME } from './const';
import { GlobalStyles } from './GlobalStyles';

export interface IThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
	return (
		<EmotionThemeProvider theme={THEME}>
			<GlobalStyles />
			{children}
		</EmotionThemeProvider>
	);
}

export const useTheme = () => useEmotionTheme();
