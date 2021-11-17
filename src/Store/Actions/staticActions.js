import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { logInConstants } from "../Constants/loginConstant";
import { staticConstants } from "../Constants/staticConstants";

export const getallNotification = () => async (dispatch) => {
    dispatch({
        type: logInConstants.SET_LOADER,
        payload: true,
      });
  
    const response = await apiServices.getallNotification();
    if (response?.data?.response_code === 200) {
      
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
      dispatch({
        type: staticConstants.ALL_NOTIFICATIONS,
        payload: response?.data?.response_data,
      });
    //   dispatch({
    //     type: staticConstants.NOTIFICATION_COUNT,
    //     payload: newNotification.length,
    //   });
    } else {
      toast.error(response?.data?.response_message);
    }
  };
  export const seeAllNotification = () => async (dispatch) => {
    const response = await apiServices.seeAllNotification();
    console.log(response);
    if (response?.data?.response_code === 200) {
      dispatch({
        type: staticConstants.NEW_NOTIFICATIONS,
        payload: response?.data?.response_data,
      });
      dispatch({
        type: staticConstants.NOTIFICATION_COUNT,
        payload: 0,
      });
    } else {
      toast.error(response?.data?.response_message);
    }
  };