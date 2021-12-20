import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { seeAllNotification } from "../../../../Store/Actions/staticActions";
import DashboardBtnList from "../../../ReUseableComponents/DashboardBtnList";
import NotificationTab from "../../../ReUseableComponents/NotificationTab";
import Loader from "react-loader-spinner";

const NotificationModal = (props) => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedTab("All Notifications");
  }, []);

  const tabHandler = async (item) => {
    setSelectedTab(item);
    if(item === "Recent Notification"){
      const apiData = newnotification?.map(item => {
        return item?.id
      })
      dispatch(seeAllNotification({notification_ids : apiData}))
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ height: "50vh", overflowY: "scroll", background: "#f9f9f9" }}
        >
          <div className="row ">
            <div className="col-12">
              {["All Notifications", "Recent Notification"].map((item, index) => (
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
                    shownotification={item === "Recent Notification"}
                    notificationCount={notificationcount}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            {loading ? (
              <div className="mt-5 center-childrens">
                <Loader height={100} width={100} type="Puff" color="#1a4774" />
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
                         title={"hello"}
                         description="hello"
                         />
                      )}
                    </>
                  ))
                ) : newnotification?.length > 0 &&
                  selectedTab === "Recent Notification" ? (
                  newnotification?.map((item, index) => (
                    <>
                      {item === undefined ? null : (
                        <NotificationTab
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

export default NotificationModal;
