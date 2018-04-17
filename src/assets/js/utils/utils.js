export const toHtml = string => {
	const template = document.createElement('template');
	template.innerHTML = string;
	return template.content;
};

export const RANDOM = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
