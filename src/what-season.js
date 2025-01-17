const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	let season;
	if (!date) return 'Unable to determine the time of year!';
	if ((Object.prototype.toString.call(date)) !== '[object Date]') { throw Error('Error') };
	if (date.getMonth() <= 1 || date.getMonth() === 11) { season = 'winter' }
	else if (date.getMonth() <= 4) { season = 'spring' }
	else if (date.getMonth() <= 7) { season = 'summer' }
	else if (date.getMonth() <= 10) { season = 'autumn' };
	return season;
};
