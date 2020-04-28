/**
 * 
 * setCookie getCookie removeCookie clearCookie
 * @param name 
 * @param value 
 * @param day 过期时间 默认三十天
 */
export const setCookie = (name, value, day = 30) => {
	var date = new Date();
	date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${date.toGMTString()}`;
};
export const getCookie = name => {
	const arr = document.cookie.split(';');
	const targetArr = arr.find(item => item.split('=')[0] === name);
	if (targetArr) {
		return targetArr.split('=')[1];
	}
	return null;
};
export const removeCookie = name => {
	setCookie(name, 1, -1);
};
export const clearCookie = () => {
	const arr = document.cookie.split(';');
	arr.forEach(item => setCookie(item.split('=')[0], 1, -1));
};
