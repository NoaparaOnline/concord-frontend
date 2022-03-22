import { toast } from "react-toastify";
import apiServices from "../../services/requestHandler";
import { logInConstants } from "../Constants/loginConstant";
import i18next from "i18next";
import { cmsConstants } from "../Constants/cmsConstant";

export const getCmscomponent = () => async (dispatch) => {
  try {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: true,
    });
    const response = await apiServices.ReadComponent();
    if (response?.data?.response_code === 200) {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
      dispatch({
        type: cmsConstants.READ_COMPONENT,
        payload: response?.data?.response_data
      });
    } else {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false,
      });
      toast.error(response?.response_message);
    }
  } catch (error) {
    console.log("Cms error", error);
  }
};

export const SelectedLanguage = (data) => (dispatch) => {


  dispatch({
    type: cmsConstants.LANGUAGE_SELECTED,
    payload: data,
  })

};

export const readLanguageAction = () => async (dispatch) => {
  try {
    dispatch({
      type: logInConstants.SET_LOADER,
      payload: true
    })
    const response = await apiServices.ReadLang()
    if (response?.data?.response_code === 200) {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false
      })
      dispatch({
        type: cmsConstants.READ_LANG,
        payload: response?.data.response_data
      })
      return true
    } else {
      dispatch({
        type: logInConstants.SET_LOADER,
        payload: false
      })
      return false
    }

  } catch {

  }
}
