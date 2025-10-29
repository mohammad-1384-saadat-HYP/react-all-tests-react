import {jsonPlaceHolder} from "./api.js";

export const get = async (url, config = {}) => {
    try {
        const result = await jsonPlaceHolder.get(url, config);
        return result.data;
    } catch (e) {
        console.error("error: ", e);
        throw e;
    }
}