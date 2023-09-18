import axios from 'axios';
import { baseAdminUrl, baseUserUrl } from './ConstUrls';
import toast from 'react-hot-toast';




const userInstance = axios.create({
    baseURL: baseUserUrl
});

const adminInstance = axios.create({
    baseURL: baseAdminUrl
});

userInstance.interceptors.response.use((response) => {
    console.log({response})
    return response.data;

},
    (error) => {
        if (error?.response?.data?.userBlocked) {
            localStorage.removeItem('token');
        } else if (error?.message === 'Network Error' && !error?.response) {
            return toast.error("NETWORK ERROR - Make Sure Api is Running");
        } else if (error?.response?.data.authfalse) {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
        else {
            return Promise.reject(error);
        }


    });


userInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});




adminInstance.interceptors.request.use((config) => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
        config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});




export default userInstance;
export { adminInstance }; 