import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/Actions/loginActions";
import { Link } from "react-router-dom";
import { forgotPassword } from "../Store/Actions/loginActions";

const Login = (props) => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    console.log("omSubmit")
    const apiData = {
      email_address: email,
      password: password,
    };

    const type = await dispatch(loginUser(apiData));
    alert(type, "Login Hogaya Sahi");
  };


  const onSubmitEmail = async () => {
    const apiData = {
      email_address: email,
    };
    const type = await dispatch(forgotPassword(apiData));
    alert(type, "Forgot Password Sahi Hit Hua hai");
    props.onHide();
  };


  const [email, setEmail] = useState("");
  const [showdiv, setShowdiv] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered size="sm">
       
       <Modal.Header>
     
         
       {showdiv ?  
        <span className="" style={{ fontWeight: "600" ,fontSize:'22px',color:'#0066b3' }}> Login  </span>
        :
        <span className="" style={{ fontWeight: "600" ,fontSize:'22px',color:'#0066b3' }}> Forgot Password </span>
       }
         
       </Modal.Header>
       <Modal.Body className="p-0">
        
      
        
          <div className="row ">
            <div className="col mb-5">
              <div className="row "></div>
              <div className="d-flex justify-content-center  me-3 ">
                <div
                  className="card cardlogmodel"
                  style={{ minWidth: "50%", width: "375px", height: "500" }}
                >

                  {showdiv ?  
                  <div>
                     
                     

                      <div className="form logform  px-3 pt-4" style={{  padding: '10px',height: '180px'}}>
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend ">
                            {/* <div className="input-group-text">
                              <i
                                className="fa fa-user"
                                style={{ color: "#555" }}
                              ></i>
                            </div> */}
                          </div>
                 
                          <input
                            type="email"
                            className="form-control logmod"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Username/Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input-group  mr-sm-2">
                          <div className="input-group-prepend">
                            {/* <div className="input-group-text">
                              <i
                                className="fa fa-lock"
                                style={{ color: "#555" }}
                              ></i>
                            </div> */}
                          </div>
                          <input
                            type="password"
                            className="form-control logmod"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                      
                        <button
                          className="btn btn-primary rounded-pill btn-block mb-2"
                          style={{
                            color: "#fff",
                            backgroundColor: "#0066b3",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                          onClick={onSubmit}
                        >
                          LOG IN
                        </button>

                        <div className="">
                          <label
                            className="form-check-label"
                            for="gridCheck1"
                            style={{ fontSize: "12px" }}
                          >
                            <Link onClick={()=>setShowdiv(false)} to="#" style={{textDecoration:'none' ,color:'#0066b3'}}>Forgot Password ?</Link>
                          </label>
                        </div>

                      </div>
                      </div>
                      :

                      <div className=""> 
                     
                     

                      <div className="formpx px-3 pt-4" style={{  padding: '10px',height: '180px'}}>
                        <div className="input-group mb-4 mr-sm-2">
                          <div className="input-group-prepend">
                            {/* <div className="input-group-text">
                              <i
                                className="fa fa-user"
                                style={{ color: "#555" }}
                              ></i>
                            </div> */}
                          </div>
                          <input
                            type="email"
                            className="form-control logmod mt-4"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Username/Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <button
                          className="btn btn-primary rounded-pill btn-block mb-2"
                          style={{
                            color: "#fff",
                            backgroundColor: "#0066b3",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                          onClick={onSubmitEmail}
                        >
                          Submit
                        </button>
                        <div className="">
                          <label
                            className="form-check-label "
                            for="gridCheck1"
                            style={{ fontSize: "12px" }}
                          >
                            <Link onClick={()=>setShowdiv(true)} to="#" style={{textDecoration:'none' ,color:'#0066b3'}}>Back To Login </Link>
                          </label>
                        </div>
                      </div>
                      </div>


                      }

                      

                    </div>


                  </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
