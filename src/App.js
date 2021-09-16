import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DepotmanagerDashboard from "./Dashboards/depotmanagerDashboard/depotmanagerDashboard";
import directorDashboard from "./Dashboards/directorDashboard/directorDashboard";
function App() {
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

        <Route exact path="/">
          <Navbar />
        </Route>

        {/*          Front Home Page             */}

        <Route exact path="/">
          <Home />
        </Route>

        {/*          Navbar             */}

        {/* <Route exact path="/:page">
          <Navbar />
        </Route> */}

        {/*          Home Page             */}

        <Route exact path="/home">
          <Home />
        </Route>

        {/* Resest Password */}
        {/* <Route path="/reset_password_link/uid=:uid/token=:token" render={(props)=>   <ResetPassword {...props}/>}/> */}
        <Route
          path='/reset-password'
          render={(props) => <ResetPassword {...props} />}
        />

        {/*          FixedRight             */}

        <Route exact path="/">
          <FixedRight />
        </Route>
        {/* <Route exact path="/:page">
          <FixedRight />
        </Route> */}

        {/*          Login Page             */}

        <Route exact path="/login">
          <Login />
        </Route>

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

        {/*          Careers Page              */}

        <Route exact path="/careers">
          <Careers />
        </Route>

        {/* Dashboards */}
        
        <Route exact path="/depotmanager-dashboard" component={DepotmanagerDashboard} />
        <Route exact path="/director-dashboard" component={directorDashboard} />
        
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

        <Route exact path="/products_bygeneric">
          <Productsbygeneric />
        </Route>

        <Route exact path="/products_bytrade">
          <Productsbytrade />
        </Route>

        <Route exact path="/products_firsttime">
          <Productsfirsttime />
        </Route>

        <Route exact path="/products_therapeutic">
          <Productstherapeutic />
        </Route>

        {/*          Products Inner Pages         */}
        <Route exact path="/acedol-tablet">
          <ProductsCardInnerPage />
        </Route>

        {/*          Sitemap Page          */}

        <Route exact path="/sitemap">
          <Sitemap />
        </Route>

        {/*          TeleMedicine          */}

        <Route exact path="/teleMedicine">
          <TeleMedicine />
        </Route>

        {/*          Footer             */}


        {/* <Route exact path="/:page">
          <Footer />
        </Route> */}
        <Route exact path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
