import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard';
import DashCard from '../../components/ReusableComponents/DashboardTableCards/DashCard2';
import NavbarDash from '../../components/ReusableComponents/NavbarDash/NavbarDash';
import { getDepartmenthead } from '../../Store/Actions/directorActions';

const Departmentheads = (
  {
    sidebarOpen,
    openSidebar,
  }

) => {

  const departmenthead = useSelector((state) => state?.director?.departmenthead);

  const dispatch = useDispatch();

  useEffect(() => {
    if (departmenthead?.length < 1) {
    dispatch(getDepartmenthead());
    }
 
  },[])
    const loader = useSelector((state) => state?.logIn?.loader);
   
    const [filteredResults3, setFilteredResults3] = useState([]);
    const [searchInput3, setSearchInput3] = useState("");
    const searchItems3 = (searchValue) => {
      setSearchInput3(searchValue);
      if (searchInput3 !== "") {
        const filteredData = departmenthead.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput3.toLowerCase());
        });
        console.log("filteredData", filteredData);
        setFilteredResults3(filteredData);
      } else {
        setFilteredResults3(departmenthead);
      }
    };
  
    return (
        <>
         <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Department Head"
          />

          
            <DashboardMainCard
              reverse={false}
              TableCardGrid={
                <div className="row">
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
                          minWidth: "240px"
                        }}
                        placeholder="Search"
                        onChange={(e) => searchItems3(e.target.value)}
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

                  searchInput3.length >= 1
                    ? filteredResults3.map((ob, index) => {
                      return (
                        <React.Fragment key={ob.id}>
                          <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                            <DashCard
                              datahead="Department Head"
                              dataname={ob.name}
                              datadesignation={ob.designation}
                              dataemail={ob.email}
                              dataphone={ob.phone}
                              dataaddress={ob.address}
                            />
                          </div>
                        </React.Fragment>
                      );
                    })
                    : departmenthead.map((ob, index) => (
                      <React.Fragment key={ob.id}>
                        <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                          <DashCard
                            datahead="Department Head"
                            dataname={ob.name}
                            datadesignation={ob.designation}
                            dataemail={ob.email}
                            dataphone={ob.phone}
                            dataaddress={ob.address}
                          />
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

export default Departmentheads
