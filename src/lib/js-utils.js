export function debounce(func, wait) {
	let timeout;
	return function (...args) {
		if (timeout !== undefined) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}
