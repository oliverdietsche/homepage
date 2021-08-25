import { css } from '@emotion/react';

interface IPostViewData extends Pick<IPost, 'title' | 'contentHtml'> {
	author: Pick<NonNullable<IPost['author']>, 'name'>;
}

export interface IPostViewProps {
	post: IPostViewData;
}

export function PostView({ post: { title, contentHtml, author } }: IPostViewProps) {
	return (
		<div
			css={css`
				margin: 8px;
			`}
		>
			<h1
				css={css`
					margin: 0;
					font-size: 2rem;
				`}
			>
				{title}
			</h1>
			<p
				css={css`
					margin: 0 0 32px 0;
				`}
			>
				by {author.name}
			</p>
			<div
				css={css`
					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						margin: 32px 0 16px 0;
					}

					p {
						margin: 0 0 0 16px 0;
						white-space: pre-wrap;
					}

					ol, ul {
						margin: 0;
					}

					pre {
						word-wrap: break-word;
						background-color: #f8f8f8;
						border: 1px solid #dfdfdf;
					}
				`}
				dangerouslySetInnerHTML={{ __html: contentHtml }}
			/>
		</div>
	);
}
