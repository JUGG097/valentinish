import { toast } from "react-toastify";

export const storeTokenToLocalStorage = (key: string, token: string) => {
	localStorage.setItem(key, token);
};

export const retrieveTokenFromLocalStorage = (key: string) => {
	const itemValue = localStorage.getItem(key);
	if (itemValue) {
		return itemValue;
	}
	return "";
};

export const deleteTokenFromLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};

export const successNotification = (msg: string) => {
	toast.success(msg, {
		position: toast.POSITION.TOP_CENTER,
	});
};

export const errorNotification = (msg: string) => {
	toast.error(msg, {
		position: toast.POSITION.TOP_CENTER,
	});
};