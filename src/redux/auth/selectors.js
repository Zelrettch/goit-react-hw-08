export const selectIsLoggedIn = (s) => s.auth.isLoggedIn;

export const selectEmail = (s) => s.auth.user.email;

export const selectName = (s) => s.auth.user.name;

export const selectToken = (s) => s.auth.token;

export const selectIsRefreshing = (s) => s.auth.isRefreshing;
