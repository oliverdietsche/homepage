import { css } from '@emotion/react';
import { Icon } from '../Icon';

export interface ICardProps {
	title: string;
	description: string;
	palette: IThemePalette;
	icons?: TIcon[];
	githubHref?: string;
}

export function Card({ title, description, palette, icons, githubHref, ...props }: ICardProps) {
	return (
		<div
			css={css`
				box-sizing: border-box;
				height: fit-content;
				padding: 24px;
				background: ${palette.background};
			`}
			{...props}
		>
			<h3
				css={css`
					margin: 0 0 8px 0;
					color: ${palette.text.primary};
					font-weight: 600;
					font-size: 1.2rem;
				`}
			>
				{githubHref ? (
					<a
						href={githubHref}
						css={css`
							margin-right: 10px;
							vertical-align: sub;
						`}
					>
						<Icon icon="github" />
					</a>
				) : null}
				{title}
			</h3>
			<p
				css={css`
					margin: 0 0 16px 0;
					color: ${palette.text.secondary};
					font-weight: 300;
					font-size: 1rem;
				`}
			>
				{description}
			</p>
			<div
				css={css`
					display: grid;
					grid-auto-flow: column;
					grid-gap: 10px;
					justify-content: flex-end;
				`}
			>
				{icons?.map((icon, index) => (
					<Icon key={`${title}Card-${index}`} icon={icon} />
				))}
			</div>
		</div>
	);
}
