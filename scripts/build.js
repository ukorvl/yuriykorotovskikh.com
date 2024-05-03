#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { config } from "../site.config.js";
import { Builder } from "../lib/server/builder/builder.js";
import { logger } from "../lib/server/utils/logger.js";
import merge from "deepmerge";

const argv = yargs(hideBin(process.argv)).argv;

const withMeasureTime = (fn) => {
	const start = performance.now();
	fn();
	const end = performance.now();
	logger.info(`Build time: ${end - start} ms`);
};

const mergedConfig = merge(config, argv);

logger.info(`
  Building site...",

  outDir: ${mergedConfig.build.outDir},
`);

const builder = new Builder(mergedConfig);
withMeasureTime(builder.build.bind(builder));

logger.success("Site has been built successfully!");
