import axios from "axios";
import {
	CLOUDINARY_CLOUD_NAME,
	SERVER_PROD_URL,
	SERVER_DEV_URL,
} from "./Config"

export const axiosClient = axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? SERVER_PROD_URL + ""
			: SERVER_DEV_URL + "",
});

export const cloudinaryClient = axios.create({
	baseURL: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image`,
});