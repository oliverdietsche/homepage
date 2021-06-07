import { css } from '@emotion/react';
import { Icon } from '../Icon';

export interface ICardProps {
	title: string;
	description: string;
	githubHref: string;
	palette: IThemePalette;
	icons?: TIcon[];
}

export function Card({ title, description, githubHref, palette, icons, ...props }: ICardProps) {
	return (
		<a
			href={githubHref}
			css={css`
				display: block;
				box-sizing: border-box;
				height: fit-content;
				padding: 24px;
				background: ${palette.background};

				transition: 0.3s;
				transition-property: transform;
				:hover {
					transform: scale(1.1);
				}
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
				<span
					css={css`
						margin-right: 10px;
						vertical-align: sub;
					`}
				>
					<Icon icon="github" />
				</span>
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
		</a>
	);
}
