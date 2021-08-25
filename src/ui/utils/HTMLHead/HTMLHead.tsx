import Head from 'next/head';

export interface IHTMLHeadProps {
	title: string;
	description: string;
	noSEI?: boolean;
}

export function HTMLHead({ title: siteTitle, description, noSEI = false }: IHTMLHeadProps) {
	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content={description} />
			{noSEI ? <meta name="robots" content="noindex, nofollow" /> : null}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore: charset in lowercase */}
			<meta charset="UTF-8" />
		</Head>
	);
}
