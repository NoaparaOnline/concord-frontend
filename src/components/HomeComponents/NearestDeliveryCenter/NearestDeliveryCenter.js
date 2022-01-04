import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './NearestDeliveryCenter.css';
const NearestDeliveryCenter = ({heading}) => {
    const cards = [
        {
          id: 0,
          head: "Central",
          name: "Md.Khairul Alam",
          position: "Head of Distribution",
          num: "01991146267",
          mailname: "cpl.khairul@gmail.com",
          mapname2:'Google Map',
          mapname: "35 Bijoy Nagar dhaka-1000.",
          maillink: "mailto:cpl.khairul@gmail.com",
          maplink:
            "https://www.google.com/maps/place/23%C2%B044'08.9%22N+90%C2%B024'40.3%22E/@23.7358086,90.4111937,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d23.7358086!4d90.4111937",
        },
        {
          id: 1,
          head: "Dhaka",
          name: "Md. Sabbir Hossain",
          position: "DIC- Executive",
          num: "01991145305",
          mailname: "cpldhakadepot@gmail.com",
          mapname2:'Google Map',
          mapname: "35 Bijoy Nagar dhaka-1000.",
          maillink: "mailto:cpldhakadepot@gmail.com",
          maplink:
            "https://www.google.com/maps/search/23.73580856085446,+90.41119374454907?sa=X&#038;ved=2ahUKEwjhi_7VtrDyAhVk_7sIHSK1B3EQ8gF6BAgCEAE",
        },
        {
          id: 2,
          head: "Barisal",
          name: "Md. Saidur Rahman Rimon",
          position: "DIC- Executive",
          num: "01991145334",
          mailname: "cplbarisaldepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd.D/S Tower, 1st floor, Shahid Altaf Memorial Girls School Road,South Alekanda, Barishal",
          maillink: "mailto:cpl.khairul@gmail.com",
          maplink:
            "https://www.google.com/maps/place/22%C2%B041'27.8%22N+90%C2%B021'38.9%22E/@22.6910447,90.3608011,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d22.6910447!4d90.3608011",
        },
        {
          id: 3,
          head: "Jessore",
          name: "Md. Iqbal Mahamud",
          position: "DIC-Executive",
          num: "01991145318",
          mailname: "cpljessore@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd,Naznin Vila 1/B Ghop Center Road. Jessore",
          maillink: "mailto:cpljessore@gmail.com",
          maplink:
            "https://www.google.com/maps/search/23.169046843973696,+89.21000729407186?sa=X&#038;ved=2ahUKEwiv7dm0t7DyAhWhhf0HHXQrD78Q8gF6BAgCEAE",
        },
        {
          id: 4,
          head: "Comilla",
          name: "Md. Sariful Islam",
          position: "DIC-Executive",
          num: "01991145365",
          mailname: "cplcomilladepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd.Nahar Villa, 447-Nozrul Avenue Kandir Par, Cumilla",
          maillink: "mailto:cplcomilladepot@gmail.com",
          maplink:
            "https://www.google.com/search?q=23.460523140150503%2C+91.18057482136773&#038;rlz=1C1GCEU_enPK926PK926&#038;oq=23.460523140150503%2C+91.18057482136773&#038;aqs=chrome..69i57.438j0j4&#038;sourceid=chrome&#038;ie=UTF-8",
        },
        {
          id: 5,
          head: "Noakhali",
          name: "Md. Moniruzzaman",
          position: "DIC-Executive",
          num: "01991145350",
          mailname: "cplnoakhali@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Amena Monjil (1st Floor), Holding No. 247,Shahid Shah Alam Bir Uttam Sarak,Modhusudonpur, Maijdee Court,Noakahli – 3800.",
          maillink: "mailto:cplnoakhali@gmail.com",
          maplink:
            "https://www.google.com/maps/search/22.874123689375438,+91.09165245139353?sa=X&#038;ved=2ahUKEwjf2MHAuLDyAhXQgf0HHdqfBi8Q8gF6BAgCEAE",
        },
        {
          id: 6,
          head: "Mymenshingh",
          name: "Md. Alam Mia",
          position: "DIC-Executive",
          num: "01991145376",
          mailname: "cplmymenshinghdepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd,291 Maskanda, Mymenshingh",
          maillink: "mailto:cplmymenshinghdepot@gmail.com",
          maplink:
            "https://www.google.com/maps/search/24.73204300473984,+90.40876116281954?sa=X&#038;ved=2ahUKEwjby9iDubDyAhVvgP0HHWRdBhgQ8gF6BAgCEAE",
        },
        {
          id: 7,
          head: "Chittagong",
          name: "Md. Baharul Islam",
          position: "DIC-Executive",
          num: "01991145385",
          mailname: "cplchittagongdepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "House No: X-51,Road No:07,Block:A Chandgoan R/A Chittagong Depot",
          maillink: "mailto:cplchittagongdepot@gmail.com",
          maplink:
            "https://www.google.com/maps/search/22.372134077059318,+91.84570103033818?sa=X&#038;ved=2ahUKEwiV7-CoubDyAhV0gf0HHYqIAmQQ8gF6BAgCEAE",
        },
        {
          id: 8,
          head: "Rangpur",
          name: "Md.Asaduzzama",
          position: "DIC-Executive",
          num: "01991145414",
          mailname: "cplrangpurdepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "House No: X-51,Road No:07,Block:A Chandgoan R/A Chittagong Depot",
          maillink: "mailto:cplrangpurdepot@gmail.com",
          maplink:
            "https://www.google.com/maps/search/25.757301352034393,+89.23122977681142?sa=X&#038;ved=2ahUKEwjx7tnRubDyAhVVgf0HHRCZAOMQ8gF6BAgCEAE",
        },
        {
          id: 9,
          head: "Rajshahi",
          name: "Md. Abdul Motin",
          position: "DIC-Executive",
          num: "01991-145401",
          mailname: "cplrajshahi18@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd.House No-115,Sector No-02,Road No-02,Uposhahor Rajshahi.",
          maillink: "mailto:cplrajshahi18@gmail.com",
          maplink:
            "https://www.google.com/maps/search/24.380948395991037,+88.59667417394552?sa=X&#038;ved=2ahUKEwiO2omXurDyAhXtgf0HHTPpCH8Q8gF6BAgCEAE",
        },
        {
          id: 10,
          head: "Jhenaidah",
          name: "Md.Ashraful Isalm",
          position: "DIC-Executive",
          num: "01991-146103",
          mailname: "cpljhenaidahdepot@gmail.com",
          mapname2:'Google Map',
          mapname:
            "Concord Pharmaceuticals Ltd.DR. Sheikh Mohammod Aminul Haque,30 Dukhi Mahmud sorok,Arappur, Jhenaidah. Bus Stand Dhaka Road , Bridze er Pase.",
          maillink: "mailto:cpljhenaidahdepot@gmail.com",
          maplink:
            "https://www.google.com/maps/search/23.55209025693937,+89.17544639539432?sa=X&#038;ved=2ahUKEwj4lue9urDyAhWWhf0HHUMcASwQ8gF6BAgCEAE",
        },
      ];
    
    const [selectedValue, setSelectedValue] = useState(0)
    const [ob, setOb] = useState(null)
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        console.log(event.target.value,"Testing Event Val");
        const filtererd =  cards.filter(item => item.id === Number(event.target.value))

        if(filtererd.length > 0){
            setOb(filtererd[0])
        }
    }
    console.log(ob,"Testing OB")

    return (
        <div>

        <div className="container my-5">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-5 ">
             
            <div className="row">
            <div className="col-lg-12">
             <h1 className="siz text-left " style={{color:'#0066b3'}}>Nearest <br/> Delivery Center</h1>
            </div>    
            </div>
            <div className="row">
            <div className="col-lg-12">
            <p style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>We serve the whole nation by covering entire Bangladesh. You can track the nearest delivery center simply by selecting the area</p>
             <label htmlFor="area" style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>Select Area: &nbsp;</label>
                <select name="area" value={selectedValue} id="area" onChange={handleChange} >
                    <option value="0">Central</option> 
                    <option value="1">Dhaka</option>      
                    <option value="2">Barisal</option>       
                    <option value="3">Jessore</option>
                    <option value="4">Comilla</option>
                    <option value="5">Noakhali</option>
                    <option value="6">Mymenshingh</option>
                    <option value="7">Chittagong</option>
                    <option value="8">Rangpur</option>
                    <option value="9">Rajshahi</option>
                    <option value="10">Jhenaidah</option>
                </select>
                {
                ob && 
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
                            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
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
                            <i className="fa fa-map-marker" aria-hidden="true"></i>{"  "}
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
                            <i className="fa fa-map" aria-hidden="true"></i>{"  "}
                            <span>{ob.mapname2}</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>   
            }

                <p className="typography_text text-justify" style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>For more details please call at our number.</p>
                <span style={{color:'#0066b3'}}><i className="fa fa-phone"></i></span><span className="typography_text"
                style={{color:'#565656',fontSize:'18px',marginBottom:'15px',lineHeight:1.5}}>01991146559</span>
                
            </div>
            
                 
            </div>
             

            </div>
            <div className="col-lg-5">
            <video autoPlay muted loop width="100%" height="100%">
            <source src="https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>             
            </div>
        </div>
        </div>
        </div>
    )
}

export default NearestDeliveryCenter
