import React, { useEffect, useState } from 'react'
//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import { useDispatch, useSelector } from "react-redux";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import Loader from 'react-loader-spinner';
import DashboardBtnList from '../../components/ReusableComponents/DashboardBtnList/DashboardBtnList';
import { getStocksGiftProduct, getStocksMedicineProduct, getStocksProduct } from '../../Store/Actions/deportmanagerActions';

const Stocks = ({
    sidebarOpen,
    openSidebar,
    deopdefaultSorted,
}) => {


    const dispatch = useDispatch();
    const stock = useSelector((state) => state?.deport?.stock);
    const stockmedicine = useSelector((state) => state?.deport?.stockmedicine);
    const stockgift = useSelector((state) => state?.deport?.stockgift);

    useEffect(() => {
        setSelectedTabbledata(stock)
            dispatch(getStocksProduct());
        dispatch(getStocksMedicineProduct());
        dispatch(getStocksGiftProduct())
       // eslint-disable-next-line
      }, []);
    useEffect(() => {
        setSelectedTabbledata(stock)
       // eslint-disable-next-line
      }, [stock]);

    const tabledataHandler = async (item) => {
        setSelectedTabbledata(item);
      };
    
      // Tabhandler Medicine And Gift
      const tabHandler = (item) => {
        setSelectedTab1(item);
        if (item === "All") {
          tabledataHandler(stock);
        }
        else if (item === "Medicine") {
          tabledataHandler(stockmedicine);
        }
        else if (item === "Gift") {
          tabledataHandler(stockgift);
        }
      };
      // USE STATES 
    
      const [selectedTab1, setSelectedTab1] = useState("All");
      const [selectedTabbledata, setSelectedTabbledata] = useState(stock);
    

    // STOCKS COLUMN HEADERS
    const DepomanagerStock = [

        { dataField: "product.name", text: "Product Name", sort: true },

        { dataField: "product.category.name", text: "Category Name", sort: true },


        { dataField: "quantity", text: "Quantity", formatter: nullChecker, sort: true },


        { dataField: "product.formula", text: "Formulas", formatter: nullChecker, sort: true },

        { dataField: "product.price", text: "Price", sort: true },

    ];
    // STOCKS COLUMN HEADERS
   
    

    //NULLABLE VALUE CHECKER FUNCTION TABLE DATA FIELDS
    function nullChecker(cell) {
        return (
            <>
                <div>{!cell ? "N/A" : cell}</div>
            </>
        );
    }

    const { SearchBar } = Search;

    const buttonname = ["All", "Medicine", "Gift"]
    const loader = useSelector((state) => state?.logIn?.loader);


    const emptyDataMessage = () => { return 'No Data to Display';}
    return (
        <>
            <NavbarDash
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading="Stocks"
            />


            <DashboardMainCard
              classnamewidth="96%"

                reverse={true}
                SelectedButtons={
                    <div className="row my-4">
                        <div className="col ">

                            {buttonname.map(
                                (item, index) => (
                                    <div
                                        className="d-flex d-inline-flex "
                                        key={index + 1}
                                        onClick={() => tabHandler(item)}
                                    >
                                        <DashboardBtnList
                                            label={item}
                                            bntStyle={{
                                                borderRadius:
                                                    index === 0 ? '10px 0px 0px 10px'
                                                        : index === buttonname.length - 1
                                                            ? '0px 10px 10px 0px'
                                                            : '',
                                                width:
                                                    index === 0
                                                        ? "80px"
                                                        : index === buttonname.length - 1
                                                            ? "80px"
                                                            : "",

                                            }}
                                            className={
                                                selectedTab1 === item
                                                    ? "dashboardBtnList-item-active"
                                                    : "default-color-and-hover "
                                            }
                                        />
                                    </div>
                                )
                            )}
                        </div>

                    </div>
                }
                TableDiv={
                    <>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={selectedTabbledata}
                            // columns={DepomanagerStock}
                            columns={DepomanagerStock}
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
                                                height={100} width={100}
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
                                            noDataIndication={emptyDataMessage}
                                            pagination={selectedTabbledata.length > 10 ? paginationFactory() : null}
                                            bordered={false}
                                            condensed
                                             
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

export default Stocks
