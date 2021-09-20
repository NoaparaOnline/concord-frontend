import React from 'react'
import NavbarDash from '../NavbarDash/NavbarDash'
import TableDash from './TableDash'
import {
  data,
  stockdata,
} from "./mockData";
import {
  tableConstants,
  stocks,
} from "./tableConstant";

import {  Link } from "react-router-dom";
import TableInnerPage from './TableInnerPage';

const InnerPage = (props) => {
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
          
              cols={tableConstants(handleEdit)}
              data={data}
              hoverable
              bordered={false}
              {...props}  
            />
        </>
    )
}

export default InnerPage
