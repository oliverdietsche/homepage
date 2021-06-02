export const PAGES_CONFIG: IPagesConfig = {
	navItems: [
		{
			text: 'Portfolio',
			href: '/portfolio',
		},
		/*{
			text: 'Blog',
			href: '/blog',
		},*/
	],
};

interface IPagesConfig {
	navItems: INavItem[];
}
