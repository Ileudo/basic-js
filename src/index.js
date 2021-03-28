let string1 = '';
let string2 = '';
let arr1 = [];
let arr2 = [];
function repeater(str, options) {
	if (!options.separator) { options.separator = '+' };
	if (!options.additionSeparator) { options.additionSeparator = '|' };
	// if (typeof (str) !== 'string') { str.toString() };
	if (options.addition === undefined) { options.addition = ''; }
	// if (typeof (options.addition) !== 'string') { options.addition.toString() }
	// if (!Number.isInteger(options.repeatTimes) || !Number.isInteger(options.additionRepeatTimes)) { throw Error('') };
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
		console.log(arr1);
		console.log(string1);
	}
	return string1;
}


console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' }));