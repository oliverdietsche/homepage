import { css } from '@emotion/react';
import Link from 'next/link';

interface IPostListData extends Pick<IPost, 'slug' | 'title'> {
	author: Pick<NonNullable<IPost['author']>, 'name'>;
}

export interface IPostListProps {
	posts: IPostListData[];
	palette: IThemePalette;
}

export function PostList({ posts, palette }: IPostListProps) {
	return (
		<div
			css={css`
				display: grid;
				grid-gap: 32px;
			`}
		>
			{posts.map(({ slug, title, author }) => (
				<Link key={`post_${slug}`} passHref href={`/blog/${slug}`}>
					<a
						css={css`
							display: grid;
							grid-gap: 8px;
							padding: 32px;
							border-radius: 5px;
							background: ${palette.background};
							color: ${palette.text.primary};

							transition: 0.4s;
							:hover {
								transform: scale(1.1);
							}
						`}
					>
						<p
							css={css`
								margin: 0;
								font-size: 1.5rem;
							`}
						>
							{title}
						</p>
						<p
							css={css`
								margin: 0;
								font-size: 1.1rem;
							`}
						>
							by {author.name}
						</p>
					</a>
				</Link>
			))}
		</div>
	);
}
