const modernActivity = 15;
const halfLifePeriod = 5730;

function dateSample(sampleActivity) {
	if (typeof (sampleActivity) !== 'string'
		|| isNaN(sampleActivity)
		|| sampleActivity === ''
		|| +sampleActivity <= 0
		|| +sampleActivity > modernActivity) return false;
	let activityDiff = modernActivity / sampleActivity;
	function getBaseLog(activityDiff) {
		return Math.log(activityDiff) / 0.693;
	}
	let numberOfHalfLifes = getBaseLog(activityDiff);
	return Math.ceil(numberOfHalfLifes * halfLifePeriod);
};

console.log(dateSample('9000'));