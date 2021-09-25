import React, { useEffect } from 'react'
import NavbarDash from '../NavbarDash/NavbarDash'
import {
  data,
  
} from "./mockData";
import {
  tableConstants,
  
} from "./tableConstant";

import {  Link } from "react-router-dom";
import TableInnerPage from './TableInnerPage';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../Store/Actions/deportmanagerActions';

const InnerPage = (props) => {
  
  
  const order = useSelector((state) => state?.deport?.order);
  const dispatch = useDispatch();
  
  

  useEffect(() => {
  console.log("State Item Current",props);

    if (order?.length < 1) {
      dispatch(getOrder());
    }
  }, [dispatch, order]);

  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US").format(timestamp);
  };


    console.log(props,"Inner Table");
    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item));
      };
      
    return (
        
        <>
             <NavbarDash
              sidebarOpen={props.sidebarOpen}
              openSidebar={props.openSidebar}
              Heading="Order History"
              BackBtn={
                <>
                <Link
                    to="/depotmanager-dashboard"
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{fontSize:'20px', fontWeight:'600',color:'#3F4254'}}>
                      <i class="fa fa-angle-left"  aria-hidden="true" style={{fontSize:'20px', fontWeight:'600',color:'#3F4254'}}></i> Back
                    </span>
                  </Link>
                </>
              }
            />
            
            <TableInnerPage
          
             
              {...props}  
            />
        </>
    )
}

export default InnerPage
