import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAssignedto } from "../../../../Store/Actions/directorActions";
const DirectorScheduleCreate = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const doctor = useSelector((state) => state?.director?.doctor);
  const customer = useSelector((state) => state?.director?.customer);
  const assignedto = useSelector((state) => state?.director?.assignedto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssignedto());
  }, [dispatch]);
  const onSubmit = async (data) => {
    //   const apiData = {
    //     is_doctor_customer,
    //     customer_uid,
    //     datetime,
    //     assigned_to_uid,
    //   };
    // console.log(apiData);
    //   dispatch(addSchedule(apiData));
    props.onHide();
  };
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered size="md">
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
            ADD SCHEDULE
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row px-3">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-lg-6">
                  <span className="label-name-login">User Type</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    {...register("user", {})}
                  >
                    <option value="doctor">Doctor</option>
                    <option value="customer">Customer</option>
                  </Form.Control>
                  {errors?.user?.message ? (
                    <div className="text-error">{errors?.user?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <span className="label-name-login">Name</span>
                  <Form.Group>
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      onChange={(selected) => {
                        // setSingleSelections(selected);
                        // changeHanler(selected);
                      }}
                      //   options={departments}
                      placeholder=""
                      //   selected={singleSelections}
                    />
                  </Form.Group>
                </div>

                <div className="col-lg-6">
                  <span className="label-name-login">Date</span>
                  <input
                    className="input-login-modal"
                    type="datetime-local"
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
                  <span className="label-name-login">Assigned To</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    {...register("assigned", {})}
                  >
                    {assignedto?.map((item, index) => (
                      <option value={item?.uid} key={index+1}>{item?.designation}</option>
                    ))}
                  </Form.Control>
                  {errors?.assigned?.message ? (
                    <div className="text-error">
                      {errors?.assigned?.message}
                    </div>
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
