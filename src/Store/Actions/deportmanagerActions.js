import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { deportConstants } from "../Constants/deportmanagerConstant";
import { logInConstants } from "../Constants/loginConstant";

export const getoldOrder = (data) => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getoldOrders();
  console.log("response olddata", response);
  if (response?.data?.response_code === 200) {
    dispatch({
      type: deportConstants.GET_OLD_ORDER,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
  
};

export const getOrder = (data) => async (dispatch) => {
  const response = await apiServices.getOrders();
  if (response?.data?.response_code === 200){
  dispatch({
      type: deportConstants.GET_ORDER,
      payload: response?.data?.response_data,
    });
  }
};
export const getnewOrder = (data) => async (dispatch) => {
  const response = await apiServices.getnewOrders();
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_NEW_ORDER,
      payload: response?.data?.response_data,
    });
  }
};

export const getStocksProduct = () => async (dispatch) => {
  const response = await apiServices.getStocksProducts();
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_STOCKS_PRODUCT,
      payload: response?.data?.response_data,
    });
  }
};

export const statusChange = (data) => async (dispatch) => {
  const response = await apiServices.statusChanges(data);
  console.log("sdsadsa", response);
  if (response?.response_code === 200) {
    dispatch(getnewOrder());
    toast.info("Status Updated Successfully");
  } else {
    toast.error("Error");
  }
};

export const getSingleOrder = (data) =>  (dispatch) => {
  dispatch({
    type: deportConstants.GET_PRODUCT_STATE,
    payload: data,
  });
};


export const getSingleUID = (data) =>  (dispatch) => {
  dispatch({
    type: deportConstants.GET_UID,
    payload: data,
  });
};
