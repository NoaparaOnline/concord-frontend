import React from 'react'
import { Modal } from 'react-bootstrap'
import SingleNotificationCard from '../../SingleNotificationCard/SingleNotificationCard'

const Notifications = (props) => {
    return (
        <>
        <Modal show={props.show} onHide={props.onHide} centered size="md" id="notificationmodal">
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
           Notifications
          </span>
        </Modal.Header>
        <Modal.Body className="p-0"  >
          <div className="row ">
           

            <div className="col-lg-12">
              
              <div className="">
                <div
                  className="card cardlogmodel"
                  
                >
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item text-center" style={{width:'50%'}}>
                      {" "}
                      <a
                        className="nav-link active btl"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <span style={{fontWeight:'600' }}>Recent</span>
                      </a>{" "}
                    </li>
                    <li className="nav-item text-center" style={{width:'50%'}}>
                      {" "}
                      <a
                        className="nav-link btr"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                         <span style={{fontWeight:'600'}}>All</span>
                      </a>{" "}
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent" style={{overflowY:'scroll' ,height:'400px'}}>
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                     
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                     
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                     
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      title="hello"
                      description="hello"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                      <SingleNotificationCard
                      backgroundcolorchat="#565656"
                      colorchattext="#fff"
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default Notifications
