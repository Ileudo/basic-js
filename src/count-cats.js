module.exports = function countCats(matrix) {
	let count = 0;
	for (i = 0; i < matrix.length; i++) {
		matrix[i].map(function (item) {
			if (item === '^^') { return count++ };
		});
	}
	return count;
}