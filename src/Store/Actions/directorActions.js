import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { directorConstants } from "../Constants/directorConstant";
import { logInConstants } from "../Constants/loginConstant";



export const getSchedule = () => async (dispatch) => {
  // dispatch({
  //   type: logInConstants.SET_LOADER,
  //   payload: true,
  // });
  const response = await apiServices.getSchedules();
  console.log("response",response)
  if (response?.data?.response_code === 200) {
    dispatch({
      type: directorConstants.GET_SCHEDULE,
      payload: response?.data?.response_data,
    });
    // dispatch({
    //   type: logInConstants.SET_LOADER,
    //   payload: false,
    // });
  }
  
};

export const SchedulesApprovalStatusChange = (data) => async (dispatch) => {
    const response = await apiServices.SchedulesApprovalStatusChanges(data);
    
    if (response?.response_code === 200) {
      dispatch(getSchedule());
      toast.info("Status Updated Successfully");
     
    } else {
      toast.error("Error");
    }
  };
  

