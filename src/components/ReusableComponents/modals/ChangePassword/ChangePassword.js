import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changePassword } from "../../../../Store/Actions/loginActions";
const ChangePassword = (props) => {
 const {t}=useTranslation('common')
 
  const dispatch = useDispatch();
  

  const onSubmit = async (data) => {
    
    if (data.new_password === data.new_password_next) {
      const apiData = {
        old_password: data.password,
        new_password: data.new_password,
      };
      const success = await dispatch(changePassword(apiData));
  
      if (success === "success") {

      toast.info(t('change_password.password_changed_succ'));
      }
      props.onHide();
    }
    else {
        toast.error(t('change_password.provide_same_pass'));
        }
    
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        centered
        size="md"
        id="notificationmodal"
      >
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
            {t('change_password.change_password_text')}
          </span>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row ">
            <div className="col mb-5">
              <div className="row ">
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ padding: "15px", height: "300px" }}
                  >
                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                        {t('change_password.enter_old_pass')}
                     
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder={t('change_password.old_password_text')}
                          {...register("password", {
                            required: {
                              value: true,
                              message:  t('change_password.field_req_text'),
                            },
                          })}
                        />
                        {errors?.password?.message ? (
                          <div className="text-error">
                            {errors?.password?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                        {t('change_password.enter_new_pass')}
                       
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder={t('change_password.new_password_text')}
                          {...register("new_password", {
                            required: {
                              value: true,
                              message:t('change_password.field_req_text') ,
                            },
                          })}
                        />
                        {errors?.new_password?.message ? (
                          <div className="text-error">
                            {errors?.new_password?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                        {t('change_password.enter_new_pass_again')}
                      
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder={t('change_password.new_password_confirm')}
                          {...register("new_password_next", {
                            required: {
                              value: true,
                              message:  t('change_password.field_req_text')  ,
                            },
                          })}
                        />
                        {errors?.new_password_next?.message ? (
                          <div className="text-error">
                            {errors?.new_password_next?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <input
                        type="submit"
                        value=  {t('change_password.change_password_text')}
                        className="btn btn-block rounded-pill  mb-2 mx-auto"
                        style={{
                          width: "85%",
                          textAlign: "center",
                          color: "#fff",
                          backgroundColor: "#0066b3",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePassword;
