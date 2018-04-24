class Timer {
	constructor() {}

	convertDate(time) {
		const data = new Date(time);
		const day = data.getDate();
		const month = data.getMonth();
		const year = data.getFullYear();
		return `${day} ${this.convertMount(month)} ${year}`;
	}

	convertMount(month) {
		let result;
		switch (month) {
		case 0:
			result = 'January';
			break;

		case 1:
			result = 'February';
			break;

		case 2:
			result = 'March';
			break;

		case 3:
			result = 'April';
			break;

		case 4:
			result = 'May';
			break;

		case 5:
			result = 'June';
			break;

		case 6:
			result = 'July';
			break;

		case 7:
			result = 'August';
			break;

		case 8:
			result = 'September';
			break;

		case 9:
			result = 'October';
			break;

		case 10:
			result = 'November';
			break;

		case 11:
			result = 'December';
			break;
		}
		return result;
	}
}

export const TIME = new Timer();
