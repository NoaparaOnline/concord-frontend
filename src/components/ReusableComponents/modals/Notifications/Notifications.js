// import React from 'react'
// import { Modal } from 'react-bootstrap'
// import SingleNotificationCard from '../../SingleNotificationCard/SingleNotificationCard'

// const Notifications = (props) => {
//     return (
//         <>
//         <Modal show={props.show} onHide={props.onHide} centered size="md" id="notificationmodal">
//         <Modal.Header>
//           <span
//             className=""
//             style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
//           >
//            Notifications
//           </span>
//         </Modal.Header>
//         <Modal.Body className="p-0"  >
//           <div className="row ">


//             <div className="col-lg-12">

//               <div className="">
//                 <div
//                   className="card cardlogmodel"

//                 >
//                   <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//                     <li className="nav-item text-center" style={{width:'50%'}}>
//                       {" "}
//                       <a
//                         className="nav-link active btl"
//                         id="pills-home-tab"
//                         data-toggle="pill"
//                         href="#pills-home"
//                         role="tab"
//                         aria-controls="pills-home"
//                         aria-selected="true"
//                       >
//                         <span style={{fontWeight:'600' }}>Recent</span>
//                       </a>{" "}
//                     </li>
//                     <li className="nav-item text-center" style={{width:'50%'}}>
//                       {" "}
//                       <a
//                         className="nav-link btr"
//                         id="pills-profile-tab"
//                         data-toggle="pill"
//                         href="#pills-profile"
//                         role="tab"
//                         aria-controls="pills-profile"
//                         aria-selected="false"
//                       >
//                          <span style={{fontWeight:'600'}}>All</span>
//                       </a>{" "}
//                     </li>
//                   </ul>
//                   <div className="tab-content" id="pills-tabContent" style={{overflowY:'scroll' ,height:'400px'}}>
//                     <div
//                       className="tab-pane fade show active"
//                       id="pills-home"
//                       role="tabpanel"
//                       aria-labelledby="pills-home-tab"
//                     >
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />

//                     </div>
//                     <div
//                       className="tab-pane fade"
//                       id="pills-profile"
//                       role="tabpanel"
//                       aria-labelledby="pills-profile-tab"
//                     >
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />

//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />

//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       title="hello"
//                       description="hello"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />
//                       <SingleNotificationCard
//                       backgroundcolorchat="#565656"
//                       colorchattext="#fff"
//                       />

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//         </>
//     )
// }

// export default Notifications


import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getallNotification, seeAllNotification } from "../../../../Store/Actions/staticActions";
import DashboardBtnList from "../../DashboardBtnList/DashboardBtnList";
import SingleNotificationCard from '../../SingleNotificationCard/SingleNotificationCard'
import Loader from "react-loader-spinner";

const Notifications = (props) => {
  const [selectedTab, setSelectedTab] = useState("All Notifications");
  const loading = useSelector((state) => state?.logIn?.loader);

  const allnotification = useSelector(
    (state) => state?.static?.allnotification
  );
  const notificationcount = useSelector(
    (state) => state?.static?.notificationcount
  );
  const newnotification = useSelector(
    (state) => state?.static?.newnotification
  );

  console.log(allnotification,"allnotification")

  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedTab("All Notifications");
  }, []);
  useEffect(() => {
    dispatch(getallNotification())
  }, []);


  const tabHandler = async (item) => {
    setSelectedTab(item);
    if (item === "All Notifications") {
      dispatch(getallNotification())
    }
    else if (item === "New Notification") {
      dispatch(seeAllNotification())
    }
    
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          props?.onHide();
          setSelectedTab("All Notifications");
          // setnotificationData(notification);
        }}
      >
        <Modal.Header >
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "26px", color: "#0066b3" }}
          >
           Notifications
          </span>
        </Modal.Header>
        <Modal.Body
          style={{ height: "50vh", overflowY: "scroll", background: "#f9f9f9" }}
        >
          <div className="row ">
            <div className="col-12">
              {["All Notifications", "New Notification"].map((item, index) => (
                <div
                  className="d-flex d-inline-flex col-6"
                  key={index + 1}
                  onClick={() => tabHandler(item)}
                >
                  <DashboardBtnList
                    label={item}
                    labelStyle={selectedTab === item ? { color: "#fff" } : ""}
                    className={
                      selectedTab === item
                        ? "dashboardBtnList-item-active py-2"
                        : "default-color-and-hover py-2"
                    }
                    shownotification={item === "New Notification"}
                    notificationCount={notificationcount}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            {loading ? (
              <div className="mt-5 center-childrens">
                <Loader height={100} width={100} type="Puff" color="#0066b3" />
              </div>
            ) : (
              <div>
                {allnotification?.length > 0 &&
                  selectedTab === "All Notifications" ? (
                  allnotification?.map((item, index) => (
                    <>
                      {item === undefined ? null : (
                        <SingleNotificationCard
                          backgroundcolorchat="#565656"
                          colorchattext="#fff"
                          title={item?.title}
                          decription={item?.message_body}
                          key={index + 1}
                        />
                      )}
                    </>
                  ))
                ) : newnotification?.length > 0 &&
                  selectedTab === "New Notification" ? (
                  newnotification?.map((item, index) => (
                    <>
                      {item === undefined ? null : (
                        // <NotificationTab
                        //   title={item?.title}
                        //   decription={item?.message_body}
                        //   key={index + 1}
                        // />
                        <SingleNotificationCard
                          backgroundcolorchat="#565656"
                          colorchattext="#fff"
                          title={item?.title}
                          decription={item?.message_body}
                          key={index + 1}
                        />
                      )}
                    </>
                  ))
                ) : (
                  <div
                    className="center-childrens mt-5 pt-5"
                    style={{ height: "100%" }}
                  >
                    <span
                      className="light-Color-Para"
                      style={{ fontSize: "24px" }}
                    >
                      no notification to show
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Notifications;
