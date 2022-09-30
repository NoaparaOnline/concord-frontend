import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Footer, FixedRight } from "./components";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Facilities from "./Pages/Facilities";
import GlobalOperations from "./Pages/GlobalOperations";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Products from "./Pages/Products";
import Sitemap from "./Pages/Sitemap";
import TeleMedicine from "./Pages/TeleMedicine";
import Aboutmessagechairmen from "./Pages/Aboutmessagechairmen";
import Aboutvisionmission from "./Pages/Aboutvisionmission";
import Contactcontactus from "./Pages/Contactcontactus";
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
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import Abouthealthassociates from "./Pages/Abouthealthassociates";
import MediaEvents from "./Pages/MediaEvents";
import { isSupported } from "./Utils/functions";
import { getCmscomponent, SelectedLanguage } from "./Store/Actions/cmsAction";
import Media_socialresponsiblities from "./Pages/Mediasocialresponsiblities";
import MediaJournal from "./Pages/MediaJournal";
import MediaJournalGuide from "./Pages/MediaJournalGuide";
// import PublicRoute from './Routes/PublicRoute';

function App() {

  // Get User From Local Storage
  const dispatch = useDispatch();
  const langs = useSelector((state) => state?.cmsReducer?.languages);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  useEffect(() => {

    dispatch(getUser());
    // dispatch(SelectedLanguage("en-US"));
    dispatch(getCmscomponent());
    // window.onbeforeunload = () => {
    //   localStorage.removeItem('lang');
    // }
  }, [langs]);
  useEffect(() => {
    localStorage.setItem("lang", "en-US")

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

    if ("Notification" in window) {
      Notification.requestPermission()
        .then(async function () {
          // console.log(result);
          const token = await test?.getToken(messaging);
          localStorage.setItem("fcmConcord", token);
        })
        .catch(function (err) {
          console.log("Unable to get permission to notify.", err);
        });

    }

    if (isSupported()) {
      navigator?.serviceWorker?.addEventListener("message", (message) => {
        console.log(message, "message")
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
            // if (event?.currentTarget?.data?.url) {
            //   window.location.href = event?.currentTarget?.data?.url;
            // }
          };
        }
      });
    }

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
        {/* <Route exact path="/:page/:page" render={(props) => <Navbar {...props} />} /> */}

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
        <Route
          exact
          path="/:page/:name/:id"
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
        {/* <Route exact path="/:page/:page">
          <FixedRight />
        </Route> */}
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
        <Route
          exact
          path="/:page/:name/:id"
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

          {/*         Privacy And Policy             */}

          <Route exact path="/privacy-policy">
            <PrivacyAndPolicy />
          </Route>

          {/*          Main About Page SubMenu Page             */}

          <Route exact path="/vision-mission">
            <Aboutvisionmission />
          </Route>

          <Route exact path="/health-associates">
            <Abouthealthassociates />
          </Route>

          <Route exact path="/message-from-chairmen">
            <Aboutmessagechairmen />
          </Route>

          <Route exact path="/chairmen-profile">
            <Aboutchairmenprofile />
          </Route>

          {/*          Careers Page              */}

          <Route exact path="/careers">
            <Careers />
          </Route>
          {/*       Careers Inner Page      */}
          <Route exact path="/careers-detail/:job_id">
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

          <Route exact path="/contactus">
            <Contactcontactus />
          </Route>



          {/*          Facilities Page             */}

          <Route exact path="/facilities">
            <Facilities />
          </Route>

          {/*          Facilities SubMenu Page          */}

          <Route exact path="/our-distribution-network">
            <Facilitiesourdistribution />
          </Route>

          <Route exact path="/product">
            <Facilitiesproduct />
          </Route>

          <Route exact path="/quality">
            <Facilitiesquality />
          </Route>

          <Route exact path="/research-and-development">
            <Facilitiesresearchdevrsttime />
          </Route>

          <Route exact path="/warhouse">
            <Facilitieswarhouse />
          </Route>

          {/*          GlobalOperation Page          */}

          <Route exact path="/global-operation">
            <GlobalOperations />
          </Route>

          {/*          Media Page          */}

          <Route exact path="/media">
            <Media />
          </Route>

          {/*          Media Submenu Page          */}

          <Route exact path="/milestones">
            <Mediamilestone />
          </Route>

          <Route
            exact path="/photo"
            render={(props) => <Mediaphoto {...props} />}
          />


          <Route exact path="/social-media-post">
            <Mediasocialmedia />
          </Route>

          <Route exact path="/social-responsiblities">
            <Media_socialresponsiblities />
          </Route>

          <Route exact path="/video">
            <Mediavideo />
          </Route>

          <Route exact path="/journal">
            <MediaJournal/>
          </Route>

          <Route exact path="/journal-guide">
            <MediaJournalGuide/>
          </Route>

          <Route
            exact path="/events"
            render={(props) => <MediaEvents {...props} />}
          />
          {/* <Route exact path="/media/events">
          <MediaEvents />
        </Route> */}

          {/*          Products Page          */}

          <Route exact path="/products">
            <Products />
          </Route>

          {/*          Products Submenu Page          */}
          <Route
            exact path="/by-generic-name"
            render={(props) => <Productsbygeneric {...props} />}
          />


          <Route
            exact path="/by-trade-name"
            render={(props) => <Productsbytrade {...props} />}
          />


          <Route
            exact path="/first-time-launching"
            render={(props) => <Productsfirsttime {...props} />}
          />

          <Route
            exact path="/by-therapeutic-class"
            render={(props) => <Productstherapeutic {...props} />}
          />



          {/*          Products Inner Pages         */}

          {/* All Inner Page */}

          <Route
            path="/prod-details/:name"
            render={(props) => <ProductallDetails {...props} />}
          />
          {/* <Route
            path="/prod-details/:name/:id"
            render={(props) => <ProductallDetails {...props} />}
          /> */}
          {/* <Route
          path="/prod-details/:prodname"
          render={(props) => <ProductallDetails {...props} />}
        /> */}
          {/* <Route exact path="/prod-details">
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
          {/* <Route path="*">
            <Error404 />
          </Route> */}

          <Route
            path="*"
            render={(props) =>
              props.location.pathname !== "/reset-password" && (
                <Error404 />
              )
            }
          />
        </Switch>


        {/*          Footer             */}

        <Route
          exact
          path="/:page"
          render={(props) =>
            props.location.pathname !== "/depotmanager-dashboard" &&
            props.location.pathname !== "/depotmanager-dashboard/" &&
            props.location.pathname !== "/director-dashboard" &&
            props.location.pathname !== "/director-dashboard/"
            && (
              //  && props.location.pathname !== '/reset-password'
              <Footer />
            )
          }
        />
        <Route
          exact
          path="/:page/:name/:id"
          render={(props) =>
            props.location.pathname !== "/depotmanager-dashboard" &&
            props.location.pathname !== "/depotmanager-dashboard/" &&
            props.location.pathname !== "/director-dashboard" &&
            props.location.pathname !== "/director-dashboard/"
            && (
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
