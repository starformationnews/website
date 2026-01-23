export function dateToSFNID(date) {
	const lastHawaiiSFN = new Date(Date.UTC(2020, 9));
	if (date < lastHawaiiSFN) {
		throw new Error('This function only works on new SFN issues.');
	}

	let id = 334 + (date.getFullYear() - lastHawaiiSFN.getFullYear()) * 12;
	id -= lastHawaiiSFN.getMonth();
	id += date.getMonth();
	return id;
}

export function SFNIDToStartOfMonth(id) {
	let totalMonths = id + 8;

	// Many special cases...
	if (id >= 7) {
		totalMonths--;
	}

	const years = Math.floor(totalMonths / 12) + 1992;
	const months = totalMonths % 12;
	return new Date(Date.UTC(years, months, 1));
}
