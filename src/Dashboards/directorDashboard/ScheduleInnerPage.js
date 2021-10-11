import React from 'react'
import { Link } from 'react-router-dom'
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard'
import NavbarDash from '../../components/ReusableComponents/NavbarDash/NavbarDash'
import { useSelector } from "react-redux";
import moment from 'moment';

const ScheduleInnerPage = (props) => {
    const scheduleidstate = useSelector((state) => state?.director?.scheduleidstate);
    console.log("scheduleidstate",scheduleidstate);
    return (
        <>
        <NavbarDash
        sidebarOpen={props.sidebarOpen}
        openSidebar={props.openSidebar}
        Heading={props.Heading}
        BackBtn={
          <>
            <Link
              to={props.linkRoute}
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#3F4254",
                  marginBottom:'10px'
                }}
              >
                <i
                  className="fa fa-angle-left"
                  aria-hidden="true"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#3F4254",
                    
                  }}
                ></i>{" "}
                Back
              </span>
            </Link>
          </>
        }
      />
    <DashboardMainCard
        reverse={true}
        TableDiv={
            <>
             <table className="table table-borderless ms-5">
          <tbody style={{ border: "none" }}>
            <tr style={{ border: "none", padding: "20px" }}>
              <td style={{ border: "none",fontWeight: "500" }}>Assigned To:</td>
              <td style={{ border: "none" }}>{scheduleidstate?.assigned_to?.name}<span className="text-capitalize">({scheduleidstate?.assigned_to?.role?.category.name})</span></td>
              <td style={{ border: "none",fontWeight: "500" }}>Doctor/Customer:</td>
              <td style={{ border: "none" }}>{scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.name  : scheduleidstate?.customer.name}<span className="text-capitalize">({scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.designation  : scheduleidstate?.customer.designation})</span></td>
            </tr>
            <tr style={{ border: "none", padding: "20px" }}>
              <td style={{ border: "none" ,fontWeight: "500"}}>Approval Status:</td>
              <td style={{ border: "none" }}>
              {scheduleidstate?.approval_status}
              </td>
              <td style={{ border: "none",fontWeight: "500" }}>Date/Time:</td>
              <td style={{ border: "none" }}>
              {moment.unix(scheduleidstate?.datetime).format("MMM DD, YYYY")}
              </td>
            </tr>
            <tr style={{ border: "none", padding: "20px" }}>
              <td style={{ border: "none",fontWeight: "500" }}>Schedule By: </td>
              <td style={{ border: "none" }}>{scheduleidstate?.scheduled_by.name}</td>
              <td style={{ border: "none",fontWeight: "500" }}>Market & Address: </td>
              <td style={{ border: "none" }}>{scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.market.name  : scheduleidstate?.customer.market.name}<span className="text-capitalize">,{scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.market.parent.name  : scheduleidstate?.customer.market.parent.name}</span></td>
             
            </tr>
            <tr style={{ border: "none", padding: "20px" }}>
              {/* <td style={{ border: "none",fontWeight: "500" }}>Email Address: </td>
              <td style={{ border: "none" }}>{scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.email_address  : scheduleidstate?.customer.email_address}</td> */}
              <td style={{ border: "none",fontWeight: "500" }}>Phone Number: </td>
              <td style={{ border: "none" }}>{scheduleidstate?.is_doctor_customer ? scheduleidstate?.doctor.phone_number  : scheduleidstate?.customer.phone_number}</td>
             
            </tr>
          </tbody>
        </table>
            </>
        }
        />
        </>
    )
}

export default ScheduleInnerPage
