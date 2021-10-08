import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addSchedule,
  getAssignedto,
  getCustomers,
  getDoctors,
} from "../../../../Store/Actions/directorActions";
const DirectorScheduleCreate = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 // Normal States
 const [isdocCus, setIsdocCus] = useState(true);
 const [assginto, setAssginto] = useState();

  const doctor = useSelector((state) => state?.director?.doctor);
  const customer = useSelector((state) => state?.director?.customer);
  const assignedto = useSelector((state) => state?.director?.assignedto);
  const dispatch = useDispatch();
  console.log("assginto",assginto);
  const selectusertype = watch("usert");
  if(selectusertype === "doctor")
  {
        const apiData = assginto
        
        console.log("getDoctorsd",apiData);
          dispatch(getDoctors(apiData));
      
  }
  else if(selectusertype === "customer")
  {
        const apiData = assginto;
        
        console.log("getCustomersd",apiData);
          dispatch(getCustomers(apiData));
      
  }
  useEffect(() => {
    if (assignedto?.length < 1) {
        dispatch(getAssignedto());
    }
  },[dispatch,doctor,customer])

  const date = watch("date",);
  const time = watch("time",);
  const datetime = date +" "+ time ;      
const onSubmit = async (data) => {
  
// if(data.usert ==="doctor")
// {
//   setIsdocCus(true);
// }
// else if(data.usert ==="customer")
// {
//   setIsdocCus(false);
// }

      // console.log("isdocCus",isdocCus)

      if(data.usert ==="doctor")
      {
        // alert(isdocCus);
        const apiData = {
          is_doctor_customer:true,
          doctor_uid:data.name,
          datetime:datetime,
          assigned_to_uid:assginto,
        };
        dispatch(addSchedule(apiData));
        console.log(apiData);
      }
      else if(data.usert ==="customer")
      {
        // alert(isdocCus);
        const apiData = {
          is_doctor_customer:false,
          customer_uid:data.name,
          datetime:datetime,
          assigned_to_uid:assginto,
        };
        dispatch(addSchedule(apiData));
        console.log(apiData);
      }    
             
              props.onHide();
          };


          console.log(datetime)
  
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered size="md">
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
            {" "}
            Add New Schedules{" "}
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row px-3">
        
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-lg-12">
                  <span className="label-name-login">Assigned To</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    onChange={(e) => { setAssginto(e.target.value) }}
                  >
                    {assignedto.map((item, index) => {
                      return (
                        <option value={item?.uid} key={index + 1}>
                          {item?.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  {errors?.assign?.message ? (
                    <div className="text-error">{errors?.assign?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <span className="label-name-login">User Type</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    {...register("usert", {})}
                  >
                    <option value="doctor">Doctor</option>
                    <option value="customer">Customer</option>
                  </Form.Control>
                  {errors?.usert?.message ? (
                    <div className="text-error">{errors?.usert?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <span className="label-name-login">Name</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    {...register("name", {})}
                  >
                    {selectusertype === "doctor"
                      ? doctor.map((item, index) => {
                          return (
                            <option value={item?.uid} key={index + 1}>
                              {item?.name}
                            </option>
                          );
                        })
                      : selectusertype === "customer"
                      ? customer.map((item, index) => {
                          return (
                            <option value={item?.uid} key={index + 1}>
                              {item?.name}
                            </option>
                          );
                        })
                      : ""}
                  </Form.Control>
                  {errors?.usert?.message ? (
                    <div className="text-error">{errors?.usert?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <span className="label-name-login">Date</span>
                  <input
                    className="input-login-modal"
                    type="date"
                    {...register("date", {
                      required: {
                        value: true,
                        message: "this field is required field",
                      },
                    })}
                  />
                  {errors?.date?.message ? (
                    <div className="text-error">{errors?.date?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <span className="label-name-login">Time</span>
                  <input
                    className="input-login-modal"
                    type="time"
                    step="1"
                    {...register("time", {
                      required: {
                        value: true,
                        message: "this field is required field",
                      },
                    })}
                  />
                  {errors?.time?.message ? (
                    <div className="text-error">{errors?.time?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                
              </div>
              <input
                type="submit"
                value="Add Schedule"
                className="headerBtn-red btn-block mx-auto"
                style={{ width: "85%", textAlign: "center" }}
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DirectorScheduleCreate;
