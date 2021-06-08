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
	const { universalColors } = useTheme();
	return (
		<div
			css={css`
				display: grid;
				grid-gap: 32px;
				grid-auto-flow: row;
				margin: 8px;
				padding: 32px;
				background: ${palette.background};
				color: ${palette.text.primary};
				border-radius: 5px;

				position: relative;
			`}
		>
			<Icon
				icon="quotes"
				fill={universalColors.primary}
				size={56}
				css={css`
					position: absolute;
					top: -26px;
					left: -18px;
				`}
			/>
			<p
				css={css`
					margin: 0;
					text-align: justify;
					hyphens: auto;
				`}
				dangerouslySetInnerHTML={{ __html: replaceNewlinesWithBreakTags(quote) }}
			/>
			<p
				css={css`
					margin: 0;
					font-size: 1.2rem;
					color: ${backgroundPalette.text.primary};
				`}
			>
				– {author}
			</p>
			<Icon
				icon="quotes"
				fill={universalColors.primary}
				size={56}
				css={css`
					position: absolute;
					bottom: -26px;
					right: -18px;
				`}
			/>
		</div>
	);
}
