import { ROUTES } from "../../util/routes";
import { postRequest, getRequest } from "../../util/api";

export function userSignUpAction(dispatch, data) {
  dispatch({ type: "USER_SIGNUP", payload: { data } });
}
