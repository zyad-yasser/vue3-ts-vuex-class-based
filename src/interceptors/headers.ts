import axios from 'axios';

export const jwtInterceptor = async () => {
  axios.interceptors.request.use(async (request) => {
    // const headers = await getAuthTokenHeader();
    // if (headers && headers.authorization && !headers.authorization.includes('null')) {
    //   request.headers = { ...request.headers, ...headers };
    // }

    return request;
  });
};
