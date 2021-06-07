import { css } from '@emotion/react';
import Link from 'next/link';
import { useTheme } from '../../../theme';
import { fadeInFromTop } from '../../utils';

export interface INavigationProps {
	items: INavItem[];
	currentHref: string;
	palette: IThemePalette;
}

export function Navigation({ items, currentHref, palette, ...props }: INavigationProps) {
	const { universalColors } = useTheme();

	return (
		<nav
			css={css`
				display: flex;
				flex-flow: row wrap;
			`}
			{...props}
		>
			{items.map(({ text, href }, index) => {
				const activeItem = href === currentHref;
				return (
					<div
						key={`navItem-${index}`}
						css={css`
							margin: 8px;
						`}
					>
						<Link passHref href={href}>
							<a
								css={css`
									line-height: 1em;
									font-size: 1.5rem;
									color: ${activeItem ? palette.text.primary : palette.text.secondary};

									${!activeItem
										? css`
												:hover {
													color: ${universalColors.primary};
												}
										  `
										: ''}

									${activeItem
										? css`
												cursor: default;
												position: relative;

												::after {
													content: '';
													display: block;
													position: absolute;
													left: calc(50% - 5px / 2);
													width: 5px;
													height: 5px;
													background: ${universalColors.primary};
													border-radius: 50%;
													animation: ${fadeInFromTop} 0.4s ease;
												}
										  `
										: ''}
								`}
							>
								{text}
							</a>
						</Link>
					</div>
				);
			})}
		</nav>
	);
}
