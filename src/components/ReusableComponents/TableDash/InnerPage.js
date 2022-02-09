import NavbarDash from "../NavbarDash/NavbarDash";
// import {
//   data,

// } from "./mockData";
// import {
//   tableConstants,

// } from "./tableConstant";

import { Link } from "react-router-dom";
import TableInnerPage from "./TableInnerPage";
import { useTranslation } from "react-i18next";

const InnerPage = (props) => {

  const {t}=useTranslation('common')
  // const formatDate = (timestamp) => {
  //   return new Intl.DateTimeFormat("en-US").format(timestamp);
  // };

  // const handleEdit = (item) => () => {
  //     // write your logic
  //     alert(JSON.stringify(item));
  //   };

  return (
    <>
      <NavbarDash
        sidebarOpen={props.sidebarOpen}
        openSidebar={props.openSidebar}
        Heading={props.Heading}
        BackBtn={
          <>
            <Link
              to={props.linkRoute}
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
               {t('inner_page.back')}
              </span>
            </Link>
          </>
        }
      />

      <TableInnerPage {...props} />
    </>
  );
};

export default InnerPage;
