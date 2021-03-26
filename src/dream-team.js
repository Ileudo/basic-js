

module.exports = function createDreamTeam(members) {
	let name = '';
	if (Array.isArray(members) === false) return false;
	members = members.filter((el) => typeof (el) === 'string' && /[A-Za-z]+/.test(el));
	members = members.map((el) => el.replace(/\s+/g, '').charAt(0).toUpperCase());
	members = members.sort();
	for (i = 0; i < members.length; i++) {
		name += members[i].split('')[0];
	}
	return name;
};
