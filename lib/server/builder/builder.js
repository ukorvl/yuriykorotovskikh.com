/**
 * @file Build site helper class.
 */

import fs from "fs";
import { markdownToHtml } from "./markdownToHtml.js";
import { generateRSS } from "./generateRSS.js";
import { rimraf } from "rimraf";
import { generateSitemap } from "./generateSitemap.js";
import ncp from "ncp";
import { logger } from "../utils/logger.js";

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
		this.#buildPages();
		this.#buildRssFile();
		this.#buildSitemap();
		this.#copyStaticFiles();
	}

	async #buildPage(pagePath) {
		// build page
		const pageFileName = pagePath.split("/").pop();
		const contents = fs.readFileSync(pagePath, "utf-8");
		const html = await markdownToHtml(contents);

		// write to file
		fs.writeFileSync(
			`${this.config.build.outDir}/${pageFileName.replace(/\.md$/, ".html")}`,
			html,
		);
	}

	#buildPages() {
		// get all page files
		const pages = fs.readdirSync(this.config.pages.pagesDirectory, {
			withFileTypes: true,
		});

		for (const page of pages) {
			this.#buildPage(`${this.config.pages.pagesDirectory}/${page.name}`);
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

	#copyStaticFiles() {
		const staticFilesDir = this.config.build.staticDir;

		if (fs.existsSync(staticFilesDir)) {
			ncp(staticFilesDir, this.config.build.outDir, (err) => {
				if (err) {
					logger.error(err);
				}
			});
		}
	}
}

export { Builder };
