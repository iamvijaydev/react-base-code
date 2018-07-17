export const onResponse = (response) => {
  /**
   * Do stuff like modifying the data strucutre or position or renaming
   *
   * Read more on requestInterceptor here:
   * https://github.com/axios/axios#interceptors
   */

  const customResponse = { ...response /* add modifications here */ };

  return customResponse;
};

export const onResponseError = (error) => {
  /**
   * Do stuff creating custom errors or modify errors on status 500 or 400
   * or, logout, (location.reload('/login')) if session timedout or status 401
   *
   * Read more on requestInterceptor here:
   * https://github.com/axios/axios#interceptors
   */

  /**
   * Error object cannot be cloned
   * so modify it as such or read parts of it
   * to create a new Error object
   */

  /* eslint-disable-next-line no-param-reassign */
  error.mesage = error.message;

  return Promise.reject(error);
};
