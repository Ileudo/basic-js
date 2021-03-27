function calculateHanoi(disksNumber, turnsSpeed) {
	const obj = {
		turns: 0,
		seconds: 0,
	}
	obj.turns = (2 ** disksNumber) - 1;
	const turnsPerSec = turnsSpeed / 3600;
	obj.seconds = Math.floor(obj.turns / turnsPerSec);
	return obj;
}

console.log(calculateHanoi(9, 4308));