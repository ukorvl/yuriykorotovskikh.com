/**
 * @file Generate RSS feed xml file.
 */

import xml from "xml";

const generateItem = (post) => {
	const item = [
		{ title: post.title },
		{ link: post.url },
		{ guid: post.url },
		{ description: post.excerpt },
		{ pubDate: post.date.toUTCString() },
	];

	return { item };
};

const generateRSS = (posts, config) => {
  const { title, description, origin, rssFile, lang } = config;

	const items = posts.map(generateItem);

	const rss = {
		rss: [
			{
				_attr: {
					version: "2.0",
					"xmlns:atom": "http://www.w3.org/2005/Atom",
					"xmlns:dc": "http://purl.org/dc/elements/1.1/",
				},
				channel: [
					{ title },
					{ link: origin },
					{ description },
					{ language: lang },
					{ lastBuildDate: new Date().toUTCString() },
					{ generator: "Yury Korotovskikh personal site" },
					{
						"atom:link": {
							_attr: {
								href: `${origin}/${rssFile}`,
								rel: "self",
								type: "application/rss+xml",
							},
						},
					},
					...items,
				],
			},
		],
	};

	return `<?xml version="1.0" encoding="utf-8"?>${xml(rss, {
		declaration: true,
		indent: "  ",
	})}`;
};

export { generateRSS };
