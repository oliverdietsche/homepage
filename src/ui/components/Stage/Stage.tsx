import { css } from '@emotion/react';
import xss from 'xss';
import { useTheme } from '../../../theme';
import { ICONS } from '../Icon';
import { IconButton } from '../IconButton';

export interface IStageProps {
	name: string;
	githubHref?: string;
	linkedInHref?: string;
	instagramHref?: string;
	twitterHref?: string;
	palette: IThemePalette;
}

export function Stage({ name, githubHref, linkedInHref, instagramHref, twitterHref, palette, ...props }: IStageProps) {
	const { mediaQueries, universalColors } = useTheme();
	return (
		<div
			css={css`
				margin: 8px;
			`}
			{...props}
		>
			<h1
				css={css`
					margin: 0;
					font-size: 3rem;
					line-height: 3.3rem;
					font-weight: 600;
					color: ${palette.text.primary};

					::after {
						content: '';
						display: block;
						width: 50px;
						height: 5px;
						margin: 20px 0;
						background: ${universalColors.primary};
					}

					${mediaQueries.tabletUp} {
						font-size: 4rem;
						line-height: 4.4rem;
					}
				`}
				dangerouslySetInnerHTML={{ __html: xss(name).replace(' ', '<br/>') }}
			/>
			<div
				css={css`
					display: grid;
					grid-auto-flow: column;
					justify-content: left;
					grid-gap: 32px;
					margin-top: 64px;
				`}
			>
				{githubHref ? (
					<IconButton
						href={githubHref}
						fill={palette.text.primary}
						hoverFill={ICONS.github.color}
						icon="github"
					/>
				) : null}
				{linkedInHref ? (
					<IconButton
						href={linkedInHref}
						fill={palette.text.primary}
						hoverFill={ICONS.linkedin.color}
						icon="linkedin"
					/>
				) : null}
				{instagramHref ? (
					<IconButton
						href={instagramHref}
						fill={palette.text.primary}
						hoverFill={ICONS.instagram.color}
						icon="instagram"
					/>
				) : null}
				{twitterHref ? (
					<IconButton
						href={twitterHref}
						fill={palette.text.primary}
						hoverFill={ICONS.twitter.color}
						icon="twitter"
					/>
				) : null}
			</div>
		</div>
	);
}
