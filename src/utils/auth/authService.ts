const USER = 'user';

export const login = () => { };

export const logout = () => {};

export const register = () => {};

export const getCurrentUser = () => {
  const userData = localStorage.getItem(USER);
  if (userData !== null) {
    return JSON.parse(userData);
  }

  return null;
};
