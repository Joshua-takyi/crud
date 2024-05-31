/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		staleTimes: {
			dynamic: 0,
			static: 20,
		},
	},
};

export default nextConfig;
