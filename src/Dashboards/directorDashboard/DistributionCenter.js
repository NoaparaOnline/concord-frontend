/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard';
import DashCard from '../../components/ReusableComponents/DashboardTableCards/DashCard2';
import NavbarDash from '../../components/ReusableComponents/NavbarDash/NavbarDash';
import { getDistributioncenter, getSingleDistributionObj, getSingleDistributionObjWithUid } from '../../Store/Actions/directorActions';

const DistributionCenter = (
  props
) => {
  const {t}=useTranslation('common')
  const sidebarOpen = props?.sidebarOpen;
  const openSidebar = props?.openSidebar;

  const history = useHistory(); 

  const distributioncenter = useSelector((state) => state?.director?.distributioncenter);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDistributioncenter());
  }, [])


  const [filteredResults2, setFilteredResults2] = useState([]);
  const [searchInput2, setSearchInput2] = useState("");
  const searchItems2 = (searchValue) => {
    setSearchInput2(searchValue);
    if (searchInput2 !== "") {
      const filteredData = distributioncenter.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput2.toLowerCase());
      });
      setFilteredResults2(filteredData);
    } else {
      setFilteredResults2(distributioncenter);
    }
  };


  const loader = useSelector((state) => state?.logIn?.loader);


  return (
    <>
      <NavbarDash
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        Heading={t('distribution_center.dist_center')}
      />


      <DashboardMainCard
              classnamewidth="96%"

        reverse={false}
        TableCardGrid={
          <div className="row" >

            <div className="row">
              <div className="col-3 mb-2">
                <i
                  className="fa fa-search"
                  id="filtersubmit"
                  style={{ fontSize: "15px" }}
                />
                <input
                  className="form-control"
                  icon="search"
                  style={{
                    padding: "0.375rem 2.5rem",
                    borderRadius: "10px",
                    minWidth: "240px",
                    
                    
                  }}
                  placeholder={t('distribution_center.search_text')}
                  onChange={(e) => searchItems2(e.target.value)}
                />
              </div>
            </div>


            {loader ? (
              <div className="d-flex justify-content-center">
                <Loader
                  height={100}
                  width={100}
                  type="Rings"
                  color="#0066b3"
                />
              </div>

            ) : (


              searchInput2.length >= 1
                ? filteredResults2.map((ob, index) => {
                  
                  return (
                    <React.Fragment key={ob.id}>
                      <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                       
                       
                        <DashCard
                        
                        datahead={
                          ob?.areas[0]?.parent?.name
                        }
                        dataname={
                             
                            ob?.depot_managers?.map((obdep, index) => {
                              if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.name
                                  );
                              }
                              else{
                                return ""
                              }
                              })
                        }
                        datadesignation={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.designation
                                  );
                              }
                              else{
                                return ""
                              }
                            
                          })
                          }
                        dataemail={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.email_address
                                  );
                              }
                              else{
                                return ""
                              }
                            })
                            
                        }
                        dataphone={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.phone_number
                                  );
                              }
                              else{
                                return ""
                              }
                            
                            })
                          }
                        
                        dataaddress={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  `${obdep?.address.street_address} ,${obdep?.address.area} ,${obdep?.address.province}, ${obdep?.address.city}` 
                                  );
                              }
                              else{
                                return ""
                              }
                            
                            })
                          
                        }
                        />
                      </div>
                    </React.Fragment>
                  );
                  
                  
                })
                : distributioncenter.map((ob, index) => (
                  <React.Fragment key={ob?.id}>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div 
                  onClick={() => {
                    history.push("/director-dashboard/distribution-center/stocksdetails");
                    dispatch(getSingleDistributionObj(ob?.uid));
                  }}
                  style={{cursor:'pointer'}}
                 >
                      <DashCard
                        datahead={
                          ob?.name
                        }
                        dataname={
                             
                            ob?.depot_managers?.map((obdep, index) => {
                              if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.name
                                  );
                              }
                              else{
                                return ""
                              }
                              })
                        }
                        datadesignation={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.designation
                                  );
                              }
                              else{
                                return ""
                              }
                            
                            })
                          }
                        dataemail={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.email_address
                                  );
                              }
                              else{
                                return ""
                              }
                            })
                            
                        }
                        dataphone={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  obdep?.phone_number
                                  );
                              }
                              else{
                                return ""
                              }
                            
                            })
                          }
                        
                        dataaddress={
                          ob?.depot_managers?.map((obdep, index) => {
                            if(obdep?.is_primary)
                              {
                                return (
                                  `${obdep?.address.street_address === undefined ? "" : obdep?.address.street_address +','} ${obdep?.address.area === undefined ? t('distribution_center.n_a') : obdep?.address.area +','} ${obdep?.address.province === undefined ? "" : obdep?.address.province +','} ${obdep?.address.city === undefined ? "" : obdep?.address.city } ` 
                                  );
                              }
                              else{
                                return ""
                              }
                            })
                          
                        }
                        />
                  </div>    

                    </div>
                  </React.Fragment>
                ))


            )}
          </div>
        }
      />
    </>
  )
}

export default DistributionCenter
