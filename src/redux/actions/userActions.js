import { postRequest } from "../../util/api";

export function userSignUpAction(dispatch, data) {
  const payload = postRequest("users", {
    ...data
  });
  return payload;
}
export function userLoginAction(dispatch, data) {
  const payload = postRequest("users/login", {
    ...data
  })
    .then(data => {
      dispatch({
        type: "USER_LOGIN",
        data,
        success: true
      });
    })
    .catch(e => {
      dispatch({
        type: "USER_LOGIN",
        data: { errorMessage: e.error },
        success: false
      });
    });
  return payload;
}
