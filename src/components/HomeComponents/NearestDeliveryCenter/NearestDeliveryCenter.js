import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./NearestDeliveryCenter.css";
import { useTranslation } from "react-i18next";
const NearestDeliveryCenter = ({ heading }) => {
  const { t } = useTranslation("common");
  const cards = [
    {
      id: 0,
      head: t("nearestdeliverycenter.card1.area_text"),
      name: t("nearestdeliverycenter.card1.name_text"),
      position: t("nearestdeliverycenter.card1.position_text"),
      num: t("nearestdeliverycenter.card1.num_text"),
      mailname: "cpl.khairul@gmail.com",
      mapname2: t("nearestdeliverycenter.card1.map_name2"),
      mapname: t("nearestdeliverycenter.card1.map_name"),
      maillink: "mailto:cpl.khairul@gmail.com",
      maplink:
        "https://www.google.com/maps/place/23%C2%B044'08.9%22N+90%C2%B024'40.3%22E/@23.7358086,90.4111937,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d23.7358086!4d90.4111937",
    },
    {
      id: 1,
      head: t("nearestdeliverycenter.card2.area_text"),
      name: t("nearestdeliverycenter.card2.name_text"),
      position: t("nearestdeliverycenter.card2.position_text"),
      num: t("nearestdeliverycenter.card2.num_text"),
      mailname: "cpldhakadepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card2.map_name2"),
      mapname: t("nearestdeliverycenter.card2.map_name"),
      maillink: "mailto:cpldhakadepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.73580856085446,+90.41119374454907?sa=X&#038;ved=2ahUKEwjhi_7VtrDyAhVk_7sIHSK1B3EQ8gF6BAgCEAE",
    },
    {
      id: 2,
      head: t("nearestdeliverycenter.card3.area_text"),
      name: t("nearestdeliverycenter.card3.name_text"),
      position: t("nearestdeliverycenter.card3.position_text"),
      num: t("nearestdeliverycenter.card3.num_text"),
      mailname: "cplbarisaldepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card3.map_name2"),
      mapname: t("nearestdeliverycenter.card3.map_name"),
      maillink: "mailto:cpl.khairul@gmail.com",
      maplink:
        "https://www.google.com/maps/place/22%C2%B041'27.8%22N+90%C2%B021'38.9%22E/@22.6910447,90.3608011,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d22.6910447!4d90.3608011",
    },
    {
      id: 3,
      head: t("nearestdeliverycenter.card4.area_text"),
      name: t("nearestdeliverycenter.card4.name_text"),
      position: t("nearestdeliverycenter.card4.position_text"),
      num: t("nearestdeliverycenter.card4.num_text"),
      mailname: "cpljessore@gmail.com",
      mapname2: t("nearestdeliverycenter.card4.map_name2"),
      mapname: t("nearestdeliverycenter.card4.map_name"),
      maillink: "mailto:cpljessore@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.169046843973696,+89.21000729407186?sa=X&#038;ved=2ahUKEwiv7dm0t7DyAhWhhf0HHXQrD78Q8gF6BAgCEAE",
    },
    {
      id: 4,
      head: t("nearestdeliverycenter.card5.area_text"),
      name: t("nearestdeliverycenter.card5.name_text"),
      position: t("nearestdeliverycenter.card5.position_text"),
      num: t("nearestdeliverycenter.card5.num_text"),
      mailname: "cplcomilladepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card5.map_name2"),
      mapname: t("nearestdeliverycenter.card5.map_name"),
      maillink: "mailto:cplcomilladepot@gmail.com",
      maplink:
        "https://www.google.com/search?q=23.460523140150503%2C+91.18057482136773&#038;rlz=1C1GCEU_enPK926PK926&#038;oq=23.460523140150503%2C+91.18057482136773&#038;aqs=chrome..69i57.438j0j4&#038;sourceid=chrome&#038;ie=UTF-8",
    },
    {
      id: 5,
      head: t("nearestdeliverycenter.card6.area_text"),
      name: t("nearestdeliverycenter.card6.name_text"),
      position: t("nearestdeliverycenter.card6.position_text"),
      num: t("nearestdeliverycenter.card6.num_text"),
      mailname: "cplnoakhali@gmail.com",
      mapname2: t("nearestdeliverycenter.card6.map_name2"),
      mapname: t("nearestdeliverycenter.card6.map_name"),
      maillink: "mailto:cplnoakhali@gmail.com",
      maplink:
        "https://www.google.com/maps/search/22.874123689375438,+91.09165245139353?sa=X&#038;ved=2ahUKEwjf2MHAuLDyAhXQgf0HHdqfBi8Q8gF6BAgCEAE",
    },
    {
      id: 6,
      head: t("nearestdeliverycenter.card7.area_text"),
      name: t("nearestdeliverycenter.card7.name_text"),
      position: t("nearestdeliverycenter.card7.position_text"),
      num: t("nearestdeliverycenter.card7.num_text"),
      mailname: "cplmymenshinghdepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card7.map_name2"),
      mapname: t("nearestdeliverycenter.card7.map_name"),
      maillink: "mailto:cplmymenshinghdepot@.com",
      maplink:
        "https://www.google.com/maps/search/24.73204300473984,+90.40876116281954?sa=X&#038;ved=2ahUKEwjby9iDubDyAhVvgP0HHWRdBhgQ8gF6BAgCEAE",
    },
    {
      id: 7,
      head: t("nearestdeliverycenter.card8.area_text"),
      name: t("nearestdeliverycenter.card8.name_text"),
      position: t("nearestdeliverycenter.card8.position_text"),
      num: t("nearestdeliverycenter.card8.num_text"),
      mailname: "cplchittagongdepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card8.map_name2"),
      mapname: t("nearestdeliverycenter.card8.map_name"),
      maillink: "mailto:cplchittagongdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/22.372134077059318,+91.84570103033818?sa=X&#038;ved=2ahUKEwiV7-CoubDyAhV0gf0HHYqIAmQQ8gF6BAgCEAE",
    },
    {
      id: 8,
      head: t("nearestdeliverycenter.card9.area_text"),
      name: t("nearestdeliverycenter.card9.name_text"),
      position: t("nearestdeliverycenter.card9.position_text"),
      num: t("nearestdeliverycenter.card9.num_text"),
      mailname: "cplrangpurdepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card9.map_name2"),
      mapname: t("nearestdeliverycenter.card9.map_name"),
      maillink: "mailto:cplrangpurdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/25.757301352034393,+89.23122977681142?sa=X&#038;ved=2ahUKEwjx7tnRubDyAhVVgf0HHRCZAOMQ8gF6BAgCEAE",
    },
    {
      id: 9,
      head: t("nearestdeliverycenter.card10.area_text"),
      name: t("nearestdeliverycenter.card10.name_text"),
      position: t("nearestdeliverycenter.card10.position_text"),
      num: t("nearestdeliverycenter.card10.num_text"),
      mailname: "cplrajshahi18@gmail.com",
      mapname2: t("nearestdeliverycenter.card10.map_name2"),
      mapname: t("nearestdeliverycenter.card10.map_name"),
      maillink: "mailto:cplrajshahi18@gmail.com",
      maplink:
        "https://www.google.com/maps/search/24.380948395991037,+88.59667417394552?sa=X&#038;ved=2ahUKEwiO2omXurDyAhXtgf0HHTPpCH8Q8gF6BAgCEAE",
    },
    {
      id: 10,
      head: t("nearestdeliverycenter.card11.area_text"),
      name: t("nearestdeliverycenter.card11.name_text"),
      position: t("nearestdeliverycenter.card11.position_text"),
      num: t("nearestdeliverycenter.card11.num_text"),
      mailname: "cpljhenaidahdepot@gmail.com",
      mapname2: t("nearestdeliverycenter.card11.map_name2"),
      mapname: t("nearestdeliverycenter.card11.map_name"),
      maillink: "mailto:cpljhenaidahdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.55209025693937,+89.17544639539432?sa=X&#038;ved=2ahUKEwj4lue9urDyAhWWhf0HHUMcASwQ8gF6BAgCEAE",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(0);
  const [ob, setOb] = useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value, "Testing Event Val");
    const filtererd = cards.filter(
      (item) => item.id === Number(event.target.value)
    );

    if (filtererd.length > 0) {
      setOb(filtererd[0]);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 ">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="siz text-left " style={{ color: "#0066b3" }}>
                  {t("nearestdeliverycenter.text.nearest_text")} <br />{" "}
                  {t("nearestdeliverycenter.text.delivery_center")}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p
                  style={{
                    color: "#565656",
                    fontSize: "20px",
                    marginBottom: "15px",
                    lineHeight: 1.5,
                  }}
                >
                  {t("nearestdeliverycenter.text.desc_text")}
                </p>
                <label
                  htmlFor="area"
                  style={{
                    color: "#565656",
                    fontSize: "20px",
                    marginBottom: "15px",
                    lineHeight: 1.5,
                  }}
                >
                  {t("nearestdeliverycenter.text.select_are_text") + ":"} &nbsp;
                </label>
                <select
                  name="area"
                  value={selectedValue}
                  id="area"
                  onChange={handleChange}
                >
                  <option value="0">
                    {t("nearestdeliverycenter.text.central_text")}
                  </option>
                  <option value="1">
                    {t("nearestdeliverycenter.text.dhaka_text")}
                  </option>
                  <option value="2">
                    {t("nearestdeliverycenter.text.barisal_text")}
                  </option>
                  <option value="3">
                    {t("nearestdeliverycenter.text.jessore_text")}
                  </option>
                  <option value="4">
                    {t("nearestdeliverycenter.text.comilla_text")}
                  </option>
                  <option value="5">
                    {t("nearestdeliverycenter.text.noakhali_text")}
                  </option>
                  <option value="6">
                    {t("nearestdeliverycenter.text.mymenshingh_text")}
                  </option>
                  <option value="7">
                    {t("nearestdeliverycenter.text.chittagong_text")}
                  </option>
                  <option value="8">
                    {t("nearestdeliverycenter.text.rangpur_text")}
                  </option>
                  <option value="9">
                    {t("nearestdeliverycenter.text.rajshahi_text")}
                  </option>
                  <option value="10">
                    {t("nearestdeliverycenter.text.jhenaidah_text")}
                  </option>
                </select>
                {ob && (
                  <div className="card col-lg-10 mb-5 p-3">
                    <div
                      className="text-left"
                      style={{ color: "#0066b3", minHeight: "240px" }}
                    >
                      <div
                        style={{
                          borderBottom: "1px solid #0066b3",
                          fontSize: "24px",
                          fontWeight: "500",
                        }}
                      >
                        {ob.head}
                      </div>

                      <div className="mt-2">
                        <div className="mt-2">
                          <i className="fa fa-user" aria-hidden="true"></i>{" "}
                          <span style={{ color: "#565656", fontSize: "19px" }}>
                            {ob.name}
                          </span>
                        </div>
                        <div className="mt-2">
                          <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                          <span
                            style={{
                              color: "#565656",
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                          >
                            {ob.position}
                          </span>
                        </div>
                        <div className="mt-2">
                          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                          <span
                            style={{
                              color: "#565656",
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                          >
                            {ob.num}
                          </span>
                        </div>
                        <div className="mt-2">
                          <a
                            href={ob.maillink}
                            style={{ textDecoration: "none", color: "#0066b3" }}
                          >
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <span>{ob.mailname}</span>
                          </a>
                        </div>

                        <div className="mt-2">
                          <a
                            href={ob.maplink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#0066b3" }}
                          >
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                          
                            <span>{ob.mapname}</span>
                          </a>
                        </div>
                        <div className="my-2">
                          <a
                            href={ob.maplink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#0066b3" }}
                          >
                            <i className="fa fa-map" aria-hidden="true"></i>
                         
                            <span>{ob.mapname2}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p
                  className="typography_text text-justify"
                  style={{
                    color: "#565656",
                    fontSize: "20px",
                    marginBottom: "15px",
                    lineHeight: 1.5,
                  }}
                >
                  {t("nearestdeliverycenter.text.call_at_number")}
                </p>
                <span style={{ color: "#0066b3" }}>
                  <i className="fa fa-phone"></i>
                </span>
                <span
                  className="typography_text"
                  style={{
                    color: "#565656",
                    fontSize: "18px",
                    marginBottom: "15px",
                    lineHeight: 1.5,
                  }}
                >
                    {t("nearestdeliverycenter.text.number")}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <video autoPlay muted loop width="100%" height="100%">
              <source
                src="https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/video.mp4"
                type="video/mp4"
              />
               {t("nearestdeliverycenter.text.no_support_video")}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearestDeliveryCenter;
