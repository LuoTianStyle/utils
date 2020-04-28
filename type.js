/**
 * 
 * typeHandle
 * 数据类型验证函数
 * @param e 验证目标
 * @param type 验证目标是否为该类型,可不传
 * @return {String|Bolean}（type不传为返回验证数据类型）
 */
/**
 * 
 * userAgent
 * 设备类型函数
 * kind Pc Or Phone
 * type Windows | Mac | Linux | Android | iPhone | iPad | Windows Phone | Other
 * @return {kind,type}
 */
/**
 * 
 * browserType
 *游览器类型
 @return {String}
 */
const typeString = e => {
	return Object.prototype.toString.call(e).slice(8, -1);
};
export const typeHandle = (e, type) => {
	const targetType = typeString(e);
	if (type) {
		return type === targetType;
	} else {
		return targetType;
	}
};
const phone = e => {
	if (e.indexOf('Android') > -1 || e.indexOf('Linux') > -1) {
		return 'Android';
	} else if (e.indexOf('iPhone') > -1) {
		return 'iPhone';
	} else if (e.indexOf('iPad') > -1) {
		return 'iPad';
	} else if (e.indexOf('Windows Phone') > -1) {
		return 'Windows Phone';
	} else {
		return 'Other';
	}
};
const pc = e => {
	if (e.indexOf('Window') > 0) {
		return 'Windows';
	} else if (e.indexOf('Mac OS X') > 0) {
		return 'Mac ';
	} else if (e.indexOf('Linux') > 0) {
		return 'Linux';
	} else {
		return 'Other';
	}
};

export const userAgent = () => {
	const arr = [
		'phone',
		'pad',
		'pod',
		'iPhone',
		'iPod',
		'ios',
		'iPad',
		'Android',
		'Mobile',
		'BlackBerry',
		'IEMobile',
		'MQQBrowser',
		'JUC',
		'Fennec',
		'wOSBrowser',
		'BrowserNG',
		'WebOS',
		'Symbian',
		'Windows Phone',
	];
	const target = navigator.userAgent;
	const isPc = arr.find(item => item.indexOf(target) !== -1);
	if (!isPc) {
		return {
			kind: 'Phone',
			type: phone(target),
		};
	} else {
		return {
			kind: 'Pc',
			type: pc(target),
		};
	}
};
export const browserType = () => {
	const userAgent = navigator.userAgent;
	const isOpera = userAgent.indexOf('Opera') !== -1;
	if (isOpera) {
		return 'Opera';
	}
	const isIE =
		userAgent.indexOf('compatible') > -1 &&
		userAgent.indexOf('MSIE') > -1 &&
		!isOpera;
	if (isIE) {
		const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
		reIE.test(userAgent);
		const fIEVersion = parseFloat(RegExp['$1']);
		if (fIEVersion == 7) return 'IE7';
		else if (fIEVersion == 8) return 'IE8';
		else if (fIEVersion == 9) return 'IE9';
		else if (fIEVersion == 10) return 'IE10';
		else return 'IE7以下';
	}
	const isIE11 =
		userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
	const isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
	const isFF = userAgent.indexOf('Firefox') > -1;
	const isSafari =
		userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1;
	const isChrome =
		userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;
	if (isIE11) return 'IE11';
	if (isEdge) return 'Edge';
	if (isFF) return 'FF';
	if (isSafari) return 'Safari';
	if (isChrome) return 'Chrome';
};
