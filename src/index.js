function transform(arr) {
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

console.log(transform([1, 2, 3, '--double-next', 4, 5]));
console.log(transform(["--discard-prev", 1, 2, 3]));
console.log(transform(['--discard-prev', 1, 2, 3]));
console.log(transform(['--double-prev', 1, 2, 3]));
console.log(transform([1, 2, 3, '--double-next']));
console.log(transform([1, 2, 3, '--discard-next']));
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

// function transform(arr) {
// 	let arrNew = new Array();
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] === '--discard-next') { if (i === i + 1) { continue } }
// 		else if (arr[i] === '--discard-prev') { arrNew.pop() }
// 		else if (arr[i] === '--double-next') { arrNew.push(arr[i + 1]) }
// 		else if (arr[i] === '--double-prev') { arrNew.push(arr[i - 1]) }
// 		else arrNew.push(arr[i])
// 	};
// 	return arrNew;
// }