
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
console.log(chainMaker.addLink(1).addLink(0).reverseChain().addLink(5).removeLink(3).addLink(3).finishChain());
