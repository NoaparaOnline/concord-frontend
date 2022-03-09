import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../services/HttpProvider";
import apiServices from "../../services/requestHandler";
import { directorConstants, DOCTOR_CONSTANT, LOADER_CONSTANT, STOCKS_CONSTANT, VIEW_RSM_CONSTANT, VIEW_SM_CONSTANT, VIEW_USER_CONSTANT } from "../Constants/directorConstant";
import { logInConstants } from "../Constants/loginConstant";
import i18next from "i18next";


export const getSchedule = (uid) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("tokenConcord"));
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  try {
    // alert("Try")
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
      // `https://concord-backend-prod.herokuapp.com/api/schedules/read?child_uid=${uid}`,
      `${BASEURL}/schedules/read?child_uid=${uid}`,
      // `https://concord-backend-m2.herokuapp.com/api/schedules/read?child_uid=${uid}`,
      { headers: head }
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
    } else {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
  } catch (error) {
    return "fail";
  }
};

export const addSchedule = (data) => async (dispatch) => {
  const response = await apiServices.addSchedules(data);
  if (response?.data?.response_code === 200) {
    dispatch(getSchedule(""));
    toast.info(i18next.t("common:actions.schedule_added"));
  } else {
    toast.error(response?.response_message);
  }
};

export const SchedulesApprovalStatusChange = (data) => async (dispatch) => {
  const response = await apiServices.SchedulesApprovalStatusChanges(data);

  if (response?.response_code === 200) {
    dispatch(getSchedule(""));
    toast.info(i18next.t("common:actions.status_updated"));
  } else {
    toast.error(i18next.t("common:actions.error_text"));
  }
};

export const getDoctors = (uid) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("tokenConcord"));

  try {
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
      // `https://concord-backend-prod.herokuapp.com/api/doctors/read?child_uid=${uid}`,
      `${BASEURL}/doctors/read?child_uid=${uid}`,
      // `https://concord-backend-m2.herokuapp.com/api/doctors/read?child_uid=${uid}`,
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_DOCTOR,
        payload: response?.data?.response_data,
      });
    }
  } catch (error) {
    return "fail";
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

export const getCustomers = (uid) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("tokenConcord"));

  try {
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
    
      `${BASEURL}/customers/read?child_uid=${uid}`,
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_CUSTOMER,
        payload: response?.data?.response_data,
      });
    }
  } catch (error) {
    return "fail";
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

export const getSingleUIDApproval = (data) => (dispatch) => {
  dispatch({
    type: directorConstants.GET_UID_APPROVAL,
    payload: data,
  });
};

// GET PRODUCTS ALL DIRECTOR
export const getProductsall = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getproductsall();
  if (response?.data?.response_code === 200) {
    dispatch({
      type: directorConstants.GET_PRODUCTS_ALL,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return true;
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};

// GET PRODUCTS NEWLY DIRECTOR
export const getProductsnew = () => async (dispatch) => {
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });
  const response = await apiServices.getproductsnew();
  if (response?.data?.response_code === 200) {
    dispatch({
      type: directorConstants.GET_PRODUCTS_NEW,
      payload: response?.data?.response_data,
    });
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return true;
  }
  else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
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
  } else {
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
  } else {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
  }
};

export const getAssignedto = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("tokenConcord"));

  try {
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
      // `https://concord-backend-prod.herokuapp.com/api/fieldstaffs/childs`,
      `${BASEURL}/fieldstaffs/childs`,
      // `https://concord-backend-m2.herokuapp.com/api/fieldstaffs/childs`,
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      dispatch({
        type: directorConstants.GET_ASSIGNED_TO,
        payload: response?.data?.response_data,
      });
    }
  } catch (error) {
    return "fail";
  }
};

export const getChildsData = (uid, role) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("tokenConcord"));

  try {
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
      // `https://concord-backend-prod.herokuapp.com/api/fieldstaffs/childs?child_uid=${uid}`,
      `${BASEURL}/fieldstaffs/childs?child_uid=${uid}`,
      // `https://concord-backend-m2.herokuapp.com/api/fieldstaffs/childs?child_uid=${uid}`,
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      if (role === "rsm") {
        dispatch({
          type: directorConstants.GET_ASSIGNED_TO_RSM,
          payload: response?.data?.response_data,
        });
      } else if (role === "am") {
        dispatch({
          type: directorConstants.GET_ASSIGNED_TO_AM,
          payload: response?.data?.response_data,
        });
      } else if (role === "mpo") {
        dispatch({
          type: directorConstants.GET_ASSIGNED_TO_MPO,
          payload: response?.data?.response_data,
        });
      }
    }
  } catch (error) {
    return "fail";
  }
};

export const getSingleScheduleDetail = (data) => (dispatch) => {
  dispatch({
    type: directorConstants.GET_SCHEDULE_SINGLE_UID,
    payload: data,
  });
};

export const SendGridMailApi = (data) => async (dispatch) => {
const response = await axios
    // .post("https://concord-backend-prod.herokuapp.com/api/users/mail/send", data,)
    .post(BASEURL + "/users/mail/send", data,)
    // .post("https://concord-backend-m2.herokuapp.com/api/users/mail/send", data,)
    .then(function (response) { 
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

    return response;
};

export const getSingleProductDataObj = (data) =>  (dispatch) => {
  dispatch({
    type: directorConstants.GET_SINGLE_PRODUCT_OBJ,
    payload: data,
  });
};


export const getSingleDistributionObj = (data) => (dispatch) => {
  dispatch({
    type: directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ,
    payload: data,
  });
};

export const getSingleDistributionObjWithUid = (uid,type) => async (dispatch) => {
  
  dispatch({
    type: logInConstants.SET_LOADER,
    payload: true,
  });

  const token = JSON.parse(localStorage.getItem("tokenConcord"));


  try {
    const head = { "x-session-key": token.key, "x-session-type": token.type };
    const response = await axios.get(
    
      `${BASEURL}/stocks/read${type}?distribution_center_uid=${uid}`,
     
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      if (type === "/medicine"){
        dispatch({
          type: directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_MED,
          payload: response?.data?.response_data,
        });
        dispatch({
          type: logInConstants.SET_LOADER,
          payload: false,
        });
      }
      else if (type === "/gift"){
        dispatch({
          type: directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_GIFT,
          payload: response?.data?.response_data,
        });
        dispatch({
          type: logInConstants.SET_LOADER,
          payload: false,
        });
      }
      else{
        dispatch({
          type: directorConstants.GET_SINGLE_DISTRIBUTIONCENTER_OBJ_STOCK_ALL,
          payload: response?.data?.response_data,
        });
        dispatch({
          type: logInConstants.SET_LOADER,
          payload: false,
        });
      }
    }
    else{
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: false,
    });
    return "fail";
  }
};


export const getUsers = (uid, user) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem('tokenConcord'));
  try {
    if (user === 'sm') {
      dispatch({
        type: LOADER_CONSTANT.SM_LOADING,
        payload: true,
      });
    } else if (user === 'rsm') {
      dispatch({
        type: LOADER_CONSTANT.RSM_LOADING,
        payload: true,
      });
    } else if (user === 'am') {
      dispatch({
        type: LOADER_CONSTANT.AM_LOADING,
        payload: true,
      });
    } else if (user === 'mpo') {
      dispatch({
        type: LOADER_CONSTANT.MPO_LOADING,
        payload: true,
      });
    }

    const head = { 'x-session-key': token.key, 'x-session-type': token.type };
    const response = await axios.get(
      BASEURL + `/fieldstaffs/childs/${user}?child_uid=${uid}`,
      { headers: head }
    );
    if (response?.data?.response_code === 200) {
      if (user === 'sm') {
        dispatch({
          type: LOADER_CONSTANT.SM_LOADING,
          payload: false,
        });

        dispatch({
          type: VIEW_USER_CONSTANT.GET_SM,
          payload: response?.data?.response_data,
        });
      } else if (user === 'rsm') {
        dispatch({
          type: LOADER_CONSTANT.RSM_LOADING,
          payload: false,
        });
        dispatch({
          type: VIEW_USER_CONSTANT.GET_RSM,
          payload: response?.data?.response_data,
        });
      } else if (user === 'am') {
        dispatch({
          type: LOADER_CONSTANT.AM_LOADING,
          payload: false,
        });
        dispatch({
          type: VIEW_USER_CONSTANT.GET_AM,
          payload: response?.data?.response_data,
        });
      } else if (user === 'mpo') {
        dispatch({
          type: LOADER_CONSTANT.MPO_LOADING,
          payload: false,
        });
        dispatch({
          type: VIEW_USER_CONSTANT.GET_MPO,
          payload: response?.data?.response_data,
        });
      } else {
        // dispatch({
        //   type: ORDER_CONSTANTS.ORDER_GET_USER,
        //   payload: response?.data?.response_data,
        // });
      }
    }
  } catch (error) {
    return 'Fail';
  }
};

export const ViewSalesManagerManagerAction = () => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_SM_CONSTANT.VIEW_SM_LOADING,
      payload: true,
    });

    let response = await apiServices.getSm();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_LOADING,
        payload: false,
      });
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_SUCCESS,
        payload: response?.data?.response_data,
      });
    } else {
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_ERROR,
        payload: true,
      });
    }
  } catch {}
};
export const ViewRegionalSalesManagerManagerAction = () => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_RSM_CONSTANT.VIEW_RSM_LOADING,
      payload: true,
    });

    let response = await apiServices.getRsm();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: VIEW_RSM_CONSTANT.VIEW_RSM_LOADING,
        payload: false,
      });
      dispatch({
        type: VIEW_RSM_CONSTANT.VIEW_RSM_SUCCESS,
        payload: response?.data?.response_data,
      });
    } else {
      dispatch({
        type: VIEW_RSM_CONSTANT.VIEW_RSM_ERROR,
        payload: true,
      });
    }
  } catch {}
};


export const ViewChildSalesManagerManagerAction = () => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_SM_CONSTANT.VIEW_SM_LOADING,
      payload: true,
    });
    // const token =await JSON.parse(localStorage.getItem("tokenConcord"));
    // let res= await axios.get(BASEURL+'fieldstaffs/childs/sm',{
    //   headers:{
    //     'x-session-token':token?.key,
    //     'x-session-key':token?.type
    //   }
    // })
    let res = await apiServices.getChildSm()

    if (res?.data?.response_code === 200) {
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_LOADING,
        payload: false,
      });
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_SUCCESS,
        payload: res?.data?.response_data,
      });
    } else {
      dispatch({
        type: VIEW_SM_CONSTANT.VIEW_SM_ERROR,
        payload: true,
      });
    }
  } catch {}
};

export const GetSMDoctors = (uid) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_CONSTANT.DOCTOR_LOADING,
      payload: true,
    });

    let res = await apiServices.getsmdoctors(uid);

    if (res?.data?.response_code === 200) {
      dispatch({
        type: DOCTOR_CONSTANT.DOCTOR_LOADING,
        payload: false,
      });
      dispatch({
        type: DOCTOR_CONSTANT.DOCTOR_SUCESS,
        payload: res?.data?.response_data,
      });
    } else {
      dispatch({
        type: DOCTOR_CONSTANT.DOCTOR_ERROR,
        payload: [],
      });
    }
  } catch { }
};

export const GetSMStocks = (uid) => async (dispatch) => {
  try {
    dispatch({
      type: STOCKS_CONSTANT.STOCKS_LOADING,
      payload: true,
    });

    let res = await apiServices.getstocksofSm(uid);

    if (res?.data?.response_code === 200) {
      dispatch({
        type: STOCKS_CONSTANT.STOCKS_LOADING,
        payload: false,
      });
      dispatch({
        type: STOCKS_CONSTANT.STOCKS_SUCESS,
        payload: res?.data?.response_data,
      });
    } else {
      dispatch({
        type: STOCKS_CONSTANT.STOCKS_ERROR,
        payload: [],
      });
    }
  } catch { }
};