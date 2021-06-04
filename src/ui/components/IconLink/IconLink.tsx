import { css } from '@emotion/react';
import Link from 'next/link';
import { useTheme } from '../../../theme';
import { IconFact, IIconFactProps } from '../IconFact';

export interface IIconLinkProps extends IIconFactProps {
	href: string;
}

export function IconLink({ icon, text, iconColor, textColor, href }: IIconLinkProps) {
	const { mediaQueries } = useTheme();
	return (
		<Link passHref href={href}>
			<a
				css={css`
					text-decoration: none;
				`}
			>
				<IconFact
					icon={icon}
					text={text}
					iconColor={iconColor}
					textColor={textColor}
					css={css`
						${mediaQueries.tabletUp} {
							::before {
								content: '';
								display: block;
								width: 30px;
							}

							position: relative;
							> svg {
								z-index: 1;
								position: absolute;
								transition: 0.5s;
								right: calc(100% - 30px);
							}

							> span {
								position: relative;
							}

							> span::after {
								z-index: -1;
								content: '';
								position: absolute;
								top: 0px;
								left: 0;
								height: 30px;
								background: ${iconColor};

								transition: 0.35s;
								width: 0;
							}

							:hover > svg {
								right: -30px;
								fill: ${textColor};
							}

							:hover > span {
								transition-delay: 0.2s;
								color: #202020; // TODO: use contrast color
							}

							:hover > span::after {
								transition: 0.45s;
								transition-delay: 0.05s;
								width: 100%;
							}
						}
					`}
				/>
			</a>
		</Link>
	);
}
