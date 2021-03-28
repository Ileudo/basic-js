const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let string1 = '';
	let string2 = '';
	let arr1 = [];
	let arr2 = [];
	if (!options.separator) { options.separator = '+' };
	if (!options.additionSeparator) { options.additionSeparator = '|' };
	if (options.addition === undefined) { options.addition = ''; }
	if (options.repeatTimes === undefined) { options.repeatTimes = 1 };
	if (options.additionRepeatTimes === undefined) { options.additionRepeatTimes = 1 };
	for (i = 0; i < options.repeatTimes; i++) {
		for (j = 0; j < options.additionRepeatTimes; j++) {
			arr2.push(`${options.addition}`);
		}
		string2 = arr2.join(options.additionSeparator);
		arr1.push(`${str}${string2}`);
		string1 = arr1.join(options.separator);
		arr2 = [];
	}
	return string1;
}
