/**
 *
 * 节流函数 规定时间内频繁触发，间隔执行
 * @param {*} fn
 * @param {*} delay
 */
export const throttle = (fn, delay) => {
	let canRun = null;
	return () => {
		if (canRun) return;
		canRun = setTimeout(() => {
			fn.apply(this, arguments);
			canRun = null;
		}, delay);
	};
};
/**
 *
 * 防抖函数 规定时间内频繁触发，只执行最后一次
 * @param {*} fn
 * @param {*} delay
 */

export const debounce = (fn,delay) => {
  let timeout = null;
  return  () => {
      clearTimeout(timeout); 
      timeout = setTimeout(() => {
          fn.apply(this, arguments);
      }, delay);
  };
}
