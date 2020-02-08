import { postRequest } from "../../util/api";

export function userSignUpAction(dispatch, data) {
  const payload = postRequest("users", {
    ...data
  });
  return payload;
}
