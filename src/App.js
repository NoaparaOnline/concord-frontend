import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Footer, FixedRight} from "./components";
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
import About_message_chairmen from "./Pages/About_message_chairmen";
import About_vision_mission from "./Pages/About_vision_mission";
import Contact_contactus from "./Pages/Contact_contactus";
import Contact_ourdistribution from "./Pages/Contact_ourdistribution";
import Facilities_ourdistribution from "./Pages/Facilities_ourdistribution";
import Facilities_product from "./Pages/Facilities_product";
import Facilities_quality from "./Pages/Facilities_quality";
import Facilities_researchdevrsttime from "./Pages/Facilities_researchdevrsttime";
import Facilities_warhouse from "./Pages/Facilities_warhouse";
import Media_milestone from "./Pages/Media_milestone";
import Media_photo from "./Pages/Media_photo";
import Media_socialmedia from "./Pages/Media_socialmedia";
import Media_socialresponsiblities from "./Pages/Media_socialresponsiblities";
import Media_video from "./Pages/Media_video";
import Products_bygeneric from "./Pages/Products_bygeneric";
import Products_bytrade from "./Pages/Products_bytrade";
import Products_firsttime from "./Pages/Products_firsttime";
import Products_therapeutic from "./Pages/Products_therapeutic";

function App() {


  return (
    <div className="App">
      <Router>

        {/*          Root Page             */}

        <Route exact path="/">
          <Navbar />
        </Route>

        {/*          Front Home Page             */}


        <Route exact path="/">
          <Home />
        </Route>

        {/*          Navbar             */}

        <Route exact path="/:page">
          <Navbar />
        </Route>

        {/*          Home Page             */}

        <Route exact path="/home">
          <Home />
        </Route>
        {/*          FixedRight             */}

        <Route exact path="/:page">
          <FixedRight/>
        </Route>

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
          <About_vision_mission />
        </Route>

        <Route exact path="/about_message_chairmen">
          <About_message_chairmen />
        </Route>

        {/*          Careers Page              */}

        <Route exact path="/careers">
          <Careers />
        </Route>

        {/*          Contact Page             */}

        <Route exact path="/contact">
          <Contact />
        </Route>

        {/*          Contact Page SubMenu Page             */}

        <Route exact path="/contact_contactus">
          <Contact_contactus />
        </Route>

        <Route exact path="/contact_ourdistribution">
          <Contact_ourdistribution />
        </Route>

        {/*          Facilities Page             */}

        <Route exact path="/facilities">
          <Facilities />
        </Route>

        {/*          Facilities SubMenu Page          */}

        <Route exact path="/facilities_ourdistribution">
          <Facilities_ourdistribution />
        </Route>

        <Route exact path="/facilities_product">
          <Facilities_product />
        </Route>

        <Route exact path="/facilities_quality">
          <Facilities_quality />
        </Route>

        <Route exact path="/facilities_researchdevrsttime">
          <Facilities_researchdevrsttime />
        </Route>

        <Route exact path="/facilities_warhouse">
          <Facilities_warhouse />
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
          <Media_milestone />
        </Route>

        <Route exact path="/media_photo">
          <Media_photo />
        </Route>

        <Route exact path="/media_socialmedia">
          <Media_socialmedia />
        </Route>

        <Route exact path="/media_socialresponsiblities">
          <Media_socialresponsiblities />
        </Route>

        <Route exact path="/media_video">
          <Media_video />
        </Route>


        {/*          Products Page          */}

        <Route exact path="/products">
          <Products />
        </Route>


        {/*          Products Submenu Page          */}

        <Route exact path="/products_bygeneric">
          <Products_bygeneric />
        </Route>

        <Route exact path="/products_bytrade">
          <Products_bytrade />
        </Route>

        <Route exact path="/products_firsttime">
          <Products_firsttime />
        </Route>

        <Route exact path="/products_therapeutic">
          <Products_therapeutic />
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

        <Route exact path="/:page">
          <Footer />
        </Route>
        <Route exact path="/">
          <Footer />
        </Route>

      </Router>
    </div>
  );
}

export default App;
