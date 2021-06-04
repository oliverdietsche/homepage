import { css } from '@emotion/react';
import { ICONS } from '../Icon/const';
import { Icon } from '../Icon/Icon';

export interface IIconBadgeProps {
	icon: TIcon;
	title: string;
	contentColor: string;
}

export function IconBadge({ icon, title, contentColor }: IIconBadgeProps) {
	const { color } = ICONS[icon];
	return (
		<div
			css={css`
				display: inline-grid;
				grid-auto-flow: column;
				grid-gap: 8px;
				margin: 8px;
				padding: 8px;
				background: ${color};
			`}
		>
			<Icon size={30} icon={icon} fill={contentColor} />
			<p
				css={css`
					margin: 0;
					font-size: 24px;
					line-height: 30px;
					color: ${contentColor};
				`}
			>
				{title}
			</p>
		</div>
	);
}
