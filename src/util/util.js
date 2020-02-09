import jwt_decode from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const decodeToken = token => {
  try {
    return token && jwt_decode(token);
  } catch (e) {}
};
