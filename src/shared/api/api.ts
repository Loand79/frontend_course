import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'http://prod.com';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        // @ts-ignore
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
