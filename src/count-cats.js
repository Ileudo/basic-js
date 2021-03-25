module.exports = function countCats(matrix) {
	return matrix.toString().match(/\^\^/g).length;
}