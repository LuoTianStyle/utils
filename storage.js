/**
 *
 * setStorage
 * @param key
 * @param val
 * @param type 1 | 2 localStorage | sessionStorage
 */
/**
 *
 * getStorage
 * @param key
 * @param type 1 | 2 localStorage | sessionStorage
 */
/**
 *
 * removeStorage
 * @param key
 * @param type 1 | 2 | 3 localStorage | sessionStorage | all
 */
/**
 *
 * clearStorage
 * @param type 1 | 2 | 3 localStorage | sessionStorage | all
 */
export const setStorage = (key, val, type = 1) => {
	if (type === 1) {
		window.localStorage.setItem(key, JSON.stringify(val));
	} else {
		window.sessionStorage.setItem(key, JSON.stringify(val));
	}
};

export const getStorage = (key, type = 1) => {
	if (type === 1) {
		return JSON.parse(window.localStorage.getItem(key));
	}
	return JSON.parse(window.sessionStorage.getItem(key));
};

export const removeStorage = (key, type = 1) => {
	if (type === 1) {
		window.localStorage.removeItem(key);
	} else if (type === 2) {
		window.sessionStorage.removeItem(key);
	} else {
		window.sessionStorage.removeItem(key);
		window.localStorage.removeItem(key);
	}
};
/**
 *
 * @param type
 */
export const clearStorage = (type = 1) => {
	if (type === 1) {
		window.localStorage.clear();
	} else if (type === 2) {
		window.sessionStorage.clear();
	} else {
		window.sessionStorage.clear();
		window.localStorage.clear();
	}
};
