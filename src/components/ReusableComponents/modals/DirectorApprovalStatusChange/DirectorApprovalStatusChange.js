import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import {  Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  SchedulesApprovalStatusChange } from '../../../../Store/Actions/directorActions';
import { useTranslation } from 'react-i18next';

const DirectorApprovalStatusChange = (props) => {
  const {t}=useTranslation('t')
    
    const schedule = useSelector((state) => state?.director?.schedule);
    const approvaluid = useSelector((state) => state?.director?.approvaluid);
    // const filterd = schedule.filter(
    //   (status) => status?.approval_status === "reshedule"
    // );
    const [dropdown1, setDropdown1] = useState(approvaluid.approval_status);


    const {
        
        handleSubmit,
     
      } = useForm();
      const dispatch = useDispatch();
    
      // useEffect(() => {
      //   if (schedule?.length < 1) {
      //       dispatch(getSchedule());
      //   }
      // },[dispatch,schedule])
    
      const onSubmit = async (data) => {
  
        const apiData = {
            approval_status: dropdown1,
            uid: approvaluid.uid,
          }
          dispatch(SchedulesApprovalStatusChange(apiData));
          
        props.onHide();
                  };
        

     const uniqueItems = [];
     schedule.map(item => {
      if (uniqueItems.indexOf(item.approval_status) === -1) {
          return uniqueItems.push(item.approval_status)
      }
      else{
        return ""
      }
      });
    return (
        <>
           <Modal show={props.show} onHide={props.onHide} centered size="md">
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
            {t('director_approval_status_change.update_approval_stat')}
           
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
                  
                  <div className="form-group">
                        <label> {t('director_approval_status_change.approval_status')}</label>
                        <select className="form-control form-select text-capitalize" id="exampleFormControlSelect1" onChange={(e) => {
                          setDropdown1(e.target.value)
                        }}
                        >

                          <option selected className="text-capitalize">{approvaluid.approval_status}</option>
                          {
                            approvaluid.approval_status === "Approved" ? "" :
                              <option className="text-capitalize"> {t('director_approval_status_change.approved_text')} </option>
                          }
                          {
                            approvaluid.approval_status === "Awaiting Approval" ? "" :
                              <option className="text-capitalize"> {t('director_approval_status_change.awaiting_approval')} </option>
                          }
                          {
                            approvaluid.approval_status === "Cancelled" ? "" :
                              <option className="text-capitalize"> {t('director_approval_status_change.cancelled_text')}</option>
                          }

{/* {uniqueItems
                      .map((item, index) => {
                        return (
                          <option className="text-capitalize">
                             {item}
                          </option>
                        );
                      })}    */}
                        </select>
                      </div>

                </div>
                
              </div>
              <input
                type="submit"
                value= {t('director_approval_status_change.update_status')}
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
