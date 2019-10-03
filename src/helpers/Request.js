import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    timeout: 1000 * 30,
});

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if ( token != null ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
  });

  Axios.interceptors.response.use((response) => {
    return response 
  }, (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url === 'http://localhost:8012/refresh_token') {
        return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        let refresh_token = localStorage.getItem('refresh_token');
        return axios.post(`http://localhost:8012/refresh_token`,
        {
            "refresh_token": refresh_token
        })
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem('access_token',res.data.access_token);
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
                originalRequest.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
                originalRequest.baseURL = undefined;
                console.log(originalRequest)
                return Axios.request(originalRequest);
            }
            else
                return Promise.reject(error);
        })
    }
    return Promise.reject(error);
 });

 export default Axios;