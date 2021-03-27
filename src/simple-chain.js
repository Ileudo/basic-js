const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
	},
	addLink(value) {
		this.arr.push(`( ${value} )`)
		return this;
	},
	removeLink(position) {
		if (typeof (position) !== 'number'
			|| position < 1
			|| position > this.arr.length
			|| position === undefined
			|| !Number.isInteger(position)) {
			this.arr = [];
			throw Error('Invalid input');
		} else {
			this.arr.splice(position - 1, 1)
			return this;
		}
	},
	reverseChain() {
		this.arr.reverse();
		return this;

	},
	finishChain() {
		const result = this.arr.join('~~');
		console.log(result);
		this.arr = [];
		return result;
	},
}

module.exports = chainMaker;
