/**
 *
 * 节流函数 规定时间内频繁触发，间隔执行
 * @param {*} fn
 * @param {*} delay
 */
export const throttle = (fn, delay) => {
	let canRun = true;
	return () => {
		if (!canRun) return;
		setTimeout(() => {
			fn.apply(this, arguments);
			canRun = true;
		}, delay);
	};
};
/**
 *
 * 防抖函数 规定时间内频繁触发，只执行最后一次
 * @param {*} fn
 * @param {*} delay
 */
export const throttle = (fn, delay) => {
	let canRun = true;
	return () => {
		if (!canRun) return;
		canRun = false;
		setTimeout(() => {
			fn.apply(this, arguments);
			canRun = true;
		}, delay);
	};
};
