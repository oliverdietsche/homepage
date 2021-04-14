import { css } from '@emotion/react';
import { useTheme } from '@material-ui/core';

export interface IFullWidth {
	/**
	 * JSX code between the brackets of using this component
	 */
	children: JSX.Element;
	/**
	 * Number of pixels which equal the space from an element to another
	 */
	spacing?: number;
}

/**
 * May be used as a MaterialUI Grid item
 */
export function FullWidth({ children, spacing }: IFullWidth) {
	const theme = useTheme();

	return (
		<div
			css={css`
				min-width: 100vw;
				position: relative;
				left: 0;
				padding: ${theme.spacing(spacing || 0) * 0.5}px 0;
			`}
		>
			{children}
		</div>
	);
}
