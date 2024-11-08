export const debounce = (func: Function, delay = 100) => {
	let timeout: ReturnType<typeof setTimeout> | undefined = undefined
	return function (...args: Array<any>) {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}
