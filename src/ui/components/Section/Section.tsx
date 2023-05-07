import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { useTheme } from '../../../theme';

export interface ISectionProps {
	palette: IThemePalette;
	children: ReactNode;
}

export function Section({ palette, children }: ISectionProps) {
	const { mediaQueries } = useTheme();
	return (
		<div
			css={css`
				width: 100%;
				background: ${palette.background};
			`}
		>
			<div
				css={css`
					max-width: 1000px;
					margin: 0 auto;
				`}
			>
				<div
					css={css`
						display: grid;
						grid-auto-flow: row;
						grid-gap: 32px;
						padding: calc(24px + 8px) 24px;

						${mediaQueries.tabletUp} {
							grid-gap: 64px;
							padding: calc(64px + 8px) 64px;
						}
					`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
