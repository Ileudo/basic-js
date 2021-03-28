
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let depth = 1;
		arr.forEach((item) => {
			let count = 1;
			if (Array.isArray(item)) {
				count = count + this.calculateDepth(item);
			}
			if (count > depth) depth = count;
		});
		return depth;
	}
}
