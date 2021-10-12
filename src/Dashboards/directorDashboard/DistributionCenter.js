import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard';
import DashCard from '../../components/ReusableComponents/DashboardTableCards/DashCard2';
import NavbarDash from '../../components/ReusableComponents/NavbarDash/NavbarDash';
import { getDistributioncenter } from '../../Store/Actions/directorActions';

const DistributionCenter = (
  {
    sidebarOpen,
    openSidebar,
  }
) => {

  const distributioncenter = useSelector((state) => state?.director?.distributioncenter);
  const dispatch = useDispatch();
  useEffect(() => {
    if (distributioncenter?.length < 1) {
      dispatch(getDistributioncenter());
    }

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
        Heading="Distribution Center"
      />


      <DashboardMainCard
              classnamewidth="96%"

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
                          datahead={ob.name}
                          dataname={ob.head.name}
                          datadesignation={ob.head.designation}
                          dataemail={ob.head.email}
                          dataphone={ob.head.phone}
                          dataaddress={ob.head.address}
                        />
                      </div>
                    </React.Fragment>
                  );
                })
                : distributioncenter.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashCard
                        datahead={ob.name}
                        dataname={ob.head.name}
                        datadesignation={ob.head.designation}
                        dataemail={ob.head.email}
                        dataphone={ob.head.phone}
                        dataaddress={ob.head.address}
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

export default DistributionCenter
