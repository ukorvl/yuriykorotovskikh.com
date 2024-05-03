const config = {
	// Site origin (without trailing slash)
	origin: "https://yuriykorotovskikh.com",

	// Site language
	lang: "en",

	// Meta tags
	meta: {
		description:
			"Personal site of Yury Korotovskikh generated on the server complitely",
		charset: "utf-8",
		viewport: "width=device-width, initial-scale=1.0",
		keywords: "personal site, blog, portfolio, Yury Korotovskikh, web, UX",
		robots: {
			index: true,
			follow: true,
		},
		author: "Yury Korotovskikh <ukorotovskiy@gmail.com>",
	},

	// Site title
	title: {
		default: "Yury Korotovskikh personal site",
		// Template for page titles
		template: "%s | Yury Korotovskikh personal site",
	},

	// Icons
	icons: [
		{
			href: "/favicon.ico",
			sizes: "any",
			type: "image/x-icon",
			rel: "icon",
		},
		{
			href: "/logo.svg",
			sizes: "any",
			type: "image/svg+xml",
			rel: "icon",
		},
		{
			href: "apple-touch-icon.png",
			sizes: "180x180",
			rel: "apple-touch-icon",
		},
	],

	// Web app manifest
	manifest: "/manifest.json",

	// RSS feed file
	rssFile: "rss.xml",

	// Sitemap file
	sitemapFile: "sitemap.xml",

	// Google Analytics tracking ID
	googleAnalytics: "UA-XXXXXXXXX-X",

	// Open Graph data
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://yuriykorotovskikh.com",
		site_name: "Yury Korotovskikh personal site",
		title: "Yury Korotovskikh personal site",
		description:
			"Personal site of Yury Korotovskikh generated on the server complitely",
		image: "/logo.png",
	},

	// Twitter card data
	twitter: {
		card: "summary_large_image",
		site: "@ukorvl",
		title: "Yury Korotovskikh personal site",
		description:
			"Personal site of Yury Korotovskikh generated on the server complitely",
		image: "/logo.png",
	},

	// Blog settings
	blog: {
		// Directory for blog posts
		postsDirectory: "content/posts",
		// Comments
		comments: {
			allow: false,
		},
	},

	// Pages settings
	pages: {
		// Directory for pages
		pagesDirectory: "content/pages",
	},

	// Build settings
	build: {
		// Output directory
		outDir: "build",
		// Directory for static files
		staticDir: "public",
		// Clear output directory before build
		clear: true,
	},
};

Object.freeze(config);

export { config };
