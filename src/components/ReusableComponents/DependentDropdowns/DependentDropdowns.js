import React from 'react'
import { Link } from 'react-router-dom';

const DependentDropdowns = () => {


    

    return (
        <>
            {/* Selected Dropdown For Child Users */}
            <div className="row">
                    <div className="col-2">
                      <select
                        className="form-control"
                        name="country"
                        // value={this.state.CountryId}
                        // onChange={(e) => this.OnCountryChange(e)}
                      >
                        <option value>Select SM</option>
                        {/* {this.state.CountryData.map((e, key) => {
                          return (
                            <option key={key} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })} */}
                      </select>
                    </div>


                    <div className="col-2">
                      <select
                        className="form-control"
                        name="state"
                        // value={this.state.StateId}
                        // onChange={(e) => this.OnStateChange(e)}
                      >
                        <option value>Select RSM's</option>
                        {/* {this.state.StateData.map((e, key) => {
                          return (
                            <option key={key} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })} */}
                      </select>
                    </div>

                    <div className="col-2">
                      <select
                        className="form-control"
                        name="city"
                        // value={this.state.CityId}
                        // onChange={(e) => this.OnCityChange(e)}
                      >
                        <option value>Select AM's</option>
                        {/* {this.state.CityData.map((e, key) => {
                          return (
                            <option key={key} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })} */}
                      </select>
                    </div>

                    <div className="col-2">
                      <select
                        className="form-control"
                        name="city"
                        // value={this.state.CityId}
                        // onChange={(e) => this.OnCityChange(e)}
                      >
                        <option value>Select MPO's</option>
                        {/* {this.state.CityData.map((e, key) => {
                          return (
                            <option key={key} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })} */}
                      </select>
                    </div>

                    <div className="col-4 d-flex justify-content-end">
                    <div
                                    className={` btn btn-primary me-2 `}
                                    style={{ backgroundColor: "#0066b3" }}
                                  >

                                    <Link
                                      style={{
                                        color: "#fff",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        textDecoration: "none",
                                      }}
                                    //   onClick={() => {
                                    //     handleShow();
                                    //   }}
                                    >
                                      <i className="fa fa-filter ms-2"></i>
                                      &nbsp; Filter
                                    </Link>
                                  </div>
                    </div>


                  </div>
        </>
    )
}

export default DependentDropdowns
