import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { directorConstants } from "../Constants/directorConstant";
import { logInConstants } from "../Constants/loginConstant";



export const getSchedule = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getSchedules();
  if (response?.data?.response_code === 200) {
    dispatch({
      type: directorConstants.GET_SCHEDULE,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
  
};
export const addSchedule = (data) => async (dispatch) => {
  const response = await apiServices.addSchedules(data);
  if (response?.data?.response_code === 200) {
    dispatch(getSchedule());
    toast.warning("Schedule Added Successfully");
  } else {
    toast.error(response?.response_message);
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
  

  export const getDoctors = () => async (dispatch) => {

    const response = await apiServices.getdoctors();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_DOCTOR,
        payload: response?.data?.response_data,
      });
    }
    
  };
  export const getCustomers = () => async (dispatch) => {

    const response = await apiServices.getcustomers();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_CUSTOMER,
        payload: response?.data?.response_data,
      });
    }
    
  };
  export const getAssignedto = () => async (dispatch) => {

    const response = await apiServices.getassignedto();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_ASSIGNED_TO,
        payload: response?.data?.response_data,
      });
    }
    
  };