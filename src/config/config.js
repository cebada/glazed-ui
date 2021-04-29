const BASE_URLS = {
    USER_REQUEST: 'http://localhost:3000/api/user',
    STORE_REQUEST: 'http://localhost:3000/api/store',
    ORDER_REQUEST: 'http://localhost:3000/api/order'
};

export const ROUTES = {
    WELCOME_ROUTE: '/',
    LOGIN_ROUTE: '/login',
    USER_DASHBOARD: '/userDashboard',
    ADMIN_DASHBOARD: '/adminDashboard'
};

export const URL = {
    LOGIN: BASE_URLS.USER_REQUEST + ROUTES.LOGIN_ROUTE,
    GET_STORES: BASE_URLS.STORE_REQUEST 
};


export default URL;