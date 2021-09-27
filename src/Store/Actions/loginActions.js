import {logInConstants} from '../Constants/loginConstant';
import apiServices from "../../services/requestHandler";
import { logout,saveUser,setToken,setUserRole } from "../../Utils/auth.util";
import { toast } from "react-toastify";

  export const loginUser = (data) => async (dispatch) => {
    try {
      const response = await apiServices.login(data);
      if (response?.data?.response_code === 200) {
        setToken({
          key: response?.data?.response_data?.token?.access_token,
          type: response?.data?.response_data?.token.user?.role?.category?.name,
      
        });
        saveUser(response?.data?.response_data?.token?.user);
        setUserRole( response?.data?.response_data?.token?.user?.role?.category?.name);
       
        dispatch({
          type: logInConstants.LOGIN_IN,
          payload: response?.data?.response_data?.token?.user,
        });
        dispatch({
          type: logInConstants.USER_TYPE,
          payload: response?.data?.response_data?.token?.user?.role.category?.name,
        });
        
        toast.info("Login Successful");
        return response?.data?.response_data?.token.user?.role.category?.name;
      } 
      else {
        return "Fail";
      }
    } catch (error) {
    }

  };

  export const forgotPassword = (data) => async (dispatch) => {
    
    // console.log(data, "forgot Password");
    // try {
    //   const response = await apiServices.forgotPassword(data);
    //   if (response?.data?.response_code === 200) {
    //     toast.info("An Email has been sent to your email address");
    //   } else {
    //     toast.error(response?.data?.response_message);
    //   }
    // } catch (error) {
    //   console.log("Forgot Password error", error);
    // }
  };

  export const resetPassword = (data) => async (dispatch) => {
    // try {
    //   const response = await apiServices.resetPassword(data);
    //   if (response?.response_code === 200) {
    //     toast.info("Successful Password Reset");
    //     return "success";
    //   } else {
    //     toast.error(response?.response_message);
    //     return "fail";
    //   }
    // } catch (error) {
    //   toast.error(error);
    // }
  };
  
  export const logoutUser = () => async (dispatch) => {
    try {
      // await apiServices.logout();
      logout();
      dispatch({
        type: logInConstants.LOG_OUT_USER,
        payload: null,
      });
      toast.info("User Logout");
    } catch (error) {
    }
  };

  export const getUser = () => async (dispatch) => {
    const getUserFromLocal = localStorage.getItem("user");
    let user = JSON.parse(getUserFromLocal);
    const getUserRoleFromLocal = localStorage.getItem("userRole");
    let userRole = JSON.parse(getUserRoleFromLocal);
    dispatch({
      type: logInConstants.GET_USER_FROM_LOCAL,
      payload: user,
    });
    dispatch({
      type: logInConstants.USER_TYPE,
      payload: userRole,
    });
  };
  