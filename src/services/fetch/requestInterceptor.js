export const onRequest = (config) => {
  /**
   * Do stuff like adding JWT token to header
   * or, logout, (location.reload('/login')) if session timedout
   *
   * Read more on requestInterceptor here:
   * https://github.com/axios/axios#interceptors
   */

  const customConfig = { ...config /* add modifications here */ };

  return customConfig;
};

export const onRequestError = error => Promise.reject(error);
