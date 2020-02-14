import Cookies from 'js-cookie';

const setCookie = (key, value, options) => {
    return Cookies.set(key, value, options);

}
const getCookie = (key) => {
    return Cookies.get(key);
}

export {setCookie, getCookie}