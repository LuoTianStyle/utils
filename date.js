/**
 * timeToString
 * 时间戳转字符串
 * @time 时间戳
 * @separator 日期分隔符
 * @hasTime 是否返回时分
 * @hasSecond 是否返回秒
 */
/**
 * stringToTime
 * 字符串转时间戳
 * @str 字符串,如 2019-08-07 03:02:01
 * @size 时间戳位数
 */
export const timeToString = (
	timestamp,
	separator1 = '-',
	hasTime = false,
	separator2 = ':',
	hasSecond = false
) => {
	let time = timestamp;
	if (timestamp.length === 10) {
		time = timestamp * 1000;
	}
	const date = new Date(time);
	const Y = date.getFullYear();
	const M =
		date.getMonth() + 1 < 10
			? `0${date.getMonth() + 1}`
			: date.getMonth() + 1;
	const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
	const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
	const m =
		date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
	const s =
		date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
	if (hasSecond) {
		return `${Y}${separator1}${M}${separator1}${D} ${h}${separator2}${m}${separator2}${s}`;
	} else if (hasTime) {
		return `${Y}${separator1}${M}${separator1}${D} ${h}${separator2}${m}`;
	} else {
		return `${Y}${separator1}${M}${separator1}${D}`;
	}
};
export const stringToTime = (str, size = 13) => {
	const lengthMore = (13 - size) * 10;
	return lengthMore
		? new Date(str).getTime() / lengthMore
		: new Date(str).getTime();
};
