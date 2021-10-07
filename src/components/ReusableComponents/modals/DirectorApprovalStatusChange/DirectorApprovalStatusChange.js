import React,{ useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule, SchedulesApprovalStatusChange } from '../../../../Store/Actions/directorActions';

const DirectorApprovalStatusChange = (props) => {

    
    const schedule = useSelector((state) => state?.director?.schedule);
    const approvaluid = useSelector((state) => state?.director?.approvaluid);
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const dispatch = useDispatch();
    
      useEffect(() => {
        if (schedule?.length < 1) {
            dispatch(getSchedule());
        }
      },[dispatch])
    
      const onSubmit = async (data) => {
  
        const apiData = {
            approval_status: data.status,
            uid: approvaluid.uid,
          }
          dispatch(SchedulesApprovalStatusChange(apiData));
          
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
            
            Update Approval Status
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
                  <span className="label-name-login">Approval Status</span>
                  <Form.Control
                    as="select"
                    className="input-login-modal"
                    custom
                    {...register("status", {})}
                  >
                           
                            <option value="approved">
                              Approved
                            </option>
                            <option value="cancelled">
                              Cancelled
                            </option>
                            <option value="awaiting_approval">
                              Awaiting Approval
                            </option>
                           
                  </Form.Control>
                  {errors?.status?.message ? (
                    <div className="text-error">{errors?.status?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                
              </div>
              <input
                type="submit"
                value="Update Status"
                className="headerBtn-red btn-block mx-auto"
                style={{ width: "85%", textAlign: "center" }}
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>  
        </>
    )
}

export default DirectorApprovalStatusChange
