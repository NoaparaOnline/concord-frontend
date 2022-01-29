import {logInConstants} from '../Constants/loginConstant';
import apiServices from "../../services/requestHandler";
import { logout,saveUser,setToken,setUserRole } from "../../Utils/auth.util";
import { toast } from "react-toastify";
import i18next from "i18next";

  export const loginUser = (data) => async (dispatch) => {
    try {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: true,
      });
      const response = await apiServices.login(data);
      if (response?.data?.response_code === 200) {
        if(response?.data?.response_data?.token.user?.role?.category?.name === "director" ||  response?.data?.response_data?.token.user?.role?.category?.name === "depot_manager")
        {
          setToken({
            key: response?.data?.response_data?.token?.access_token,
            type: response?.data?.response_data?.token.user?.role?.category?.name,      
          });
          saveUser(response?.data?.response_data?.token?.user);
          setUserRole( response?.data?.response_data?.token?.user?.role?.category?.name);
          
          dispatch({
            type: logInConstants.SET_ERROR,
            payload: null,
          });
          dispatch({
            type: logInConstants.LOGIN_IN,
            payload: response?.data?.response_data?.token?.user,
          });
          dispatch({
            type: logInConstants.SET_LOADER,
            payload: false,
          });
          dispatch({
            type: logInConstants.USER_TYPE,
            payload: response?.data?.response_data?.token?.user?.role.category?.name,
          });
          toast.info(i18next.t("common:actions.login_successful"));
          return response?.data?.response_data?.token.user?.role.category?.name;
        }
        else{
          toast.error(i18next.t("common:actions.un_authorized_access"));
          dispatch({
            type: logInConstants.SET_LOADER,
            payload: false,
          });
        }
      } 
      else {
        toast.error(response?.data?.response_message);
        dispatch({
          type: logInConstants.SET_ERROR,
          payload: response?.data?.response_message,
        });
        dispatch({
          type: logInConstants.SET_LOADER,
          payload: false,
        });
        return "error";
      }
    } catch (error) {
    }

  };

  export const forgotPassword = (data) => async (dispatch) => {
    
    try {
      const response = await apiServices.forgotPassword(data);
      if (response?.data?.response_code === 200) {
        toast.info(i18next.t("common:actions.email_sent_text"));
      } else {
        toast.error(response?.data?.response_message);
      }
    } catch (error) {
      
    }
  };

  export const resetPassword = (data) => async (dispatch) => {
    try {
      const response = await apiServices.resetPassword(data);
      if (response?.response_code === 200) {
        toast.info(i18next.t("common:actions.password_reset_success"));
        return "success";
      } else {
        toast.error(response?.response_message);
        return "fail";
      }
    } catch (error) {
      toast.error(error);
    }
  };

  export const changePassword = (data) => async (dispatch) => {
    try {
      const response = await apiServices.changePassword(data);
      if (response?.response_code === 200) {
        toast.info(i18next.t("common:actions.password_change_success"));
        return "success";
      } else {
        toast.error(response?.response_message);
        return "fail";
      }
    } catch (error) {
      toast.error(error);
    }
  };
  
  export const logoutUser = () => async (dispatch) => {
    try {
      await apiServices.logout();
      logout();
      // localStorage.clear();
      dispatch({
        type: logInConstants.LOG_OUT_USER,
        payload: null,
      });
      toast.info(i18next.t("common:actions.logout_text"));
    } catch (error) {
    }
  };

  export const getUser = () => async (dispatch) => {
    const getUserFromLocal = localStorage.getItem("userConcord");
    let user = JSON.parse(getUserFromLocal);
    const getUserRoleFromLocal = localStorage.getItem("userRoleConcord");
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
  
  export const setUserFromLocal = (data) => async (dispatch) => {
    dispatch({
      type: logInConstants.SET_USER_FROM_LOCAL,
      payload: data,
    });
  };



  
