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
  const [assginto, setAssginto] = useState();

  const doctor = useSelector((state) => state?.director?.doctor);
  const customer = useSelector((state) => state?.director?.customer);
  const assignedto = useSelector((state) => state?.director?.assignedto);
  const dispatch = useDispatch();
  const selectusertype = watch("usert");
  useEffect(() => {
    if (assignedto?.length < 1) {
      dispatch(getAssignedto(""));
    }

    if (selectusertype === "doctor") {
      dispatch(getDoctors(assginto));
    } else if (selectusertype === "customer") {
      dispatch(getCustomers(assginto));
    }
  }, [dispatch, selectusertype, assignedto, assginto]);

  const date = watch("date");
  const time = watch("time");
  const datetime = date + " " + time;
  const onSubmit = async (data) => {
    if (data.usert === "doctor") {
      const apiData = {
        is_doctor_customer: true,
        doctor_uid: data.name,
        datetime: datetime,
        assigned_to_uid: assginto,
      };
      dispatch(addSchedule(apiData));
    } else if (data.usert === "customer") {
      const apiData = {
        is_doctor_customer: false,
        customer_uid: data.name,
        datetime: datetime,
        assigned_to_uid: assginto,
      };
      dispatch(addSchedule(apiData));
    }

    props.onHide();
  };

  const user = JSON.parse(localStorage.getItem("user"));
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
                    className="input-login-modal Select-menu-outer"
                    custom
                    onChange={(e) => {
                      setAssginto(e.target.value);
                    }}
                  >
                    <option defaultValue>Select...</option>
                    {assignedto
                      .filter((status) => status?.uid !== user.uid)
                      .map((item, index) => {
                        return (
                          <option value={item?.uid} key={index + 1}>
                            {item?.role?.category?.name}
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
