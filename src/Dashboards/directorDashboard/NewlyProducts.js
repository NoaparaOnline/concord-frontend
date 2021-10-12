import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import DashboardBtnList from '../../components/ReusableComponents/DashboardBtnList/DashboardBtnList';
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard';
import DashboardTableCards from '../../components/ReusableComponents/DashboardTableCards/DashboardTableCards';
import NavbarDash from '../../components/ReusableComponents/NavbarDash/NavbarDash';

//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsnew } from '../../Store/Actions/directorActions';


const NewlyProducts = (

  {
    sidebarOpen,
    openSidebar,
    deopdefaultSorted,
  }

) => {

  const productnew = useSelector((state) => state?.director?.productnew);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedTabbledata(productnew)
    if (productnew?.length < 1) {
          dispatch(getProductsnew());
        }
  }, [productnew])

  const [selectedTabbledata, setSelectedTabbledata] = useState(productnew);
  const [selectedTab3, setSelectedTab3] = useState("List");

  const tabledataHandler = async (item) => {
    setSelectedTabbledata(item);
  }

  const tabHandler3 = (item) => {
    setSelectedTab3(item);

    if (item === "List") {
      tabledataHandler(productnew);
    } else if (item === "Grid") {
      tabledataHandler(productnew);
    }
  };



  const DirectorProductsAll = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "category.name",
      text: "Category Name",
      sort: true,
    },
    {
      dataField: "quantity",
      text: "Quantity",
      formatter: nullChecker,
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "price",
      text: "Retail Price",
      sort: true,
    },
    {
      dataField: "created_by._cls",
      text: "Added By",
      formatter: nullChecker,
      sort: true,
    },
  ];

  //NULLABLE VALUE CHECKER FUNCTION TABLE DATA FIELDS
  function nullChecker(cell) {
    return (
      <>
        <div>{!cell ? "N/A" : cell}</div>
      </>
    );
  }

  const { SearchBar } = Search;
  const loader = useSelector((state) => state?.logIn?.loader);
  const buttonname3 = ["List", "Grid"];

  const [filteredResults1, setFilteredResults1] = useState([]);
  const [searchInput1, setSearchInput1] = useState("");

  const searchItems1 = (searchValue) => {
    setSearchInput1(searchValue);
    if (searchInput1 !== "") {
      const filteredData = productnew.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput1.toLowerCase());
      });
      setFilteredResults1(filteredData);
    } else {
      setFilteredResults1(productnew);
    }
  };


    return (
        <>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Newly Launched"
          />

          
            <DashboardMainCard
              reverse={selectedTab3 === "List" ? true : false}
              SelectedButtons={
                <div className="">
                  {buttonname3.map((item, index) => (
                    <div
                      className="d-flex d-inline-flex my-3"
                      key={index + 1}
                      onClick={() => tabHandler3(item)}
                    >
                      <DashboardBtnList
                        label={item}
                        iconclassname={
                          item === "List" ? "fa fa-list" : "fa fa-th"
                        }
                        bntStyle={{
                          borderRadius:
                            index === 0
                              ? "10px 0px 0px 10px"
                              : index === buttonname3.length - 1
                                ? "0px 10px 10px 0px"
                                : "",
                        }}
                        className={
                          selectedTab3 === item
                            ? "dashboardBtnList-item-active "
                            : "default-color-and-hover "
                        }
                      />
                    </div>
                  ))}
                </div>
              }
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
                        onChange={(e) => searchItems1(e.target.value)}
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

                  searchInput1.length >= 1
                    ? filteredResults1.map((item, index) => {
                      return (
                        <React.Fragment key={item.id}>
                          <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                            <DashboardTableCards ob={item} />
                          </div>
                        </React.Fragment>
                      );
                    })
                    : productnew.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                          <DashboardTableCards ob={item} />
                        </div>
                      </React.Fragment>
                    ))
     )}
                </div>
              }
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={selectedTabbledata}
                    columns={DirectorProductsAll}
                    search
                  >
                    {(props) => (
                      <div className="">
                        <i
                          className="fa fa-search"
                          id="filtersubmit"
                          style={{ fontSize: "15px" }}
                        />
                        <SearchBar
                          {...props.searchProps}
                          style={{
                            padding: "0.375rem 2.5rem",
                            borderRadius: "10px",
                          }}
                        />

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
                        <BootstrapTable
                          {...props.baseProps}
                          // rowStyle={rowStyle}

                          defaultSorted={deopdefaultSorted}
                          // pagination={pagination}
                          pagination={
                            selectedTabbledata.length > 10
                              ? paginationFactory()
                              : null
                          }
                          bordered={false}
                          condensed
                          wrapperClasses="table-responsive"
                        />
     )}
                      </div>
                    )}
                  </ToolkitProvider>
                </>
              }
            />
             
        </>
    )
}

export default NewlyProducts
