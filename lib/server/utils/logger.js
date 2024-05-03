/**
 * @file Logger utility.
 */

import clc from "cli-color";

const logger = {
	success: (...message) => console.log(clc.green(...message)),
	error: (...message) => console.log(clc.red(...message)),
	info: (...message) => console.log(clc.blue(...message)),
	warn: (...message) => console.log(clc.yellow(...message)),
};

export { logger };
