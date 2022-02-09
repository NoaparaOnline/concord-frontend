import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { deportConstants } from "../Constants/deportmanagerConstant";
import { logInConstants } from "../Constants/loginConstant";
import i18next from "i18next";

export const getoldOrder = (data) => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getoldOrders();
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
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
  
};

export const getOrder = (data) => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getOrders();
  if (response?.data?.response_code === 200){
  dispatch({
      type: deportConstants.GET_ORDER,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};
export const getnewOrder = (data) => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getnewOrders();
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_NEW_ORDER,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};

export const getStocksProduct = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getStocksProducts();
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_STOCKS_PRODUCT,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return true
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};

export const getStocksMedicineProduct = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getStocksMedicineProducts();
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_STOCKS_MEDICINE_PRODUCT,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return true
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};
export const getStocksGiftProduct = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getStocksGiftProducts();
  
    
  if (response?.data?.response_code === 200){
    dispatch({
      type: deportConstants.GET_STOCKS_GIFT_PRODUCT,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return true
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};

export const statusChange = (data) => async (dispatch) => {
  const response = await apiServices.statusChanges(data);
  
  if (response?.response_code === 200) {
    dispatch(getnewOrder());
    toast.info(i18next.t("common:actions.status_updated"));
   
  } else {
    toast.error(i18next.t("common:actions.error_text"));
  
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
