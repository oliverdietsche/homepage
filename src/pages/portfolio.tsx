import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import { PAGES_CONFIG } from '../config';
import { useTheme } from '../theme';
import { Card, Navigation, Stage, TextBlock } from '../ui';
import { IconBadge } from '../ui/components/IconBadge';
import { Quote } from '../ui/components/Quote';
import { Section } from '../ui/components/Section';

export default function PortfolioPage() {
	const { primaryPalette, secondaryPalette, mediaQueries } = useTheme();
	const router = useRouter();
	const { navItems } = PAGES_CONFIG;

	return (
		<Fragment>
			<Section palette={primaryPalette}>
				<Navigation
					css={css`
						${mediaQueries.tabletUp} {
							grid-column: 2;
						}
					`}
					palette={primaryPalette}
					items={navItems}
					currentHref={router.pathname}
				/>
				<Stage
					name="Oliver Dietsche."
					palette={primaryPalette}
					githubHref="https://github.com/oliverdietsche"
					linkedInHref="https://www.linkedin.com/in/oliver-dietsche-b5b5a0190"
				/>
				<TextBlock
					palette={primaryPalette}
					title="– Introduction"
					heading="Software Developer, based in Switzerland, happy all around the world."
					text="Hi, I’m Oliver Dietsche and I’d call myself an enthusiastic software developer. This webpage acts as my digital portfolio and is entirely created by myself. You’ll get to know more about me as a person, my skill set, projects and more."
				/>
			</Section>
			<Section palette={secondaryPalette}>
				<TextBlock
					palette={primaryPalette}
					title="– Contact"
					heading="How to get in touch with me."
					text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
				/>
			</Section>
			<Section palette={primaryPalette}>
				<div
					css={css`
						display: flex;
						flex-flow: row wrap;
						justify-content: flex-end;
						align-content: center;
					`}
				>
					<IconBadge title="TypeScript" icon="typescript" contentColor="#FFFFFF" />
					<IconBadge title="React" icon="react" contentColor="#FFFFFF" />
					<IconBadge title="HTML" icon="html" contentColor="#FFFFFF" />
					<IconBadge title="CSS" icon="css" contentColor="#FFFFFF" />
					<IconBadge title="Java" icon="java" contentColor="#FFFFFF" />
					<IconBadge title="SQL" icon="mysql" contentColor="#FFFFFF" />
					<IconBadge title="PHP" icon="php" contentColor="#FFFFFF" />
					<IconBadge title="Firebase" icon="firebase" contentColor="#FFFFFF" />
				</div>
				<TextBlock
					css={css`
						grid-row: 1;

						${mediaQueries.tabletUp} {
							grid-column: 2;
						}
					`}
					palette={primaryPalette}
					title="– Skills"
					heading="Brief overview of the technologies I've worked with in the past."
					text="I spent 4 years completing my apprenticeship in computer science computer during which I built a solid knowledge foundation of computers and learned a lot about software development.\n\n
					My current main focus lies on Custom Solutions built with frontend frameworks utilizing TypeScript and other services needed to fulfill the requirements.\n\n
					I have general knowledge in Java and experience using the Spring Framework to build a Web-App in combination with a SQL database and Thymeleaf to display the content. I'm also able to build websites using wordpress."
				/>
			</Section>
			<Section palette={secondaryPalette}>
				<div
					css={css`
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
						grid-gap: 32px;
					`}
				>
					<TextBlock
						css={css`
							${mediaQueries.tabletUp} {
								grid-column: span 2;
							}
						`}
						palette={secondaryPalette}
						title="– Projects"
						heading="Projects that I share on GitHub and other applications where I've been involved in development."
						text="I organize most of my private coding projects publicly on GitHub so that any person interested in it can either use it, learn from it or participate and improve it."
					/>
					<Card
						title="Autofiles"
						description="This library supports automation of file creation in your project. It's highly configurable so that you can adjust it to your needs."
						palette={primaryPalette}
						icons={['typescript']}
						githubHref="https://github.com/oliverdietsche/autofiles"
					/>
					<Card
						title="Workshops - IPA"
						description="I developed this application as part of my apprenticeship graduation. It's been developed for Namics, the company I've worked at during my apprenticeship and allows employees to plan and join workshops using their google accounts. Calendar events are created for every workshop."
						palette={primaryPalette}
						icons={['firebase', 'storybook', 'nextjs', 'typescript']}
						githubHref="https://github.com/oliverdietsche/workshops-ipa"
					/>
					<Card
						title="Bullet Todo"
						description={
							'An app to manage your tasks. The layout and functionality are inspired by a journal method called "Bullet Journal".'
						}
						palette={primaryPalette}
						icons={['storybook', 'nextjs', 'typescript']}
						githubHref="https://github.com/oliverdietsche/bullet-todo"
					/>
					<Card
						title="WWDC 2019 Scholarships"
						description="My submission to the 2019 WWDC scholarships which unfortunately got rejected. It's a binary game where you have to spin different layers of wheels with 0s and 1s on it to create binary codes matching the decimal on the outside. More information can be found in the GitHub repository."
						palette={primaryPalette}
						icons={['swift']}
						githubHref="https://github.com/oliverdietsche/wwdc2019-scholarships"
					/>
					<Card
						title="Homepage"
						description="This page you're on right now."
						palette={primaryPalette}
						icons={['storybook', 'nextjs', 'typescript']}
						githubHref="https://github.com/oliverdietsche/homepage"
					/>
				</div>
			</Section>
			<Section palette={primaryPalette}>
				<TextBlock
					palette={primaryPalette}
					title="– Achievements"
					heading="Achievements I’ve reached so far."
					text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
				/>
			</Section>
			<Section palette={secondaryPalette}>
				<TextBlock palette={secondaryPalette} title="– Testimonials" heading="What others say about my work." />
				<Quote
					author="Remi Ashton from Ocere"
					quote='Over the three weeks, Oliver was part of our team we felt he grew into his role. He very quickly became one of the "leaders" of the group of lads he was working with.\n\nHe listened to instructions and worked very hard at executing what we had requested. He seemed to work very well in his team and was confident enough to come and ask myself or my team for help or confirmation on things he was not too sure with.\n\nAs the weeks went on Oliver seemed to grow in confidence and started interacting more and more with the team in the office.\n\nThe work he carried out was excellent, I think with more time and maybe a little more instruction from our side we would have the ideal CRM system, but what they have created is excellent.\n\nOliver was a pleasure to have in and around the office and would like to wish him the very best for his future. I’m sure whatever career path he decides to take he will excel in and will be a valid team member.'
					palette={primaryPalette}
					backgroundPalette={secondaryPalette}
				/>
			</Section>
		</Fragment>
	);
}
