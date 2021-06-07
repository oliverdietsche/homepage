import { css } from '@emotion/react';
import { useTheme } from '../../../theme';
import { Icon } from '../Icon/Icon';

export interface IIconFactProps {
	icon: TIcon;
	text: string;
	iconColor: string;
	textColor: string;
}

export function IconFact({ icon, text, iconColor, textColor, ...props }: IIconFactProps) {
	const { mediaQueries } = useTheme();
	return (
		<p
			{...props}
			css={css`
				display: inline-grid;
				grid-auto-flow: column;
				grid-gap: 16px;
				margin: 8px;
				font-size: 1.2rem;

				${mediaQueries.tabletUp} {
					font-size: 1.5rem;
				}
			`}
		>
			<Icon size={30} icon={icon} fill={iconColor} />
			<span
				css={css`
					z-index: 1;
					margin: 0;
					line-height: 30px;
					color: ${textColor};
				`}
			>
				{text}
			</span>
		</p>
	);
}
