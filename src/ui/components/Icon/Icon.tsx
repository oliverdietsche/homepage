import { css } from '@emotion/react';
import { ICONS } from './const';

export interface IIconProps {
	icon: TIcon;
	size?: number;
	fill?: string;
	hoverFill?: string;
}

export function Icon({ icon, size = 24, fill, hoverFill, ...props }: IIconProps) {
	const { title, color, d, viewBox } = ICONS[icon];
	return (
		<svg
			css={css`
				width: ${size}px;
				height: ${size}px;
				fill: ${fill ?? color};

				${hoverFill
					? css`
							transition: 0.3s;
							:hover {
								fill: ${hoverFill};
							}
					  `
					: ''}
			`}
			role="img"
			viewBox={viewBox}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>{title}</title>
			<path d={d} />
		</svg>
	);
}
