export const setAuth = (token) => ({
  type: 'SET_AUTH',
  payload: token,
});

export const setProfile = (data) => ({
  type: 'SET_USER_PROFILE',
  payload: data,
});
