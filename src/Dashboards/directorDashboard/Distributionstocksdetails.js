// import React from 'react'
// import { useSelector } from 'react-redux';

// const Distributionstocksdetails = (props) => {

//     const getsingledistributionobj = useSelector((state) => state?.director?.getsingledistributionobj);
    
//     console.log(getsingledistributionobj,"Testing")

//     return (
//         <div>
//             Hello
//         </div>
//     )
// }

// export default Distributionstocksdetails



/* eslint-disable */
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
import { getSingleDistributionObjWithUid } from '../../Store/Actions/directorActions';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Distributionstocksdetails = (props) => {
    const {
        sidebarOpen,
        openSidebar,
        deopdefaultSorted,
        Heading,
        linkRoute
    } = props;
   const getsingledistributionobj = useSelector((state) => state?.director?.getsingledistributionobj);
   const {t}=useTranslation('common')
    const dispatch = useDispatch();
    let getsingledistributionobjall = useSelector((state) => state?.director?.getsingledistributionobjall);
    let getsingledistributionobjmedicine = useSelector((state) => state?.director?.getsingledistributionobjmedicine);
    let getsingledistributionobjgift = useSelector((state) => state?.director?.getsingledistributionobjgift);



    useEffect(() => {
        setSelectedTabbledata(getsingledistributionobjall)
        dispatch(getSingleDistributionObjWithUid(getsingledistributionobj,''));
        dispatch(getSingleDistributionObjWithUid(getsingledistributionobj,'/medicine'));
        dispatch(getSingleDistributionObjWithUid(getsingledistributionobj,'/gift'));
       
       // eslint-disable-next-line
      }, []);
    useEffect(() => {
        setSelectedTabbledata(getsingledistributionobjall)
       // eslint-disable-next-line
      }, [getsingledistributionobjall]);

    const tabledataHandler = async (item) => {
        setSelectedTabbledata(item);
      };
    
      // Tabhandler Medicine And Gift
      const tabHandler = (item) => {
        setSelectedTab1(item);
        if (item === t('distribution_stocks_details.all_text')) {
          tabledataHandler(getsingledistributionobjall);
        }
        else if (item ===  t('distribution_stocks_details.medicine_text')) {
          tabledataHandler(getsingledistributionobjmedicine);
        }
        else if (item === t('distribution_stocks_details.gift_text')) {
          tabledataHandler(getsingledistributionobjgift);
        }
      };
      // USE STATES 
    
      const [selectedTab1, setSelectedTab1] = useState( t('distribution_stocks_details.all_text'));
      const [selectedTabbledata, setSelectedTabbledata] = useState(getsingledistributionobjall);
    

    // STOCKS COLUMN HEADERS
    const DepomanagerStock = [

        
        { dataField: "product.name", text: t('distribution_stocks_details.product_name_text')  , sort: true },

        { dataField: "product.category.name", text:  t('distribution_stocks_details.cat_name') , sort: true },
        
        { dataField: "product.formula", text: t('distribution_stocks_details.product_formula') , sort: true },
        
        { dataField: "quantity", text: t('distribution_stocks_details.qty_text') , formatter: nullChecker, sort: true },

        { dataField: "product.price", text: t('distribution_stocks_details.price_text') , sort: true },



    ];
    // STOCKS COLUMN HEADERS
   
    

    //NULLABLE VALUE CHECKER FUNCTION TABLE DATA FIELDS
    function nullChecker(cell) {
        return (
            <>
                <div>{!cell ?  t('distribution_stocks_details.n_a')  : cell}</div>
            </>
        );
    }

    const { SearchBar } = Search;

    const buttonname = [t('distribution_stocks_details.all_text'), t('distribution_stocks_details.medicine_text'),  t('distribution_stocks_details.gift_text')]
    const loader = useSelector((state) => state?.logIn?.loader);


    const emptyDataMessage = () => { return t('distribution_stocks_details.no_data_to_display');}
    return (
        <>
            <NavbarDash
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={Heading}
                BackBtn={
                    <>
                      <Link
                        to={linkRoute}
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#3F4254",
                            marginBottom:'10px'
                          }}
                        >
                          <i
                            className="fa fa-angle-left"
                            aria-hidden="true"
                            style={{
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#3F4254",
                              
                            }}
                          ></i>{" "}
                          {t('distribution_stocks_details.back_text')} 
                        </span>
                      </Link>
                    </>
                  }
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
                                        placeholder= {t('distribution_stocks_details.search_text')} 
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

export default Distributionstocksdetails
