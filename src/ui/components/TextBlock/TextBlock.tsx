import { css } from '@emotion/react';
import { replaceNewlinesWithBreakTags } from '../../utils';

export interface ITextBlockProps {
	title?: string;
	heading: string;
	text?: string;
	palette: IThemePalette;
}

export function TextBlock({ title, heading, text, palette, ...props }: ITextBlockProps) {
	return (
		<div
			css={css`
				margin: 8px;
			`}
			{...props}
		>
			{title ? (
				<p
					css={css`
						margin: 0;
						font-size: 0.9rem;
						font-weight: 400;
						color: ${palette.text.secondary};
					`}
				>
					{title}
				</p>
			) : null}
			<h2
				css={css`
					margin: 12px 0 0;
					font-size: 1.5rem;
					font-weight: 600;
					color: ${palette.text.primary};
				`}
			>
				{heading}
			</h2>
			{text ? (
				<p
					css={css`
						margin: 24px 0 0;
						font-size: 1rem;
						font-weight: 400;
						color: ${palette.text.secondary};
					`}
					dangerouslySetInnerHTML={{ __html: replaceNewlinesWithBreakTags(text) }}
				/>
			) : null}
		</div>
	);
}
