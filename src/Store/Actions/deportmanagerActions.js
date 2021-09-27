import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import {deportConstants} from '../Constants/deportmanagerConstant'

export const getOrder = (data) => async (dispatch) => {
    const response = await apiServices.getOrders();
    dispatch({
      type: deportConstants.GET_ORDER,
      payload: response?.data?.response_data
    });
  };


export const getStocksProduct = (data) => async (dispatch) => {
    const response = await apiServices.getStocksProducts();
    dispatch({
      type: deportConstants.GET_STOCKS_PRODUCT,
      payload: response?.data?.response_data
    });
  };

export const statusChange = (data) => async (dispatch) => {
    const response = await apiServices.statusChanges(data);
    if (response?.response_code === 200) {
      dispatch(getStocksProduct());
      toast.info("Stock Status Updated Successfully");
    } else {
      toast.error(response?.response_message);
    }
   };
