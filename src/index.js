

function createDreamTeam(members) {
	let name = '';
	if (Array.isArray(members) === false) return false;
	members = members.filter((el) => typeof (el) === 'string' && /[A-Za-z]+/.test(el));
	if (members === []) return false;
	members = members.map((el) => el.replace(/\s+/g, '').charAt(0).toUpperCase());
	members = members.sort();
	console.log(members);
	for (i = 0; i < members.length; i++) {
		name += members[i].split('')[0];
	}
	return name;
};
console.log(createDreamTeam([
	['David Abram'],
	['Robin Attfield'],
	'Thomas Berry',
	['Paul R.Ehrlich'],
	'donna Haraway',
	' BrIaN_gOodWiN  ',
	{
		0: 'Serenella Iovino'
	},
	'Erazim Kohak',
	'  val_plumwood',
]));