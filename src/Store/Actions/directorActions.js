import axios from "axios";
import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { directorConstants } from "../Constants/directorConstant";
import { logInConstants } from "../Constants/loginConstant";



// export const getSchedule = () => async (dispatch) => {
//   dispatch({
//     type: logInConstants.SET_LOADER,
//     payload: true,
//   });
//   const response = await apiServices.getSchedules();
//   if (response?.data?.response_code === 200) {
//     dispatch({
//       type: directorConstants.GET_SCHEDULE,
//       payload: response?.data?.response_data,
//     });
//     dispatch({
//       type: logInConstants.SET_LOADER,
//       payload: false,
//     });
//     return true 
//   }
  
// };


export const getSchedule = (uid) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));
  dispatch({
        type: logInConstants.SET_LOADER,
        payload: true,
      });
  try {
    const head = {'x-session-key': token.key, 'x-session-type': token.type};
    const response = await axios.get(
      `https://concord-backend-m1.herokuapp.com/api/schedules/read?child_uid=${uid}`,
  
      {headers: head},
    );
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
  else{
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });

  }
  } catch (error) {
    return "fail"
  }

  
};

export const addSchedule = (data) => async (dispatch) => {
  const response = await apiServices.addSchedules(data);
  if (response?.data?.response_code === 200) {
    dispatch(getSchedule(''));
    toast.info("Schedule Added Successfully");
  } else {
    
    toast.error(response?.response_message);
  }
};


export const SchedulesApprovalStatusChange = (data) => async (dispatch) => {
    const response = await apiServices.SchedulesApprovalStatusChanges(data);
    
    if (response?.response_code === 200) {
      dispatch(getSchedule(''));
      toast.info("Status Updated Successfully");
     
    } else {
    
      toast.error("Error");
    }
  };
  

  export const getDoctors = (uid) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    
    try {
      const head = {'x-session-key': token.key, 'x-session-type': token.type};
      const response = await axios.get(
        `https://concord-backend-m1.herokuapp.com/api/doctors/read?child_uid=${uid}`,
        {headers: head},
      );
      if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_DOCTOR,
        payload: response?.data?.response_data,
      });
    }
  
    } catch (error) {
      return "fail"
    }

    
  };
  // export const getCustomers = (data) => async (dispatch) => {


    // const response = await apiServices.getcustomers(data);
    // console.log("response",response)
    // if (response?.data?.response_code === 200) {
    //   dispatch({
    //     type: directorConstants.GET_CUSTOMER,
    //     payload: response?.data?.response_data,
    //   });
    // }
    
  // };









  export const getCustomers = (uid) => async dispatch => {
    
    
    const token = JSON.parse(localStorage.getItem('token'));
    
    try {
      const head = {'x-session-key': token.key, 'x-session-type': token.type};
      const response = await axios.get(
        `https://concord-backend-m1.herokuapp.com/api/customers/read?child_uid=${uid}`,
        {headers: head},
      );
      if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_CUSTOMER,
        payload: response?.data?.response_data,
      });
    }
    } catch (error) {
      return "fail"
    }
  };




  // export const getAssignedto = () => async (dispatch) => {

  //   const response = await apiServices.getassignedto();
  //   if (response?.data?.response_code === 200) {
  //     dispatch({
  //       type: directorConstants.GET_ASSIGNED_TO,
  //       payload: response?.data?.response_data,
  //     });
  //   }
    
  // };
 



// Field Staff API GET UID FOR SM CHILDS IN PARAMS AND FOR CREATE NEW SCHEDULE




 export const getSingleUIDApproval = (data) =>  (dispatch) => {
    dispatch({
      type: directorConstants.GET_UID_APPROVAL,
      payload: data,
    });
  };



  // GET PRODUCTS ALL DIRECTOR
  export const getProductsall = () => async (dispatch) => {

    const response = await apiServices.getproductsall();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_PRODUCTS_ALL,
        payload: response?.data?.response_data,
      });
      return true
    }
    
  };

  // GET PRODUCTS NEWLY DIRECTOR
  export const getProductsnew = () => async (dispatch) => {

    const response = await apiServices.getproductsnew();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_PRODUCTS_NEW,
        payload: response?.data?.response_data,
      });
      return true
    }
    
  };


  // GET DISTRIBUTION CENTER
  export const getDepartmenthead = () => async (dispatch) => {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: true,
    });
    const response = await apiServices.getdepartmenthead();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_DEPARTMENT_HEAD,
        payload: response?.data?.response_data,
      });
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
    else{
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
  };


  // GET DEPARTMENT HEADS
  export const getDistributioncenter = () => async (dispatch) => {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: true,
    });
    const response = await apiServices.getdistributioncenter();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_DISTRIBUTION_CENTER,
        payload: response?.data?.response_data,
      });
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
    else{
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
    
  };


  export const getAssignedto = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
   
    try {
      const head = {'x-session-key': token.key, 'x-session-type': token.type};
      const response = await axios.get(
        `https://concord-backend-m1.herokuapp.com/api/fieldstaffs/childs`,
        {headers: head},
      );
      if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_ASSIGNED_TO,
        payload: response?.data?.response_data,
      });
     
    }
    } catch (error) {
      return "fail"
    }
  };



  export const getChildsData = (uid,role) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
   
    try {
      const head = {'x-session-key': token.key, 'x-session-type': token.type};
      const response = await axios.get(
        `https://concord-backend-m1.herokuapp.com/api/fieldstaffs/childs?child_uid=${uid}`,
        {headers: head},
      );
      if (response?.data?.response_code === 200) {
        
        if(role === 'rsm') {
          dispatch({
            type: directorConstants.GET_ASSIGNED_TO_RSM,
            payload: response?.data?.response_data,
          });
        }
        else if(role === 'am') {
          dispatch({
            type: directorConstants.GET_ASSIGNED_TO_AM,
            payload: response?.data?.response_data,
          });
        }
        else if(role === 'mpo') {
          dispatch({
            type: directorConstants.GET_ASSIGNED_TO_MPO,
            payload: response?.data?.response_data,
          });
        }
     
    }
    } catch (error) {
      return "fail"
    }
  };



export const getSingleScheduleDetail = (data) =>  (dispatch) => {
    dispatch({
      type: directorConstants.GET_SCHEDULE_SINGLE_UID,
      payload: data,
    });
  };
  
  
