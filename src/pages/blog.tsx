import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { Fragment } from 'react';
import { PAGES_CONFIG } from '../config';
import { useTheme } from '../theme';
import { Navigation, Stage, TextBlock } from '../ui';
import { Section } from '../ui/components/Section';

export default function BlogPage() {
	const { secondaryPalette, mediaQueries } = useTheme();
	const router = useRouter();
	const { navItems } = PAGES_CONFIG;

	return (
		<Fragment>
			<Head>
				<title>Oliver Dietsche | Blog</title>
				<meta
					name="description"
					content="A blog by Oliver Dietsche."
				/>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-ignore: charset in lowercase */}
				<meta charset="UTF-8" />
			</Head>
			<Section palette={secondaryPalette}>
				<Navigation
					css={css`
						${mediaQueries.tabletUp} {
							grid-column: 2;
						}
					`}
					palette={secondaryPalette}
					items={navItems}
					currentHref={router.pathname}
				/>
				<Stage
					name="Oliver Dietsche."
					palette={secondaryPalette}
					githubHref="https://github.com/oliverdietsche"
					linkedInHref="https://www.linkedin.com/in/oliver-dietsche-b5b5a0190"
				/>
				<TextBlock
					palette={secondaryPalette}
					title="– Introduction"
					heading="Welcome to my Blog!"
					text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
				/>
			</Section>
		</Fragment>
	);
}
