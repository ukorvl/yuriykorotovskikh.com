/**
 * @file Generate sitemap.xml
 */

import xml from "xml";

export const generateSitemap = (posts, config) => {
  const { origin } = config;

  const items = posts.map((post) => {
    return {
      url: [
        { loc: `${origin}/${post.url}` },
        { lastmod: post.date.toISOString() },
        { changefreq: "monthly" },
        { priority: 0.8 },
      ],
    };
  });

  const sitemapXml = {
    urlset: [
      {
        _attr: {
          xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
          "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
          "xmlns:mobile": "http://www.google.com/schemas/sitemap-mobile/1.0",
        },
      },
      ...items,
    ],
  };

  return xml(sitemapXml, {
    declaration: true,
    indent: "  ",
  });
}
