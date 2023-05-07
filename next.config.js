module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/portfolio',
				permanent: true,
			},
		];
	},
};
