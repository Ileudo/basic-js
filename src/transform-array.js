const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let arrNew = new Array();
	arrNew = arr;
	for (i = 0; i < arrNew.length; i++) {
		if (arrNew[i] === '--discard-next') {
			if (arrNew[i + 2] === '--double-prev') { arrNew.splice(i, 3) } else { arrNew.splice(i, 2) }
		}
		else if (arrNew[i] === '--discard-prev') {
			if (i === 0) { arrNew.splice(i, 1) } else { arrNew.splice(i, 2) }
		}
		else if (arrNew[i] === '--double-next') {
			if (i === arrNew.length - 1) { arrNew.splice(i, 1) } else { arrNew[i] = arrNew[i + 1] }
		}
		else if (arrNew[i] === '--double-prev') {
			if (i === 0) { arrNew.splice(i, 1) } else { arrNew[i + 1] = arrNew[i] }
		}
	}
	return arrNew;
}