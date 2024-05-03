/**
 * @file Build site helper class.
 */

import fs from "fs";
import { markdownToHtml } from "./markdownToHtml.js";
import { generateRSS } from "./generateRSS.js";
import { rimraf } from "rimraf";
import { generateSitemap } from "./generateSitemap.js";

class Builder {
	constructor(config) {
		this.config = config;
	}

	build() {
		// create output directory if not exists
		if (!fs.existsSync(this.config.build.outDir)) {
			fs.mkdirSync(this.config.build.outDir);
		} else {
			// clear output directory
			if (this.config.build.clear) {
				rimraf.sync(`${this.config.build.outDir}/*`, {
					glob: true,
				});
			}
		}

		// build site
		//this.#buildPages();
		this.#buildRssFile();
		this.#buildSitemap();
	}

	#buildPage(path) {
		// build page
		const mdFile = fs.readFileSync(path, "utf-8");

		const html = markdownToHtml(mdFile);
		fs.writeFileSync(path.replace(".md", ".html"), html);
	}

	#buildPages() {
		const pages = this.config.pages;

		for (const page of pages) {
			this.#buildPage(`${this.contentPath}/${page.content}.md`);
		}
	}

	#buildRssFile() {
		const rssMarkup = generateRSS([], this.config);

		fs.writeFileSync(
			`${this.config.build.outDir}/${this.config.rssFile}`,
			rssMarkup,
		);
	}

	#buildSitemap() {
		const sitemap = generateSitemap([], this.config);
		fs.writeFileSync(
			`${this.config.build.outDir}/${this.config.sitemapFile}`,
			sitemap,
		);
	}
}

export { Builder };
