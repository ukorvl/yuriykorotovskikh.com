#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

const defaultOutDir = "build";
const outDir = argv.outDir || defaultDestination;
