import { gql } from '@apollo/client';
import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import client from '../../apollo-client';
import { PAGES_CONFIG } from '../config';
import { useTheme } from '../theme';
import { HTMLHead, Navigation, Stage, TextBlock } from '../ui';
import { IPostListProps, PostList } from '../ui/components/PostList';
import { Section } from '../ui/components/Section';

interface IBlogPageProps {
	posts: IPostListProps['posts'];
}

export default function BlogPage({ posts }: IBlogPageProps) {
	const { secondaryPalette, primaryPalette, mediaQueries } = useTheme();
	const router = useRouter();
	const { name, hrefs, navItems } = PAGES_CONFIG;

	return (
		<Fragment>
			<HTMLHead title="Oliver Dietsche | Blog" description="A blog by Oliver Dietsche." />
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
				<Stage name={name} palette={secondaryPalette} githubHref={hrefs.github} linkedInHref={hrefs.linkedIn} />
				<TextBlock
					palette={secondaryPalette}
					title="– Introduction"
					heading="Welcome to my Blog!"
					text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
				/>
			</Section>
			<Section palette={primaryPalette}>
				<PostList posts={posts} palette={secondaryPalette} />
			</Section>
		</Fragment>
	);
}

export async function getStaticProps() {
	const { data }: { data: { posts: Pick<IBlogPageProps, 'posts'> } } = await client.query({
		query: gql`
			query Posts {
				posts {
					slug
					title
					author {
						name
					}
				}
			}
		`,
	});
	return {
		props: {
			posts: data.posts,
		},
	};
}
