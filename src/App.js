import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import "./App.css";
import { Navbar, Footer, FixedRight } from "./components";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Facilities from "./Pages/Facilities";
import GlobalOperations from "./Pages/GlobalOperations";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Media from "./Pages/Media";
import Products from "./Pages/Products";
import Sitemap from "./Pages/Sitemap";
import TeleMedicine from "./Pages/TeleMedicine";
import Aboutmessagechairmen from "./Pages/Aboutmessagechairmen";
import Aboutvisionmission from "./Pages/Aboutvisionmission";
import Contactcontactus from "./Pages/Contactcontactus";
import Contactourdistribution from "./Pages/Contactourdistribution";
import Facilitiesourdistribution from "./Pages/Facilitiesourdistribution";
import Facilitiesproduct from "./Pages/Facilitiesproduct";
import Facilitiesquality from "./Pages/Facilitiesquality";
import Facilitiesresearchdevrsttime from "./Pages/Facilitiesresearchdevrsttime";
import Facilitieswarhouse from "./Pages/Facilitieswarhouse";
import Mediamilestone from "./Pages/Mediamilestone";
import Mediaphoto from "./Pages/Mediaphoto";
import Mediasocialmedia from "./Pages/Mediasocialmedia";
import Mediasocialresponsiblities from "./Pages/Mediasocialresponsiblities";
import Mediavideo from "./Pages/Mediavideo";
import Productsbygeneric from "./Pages/Productsbygeneric";
import Productsbytrade from "./Pages/Productsbytrade";
import Productsfirsttime from "./Pages/Productsfirsttime";
import Productstherapeutic from "./Pages/Productstherapeutic";
import ScrollToTop from "./components/ReusableComponents/scrollTop";
import ProductsCardInnerPage from "./Pages/ProductsCardInnerPage";
import ResetPassword from "./Pages/ResetPassword";
import { getUser } from "./Store/Actions/loginActions";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import DepotmanagerDashboard from "./Dashboards/depotmanagerDashboard/depotmanagerDashboard";
import DirectorDashboard from "./Dashboards/directorDashboard/directorDashboard";
import { messaging, test } from "./init-fcm";

import PrivateRoute from "./Routes/PrivateRoute";
import Aboutchairmenprofile from "./Pages/Aboutchairmenprofile";
import CareersInnerPage from "./Pages/CareersInnerPage";
import DapzineTablet from "./components/ReusableComponents/ProductDetail/DapzineTablet";
import Relikof from "./components/ReusableComponents/ProductDetail/Relikof";
import Relikofkids from "./components/ReusableComponents/ProductDetail/Relikofkids";
import Acedol from "./components/ReusableComponents/ProductDetail/Acedol";
import Error404 from "./Pages/Error404";
import ProductallDetails from "./components/ReusableComponents/ProductDetail/ProductallDetails";
// import PublicRoute from './Routes/PublicRoute';

function App() {
  // Get User From Local Storage
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    if ("serviceWorker" in navigator) {
      navigator?.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function (err) {
          console.log("Service worker registration failed, error:", err);
        });
    }
    Notification.requestPermission()
      .then(async function () {
        // console.log(result);
        const token = await test?.getToken(messaging);
        localStorage.setItem("fcmConcord", token);
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
    

      navigator?.serviceWorker?.addEventListener("message", (message) => {
        console.log(message,"message")
        if (!("Notification" in window)) {
          toast.error("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
          const noti = new Notification(
            message?.data?.["firebase-messaging-msg-data"]?.notification?.title,
            {
              icon: message?.data?.["firebase-messaging-msg-data"]?.notification
                ?.image,
              body: message?.data?.["firebase-messaging-msg-data"]?.notification
                ?.body,
              data: message?.data?.["firebase-messaging-msg-data"]?.data,
            }
          );
          noti.onclick = (event) => {
            console.log(event, "Notification clicked.");
            // if (event?.currentTarget?.data?.url) {
            //   window.location.href = event?.currentTarget?.data?.url;
            // }
          };
        }
      });

    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        
        <ScrollToTop />
        {/*          Root Page             */}

        <Route exact path="/" render={(props) => <Navbar {...props} />} />

        {/*          Navbar             */}

        <Route
          exact
          path="/:page"
          render={(props) =>
            props.location.pathname !== "/depotmanager-dashboard" &&
            props.location.pathname !== "/depotmanager-dashboard/" &&
            props.location.pathname !== "/director-dashboard" &&
            props.location.pathname !== "/director-dashboard/" && (
              // && props.location.pathname !== '/reset-password'
              <Navbar {...props} />
            )
          }
        />


        {/* Resest Password */}
        {/* <Route path="/reset_password_link/uid=:uid/token=:token" render={(props)=>   <ResetPassword {...props}/>}/> */}
        <Route
          path="/reset-password"
          render={(props) => <ResetPassword {...props} />}
        />

        {/*          FixedRight             */}

        <Route exact path="/">
          <FixedRight />
        </Route>
        <Route
          exact
          path="/:page"
          render={(props) =>
            props.location.pathname !== "/depotmanager-dashboard" &&
            props.location.pathname !== "/depotmanager-dashboard/" &&
            props.location.pathname !== "/director-dashboard" &&
            props.location.pathname !== "/director-dashboard/" &&
            props.location.pathname !== "/reset-password" && <FixedRight />
          }
        />



          <Switch>

          
        {/*          Front Home Page             */}
        <Route
         exact path="/"
          render={(props) => <Home {...props} />}
        />
        {/* <Route exact path="/">
          <Home  />
        </Route> */}


        {/*          Home Page             */}
        <Route
         exact path="/home"
          render={(props) => <Home {...props} />}
        />
        {/* <Route exact path="/home">
          <Home  />
        </Route> */}


        {/*          Main About Page             */}

        <Route exact path="/about">
          <About />
        </Route>

        {/*          Main About Page SubMenu Page             */}

        <Route exact path="/about_vision_mission">
          <Aboutvisionmission />
        </Route>

        <Route exact path="/about_message_chairmen">
          <Aboutmessagechairmen />
        </Route>

        <Route exact path="/about_chairmen_profile">
          <Aboutchairmenprofile />
        </Route>

        {/*          Careers Page              */}

        <Route exact path="/careers">
          <Careers />
        </Route>
        {/*       Careers Inner Page      */}
        <Route exact path="/careers-inner-page">
          <CareersInnerPage />
        </Route>

        {/* Dashboards */}

        {/* <Route
           path="/depotmanager-dashboard"
           render={(props) => <DepotmanagerDashboard {...props} />}/>
        */}
        <PrivateRoute
        routelink={"depot_manager"}
          path="/depotmanager-dashboard"
          component={DepotmanagerDashboard}
        />
        <PrivateRoute
         routelink={"director"}
          path="/director-dashboard"
          component={DirectorDashboard}
        />

        {/* Private Convert */}
        {/* <Route 
        path="/director-dashboard"
        render={(props) => <DirectorDashboard {...props} />}
        /> */}

        {/*          Contact Page             */}

        <Route exact path="/contact">
          <Contact />
        </Route>

        {/*          Contact Page SubMenu Page             */}

        <Route exact path="/contact_contactus">
          <Contactcontactus />
        </Route>

        <Route exact path="/contact_ourdistribution">
          <Contactourdistribution />
        </Route>

        {/*          Facilities Page             */}

        <Route exact path="/facilities">
          <Facilities />
        </Route>

        {/*          Facilities SubMenu Page          */}

        <Route exact path="/facilities_ourdistribution">
          <Facilitiesourdistribution />
        </Route>

        <Route exact path="/facilities_product">
          <Facilitiesproduct />
        </Route>

        <Route exact path="/facilities_quality">
          <Facilitiesquality />
        </Route>

        <Route exact path="/facilities_researchdevrsttime">
          <Facilitiesresearchdevrsttime />
        </Route>

        <Route exact path="/facilities_warhouse">
          <Facilitieswarhouse />
        </Route>

        {/*          GlobalOperation Page          */}

        <Route exact path="/globalOperations">
          <GlobalOperations />
        </Route>

        {/*          Media Page          */}

        <Route exact path="/media">
          <Media />
        </Route>

        {/*          Media Submenu Page          */}

        <Route exact path="/media_milestone">
          <Mediamilestone />
        </Route>

        <Route exact path="/media_photo">
          <Mediaphoto />
        </Route>

        <Route exact path="/media_socialmedia">
          <Mediasocialmedia />
        </Route>

        <Route exact path="/media_socialresponsiblities">
          <Mediasocialresponsiblities />
        </Route>

        <Route exact path="/media_video">
          <Mediavideo />
        </Route>

        {/*          Products Page          */}

        <Route exact path="/products">
          <Products />
        </Route>

        {/*          Products Submenu Page          */}
        <Route
         exact path="/products_bygeneric"
          render={(props) => <Productsbygeneric {...props} />}
        />


        <Route
         exact path="/products_bytrade"
          render={(props) => <Productsbytrade {...props} />}
        />
        
        
        <Route
         exact path="/products_firsttime"
          render={(props) => <Productsfirsttime {...props} />}
        />
        
        <Route
         exact path="/products_therapeutic"
          render={(props) => <Productstherapeutic {...props} />}
        />



        {/*          Products Inner Pages         */}
        
        {/* All Inner Page */}
        
        <Route
          path="/prod_details"
          render={(props) => <ProductallDetails {...props} />}
        />
        {/* <Route exact path="/prod_details">
          <ProductallDetails
          
          />
        </Route> */}
        {/* All Inner Page */}



        <Route exact path="/acedol-tablet">
          <ProductsCardInnerPage />
        </Route>
        <Route exact path="/dapzine-tablet">
          <DapzineTablet />
        </Route>
        <Route exact path="/relikof-syrup">
          <Relikof />
        </Route>
        <Route exact path="/relikof-kids-syrup">
          <Relikofkids />
        </Route>
        <Route exact path="/acedolcopy-tablet">
          <Acedol />
        </Route>

        {/*          Sitemap Page          */}

        <Route exact path="/sitemap">
          <Sitemap />
        </Route>

        {/*          TeleMedicine          */}

        <Route exact path="/teleMedicine">
          <TeleMedicine />
        </Route>
       

        {/* 404 Page */}
        <Route path="*">
            <Error404 />
          </Route>

        </Switch>


        {/*          Footer             */}

        <Route
          exact
          path="/:page"
          render={(props) =>
            props.location.pathname !== "/depotmanager-dashboard" &&
            props.location.pathname !== "/depotmanager-dashboard/" &&
            props.location.pathname !== "/director-dashboard" &&
            props.location.pathname !== "/director-dashboard/" && (
              //  && props.location.pathname !== '/reset-password'
              <Footer />
              )
            }
        />

        <Route exact path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
