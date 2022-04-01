import { publicRequest } from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupStart,
  signupFailure,
  signupSuccess,
} from "./userSlice";
import { productStart, productSuccess, productFailure } from "./productSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const register = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(signupSuccess(res.data));
  } catch (e) {
    dispatch(signupFailure(e));
  }
};

export const getProducts = async (dispatch, cat) => {
  dispatch(productStart());
  try {
    if (cat) {
      const res = await publicRequest.get(`/products/?category=${cat}`);
      dispatch(productSuccess(res.data));
    } else {
      const res = await publicRequest.get("/products");
      dispatch(productSuccess(res.data));
    }
  } catch (e) {
    dispatch(productFailure(e));
  }
};
