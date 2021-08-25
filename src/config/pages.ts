export const PAGES_CONFIG: IPagesConfig = {
	name: 'Oliver Dietsche.',
	hrefs: {
		github: 'https://github.com/oliverdietsche',
		linkedIn: 'https://www.linkedin.com/in/oliver-dietsche-b5b5a0190'
	},
	navItems: [
		{
			text: 'Portfolio',
			href: '/portfolio',
		},
		{
			text: 'Blog',
			href: '/blog',
		},
	],
};

interface IPagesConfig {
	name: string;
	hrefs: {
		github: string;
		linkedIn: string
	}
	navItems: INavItem[];
}
