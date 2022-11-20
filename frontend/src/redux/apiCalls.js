
import { publicRequest  } from '../requestMethods'

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";



export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product/list");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};


