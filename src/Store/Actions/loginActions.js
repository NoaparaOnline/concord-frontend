import {logInConstants} from '../Constants/loginConstant';
import apiServices from "../../services/requestHandler";
import { saveUser,setToken } from "../../Utils/auth.util";
import { toast } from "react-toastify";

export const loginUser = (data) => async (dispatch) => {
    try {
      const response = await apiServices.login(data);
      console.log(response);
      if (response?.data?.response_code === 200) {
        setToken({
          key: response?.data?.response_data?.session_token,
          type: response?.data?.response_data?.session_token_type,
        });
        saveUser(response?.data?.response_data?.user);
       
        dispatch({
          type: logInConstants.LOGIN_IN,
          payload: response?.data?.response_data?.user,
        });
        dispatch({
          type: logInConstants.USER_TYPE,
          payload: response?.data?.response_data?.session_token_type,
        });
        toast.info("Login Successful");
        return response?.data?.response_data?.session_token_type;
      } 
    } catch (error) {
      console.log("Login error", error);
    }
  };

  export const forgotPassword = (data) => async (dispatch) => {
    
    console.log(data, "forgot Password");
    try {
      const response = await apiServices.forgotPassword(data);
      if (response?.data?.response_code === 200) {
        toast.info("An Email has been sent to your email address");
      } else {
        toast.error(response?.data?.response_message);
      }
    } catch (error) {
      console.log("Forgot Password error", error);
    }
  };

  export const resetPassword = (data) => async (dispatch) => {
    try {
      const response = await apiServices.resetPassword(data);
      if (response?.response_code === 200) {
        toast.info("Successful Password Reset");
        return "success";
      } else {
        toast.error(response?.response_message);
        return "fail";
      }
    } catch (error) {
      toast.error(error);
    }
  };
  