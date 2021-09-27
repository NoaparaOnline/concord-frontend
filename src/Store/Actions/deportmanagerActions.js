import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import {deportConstants} from '../Constants/deportmanagerConstant'

export const getOrder = (data) => async (dispatch) => {
    const response = await apiServices.getOrders();
    console.log(response);
    dispatch({
      type: deportConstants.GET_ORDER,
      payload: response?.data?.response_data
    });
  };

