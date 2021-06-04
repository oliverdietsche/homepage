import { css } from '@emotion/react';
import { useTheme } from '../../../theme';
import { replaceNewlinesWithBreakTags } from '../../utils';
import { Icon } from '../Icon';

export interface IQuoteProps {
	author: string;
	quote: string;
	palette: IThemePalette;
	backgroundPalette: IThemePalette;
}

export function Quote({ author, quote, palette, backgroundPalette }: IQuoteProps) {
	const { universalColors, mediaQueries } = useTheme();
	return (
		<div
			css={css`
				display: grid;
				grid-gap: 32px;
				grid-template-columns: 40px 1fr;
				margin: 8px;

				${mediaQueries.tabletUp} {
					grid-template-columns: 1fr 24px 140px;
				}
			`}
		>
			<p
				css={css`
					grid-column: span 2;
					margin: 0 0 0 0;
					padding: 32px;
					background: ${palette.background};
					color: ${palette.text.primary};
					border-radius: 5px;

					${mediaQueries.tabletUp} {
						grid-column: span 1;
					}
				`}
				dangerouslySetInnerHTML={{ __html: replaceNewlinesWithBreakTags(quote) }}
			/>
			<Icon
				icon="quotes"
				css={css`
					margin: 0 0 0 16px;
					align-self: center;

					${mediaQueries.tabletUp} {
						margin: 32px 0 0 0;
						align-self: unset;
					}
				`}
				fill={universalColors.primary}
				size={24}
			/>
			<p
				css={css`
					margin: 0;
					font-size: 1.1rem;
					color: ${backgroundPalette.text.primary};

					${mediaQueries.tabletUp} {
						margin: 32px 0 0 0;
					}
				`}
			>
				{author}
			</p>
		</div>
	);
}
