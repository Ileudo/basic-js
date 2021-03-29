const CustomError = require("../extensions/custom-error");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
class VigenereCipheringMachine {

	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw Error;
		}

		let arrOfMessage = message.toUpperCase().split('');
		let arrOfKey = key.toUpperCase().split('');
		let result = [];

		arrOfMessage.map(function (char, i) {
			if (alphabet.includes(char)) {
				//В сообщении буква?
				if (arrOfKey.length < arrOfMessage.length) {
					arrOfKey.push(arrOfKey[i]);
				}
				let dcrLetterIndex = (alphabet.indexOf(char) + alphabet.indexOf(arrOfKey[i])) % alphabet.length;
				result.push(alphabet[dcrLetterIndex]);
			} else {
				arrOfKey.splice(i, 0, char);
				if (arrOfKey.length > arrOfMessage.length) arrOfKey.pop();
				result.push(char);
			}
		})
		if (this.isDirect === false) {
			result.reverse();
		}
		return result.join('');
	}


	decrypt(message, key) {
		if (!message || !key) {
			throw Error;
		}

		let arrOfMessage = message.toUpperCase().split('');
		let arrOfKey = key.toUpperCase().split('');
		let result = [];

		arrOfMessage.map(function (char, i) {
			if (alphabet.includes(char)) {
				//В сообщении буква?
				if (arrOfKey.length < arrOfMessage.length) {
					arrOfKey.push(arrOfKey[i]);
				}
				let dcrLetterIndex = (alphabet.indexOf(char) + alphabet.length - alphabet.indexOf(arrOfKey[i])) % alphabet.length;
				result.push(alphabet[dcrLetterIndex]);
			} else {
				arrOfKey.splice(i, 0, char);
				if (arrOfKey.length > arrOfMessage.length) arrOfKey.pop();
				result.push(char);
			}
		})
		if (this.isDirect === false) {
			result.reverse();
		}
		return result.join('');
	}
}



module.exports = VigenereCipheringMachine;
