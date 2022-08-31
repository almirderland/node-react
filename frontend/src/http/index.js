import axios from "axios";

const $host = axios.create({
    baseURL: "http://decodeblog.almirakhalitova.site"
})

const $authHost = axios.create({
    baseURL: "http://decodeblog.almirakhalitova.site"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}