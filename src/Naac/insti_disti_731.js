
import React from "react";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../FacilitiesPageContainers/styles.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class powerandbackup extends React.Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };
    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };


    InstiBackupTitle = {
        instanceID: "InstiBackupTitle",
        title: "7.3.1 INSTITUTIONAL DISTINCTIVENESS"
    };
    maincontent = {
        instanceID: "maincontent",
        title: "Climate change, energy security and environmental pollution have evolved as major challenges globally. The increase in Green House Gas (GHG) emissions aggravates it further.  The main composition of GHG is CO2 and the major source for man-made CO2 emission is the burning of fossil fuel, predominantly by thermal power plants.  Thermal power plants generate 70% of electricity utilized in India. The challenge is to replace the fuels which emits GHG with clean sources like solar energy. The pronounced need to check global warming calls for energy efficiency enhancement; and adoption of emission free, eco-friendly energy generation technologies. The college has dedicated a lot of effort in this direction and here are some of its efforts."
    };


    WheelTitle1 = {
        instanceID: "WheelTitle1",
        title: "• Wheeling to the Grid"
    };
    wheelcontent = {
        instanceID: "wheelcontent",
        title: "Three grid-connected solar power plants located in the campus generates a combined output power of 280kWp. Thus, the college prevents the emission of 420 tons of carbon dioxide from ending up in the atmosphere every year. In 2018-19 with the average consumption of 1891 kWh per day and average power generation of 1200kWh per day, 63% of the total power requirements were satisfied with the solar power plant."
    };
    wheelgrid1 = {
        instanceID: "wheelgrid1",
        image: "naac/C7_data/ph_731/wheelgrid1.png",
        width: "55%"
    }; 
    wheelgrid2 = {
        instanceID: "wheelgrid2",
        image: "naac/C7_data/ph_731/wheelgrid2.png",
        width: "55%"
    }; 
    
    RainTitle1 = {
        instanceID: "RainTitle1",
        title: "• Rain Water Harvesting"
    };
    raincontent = {
        instanceID: "raincontent",
        title: "The rain water harvesting system located in the campus ensures round-the-clock availability of water even during the dry season. This is facilitated in two ways. The rain water obtained from the main-auditorium roof after filtration is diverted to a well. Rainfall collected from other rooftops is also used to recharge the groundwater."
    };
    rainimage1 = {
        instanceID: "rainimage1",
        image: "naac/C7_data/ph_731/rain1.png",
        width: "55%"
    }; 
    rainimage2 = {
        instanceID: "rainimage2",
        image: "naac/C7_data/ph_731/rain2.png",
        width: "55%"
    }; 
    rainimage3= {
        instanceID: "rainimage3",
        image: "naac/C7_data/ph_731/rain3.png",
        width: "55%"
    }; 
    rainimage4 = {
        instanceID: "rainimage4",
        image: "naac/C7_data/ph_731/rain4.png",
        width: "55%"
    }; 

    sewageTitle1 = {
        instanceID: "sewageTitle1",
        title: "• Sewage Treatment and Recycling Waste"
    };
    sewagecontent = {
        instanceID: "sewagecontent",
        title: "The sewage treatment plant plays a key role in recycling the water from the whole campus. This water can now be reused for watering inside the campus. The secondary output from the treatment plant, the sludge, is used as a fertilizer in the campus for organic farming."
    };
    sewageimage1 = {
        instanceID: "sewageimage1",
        image: "naac/C7_data/ph_731/sewage1.png",
        width: "55%"
    }; 
    sewageimage2 = {
        instanceID: "sewageimage2",
        image: "naac/C7_data/ph_731/sewage2.png",
        width: "55%"
    };  
    
    wasteTitle1 = {
        instanceID: "sewageTitle1",
        title: "• Each Waste to its Place"
    };
    wastecontent = {
        instanceID: "wastecontent",
        title: "Special care is taken to segregate waste generated inside the campus according to its nature. Separate waste bins are kept aside for paper, plastic, metallic and organic matter. The non-biodegradable plastic and metallic wastes are transported and handled by an authorized recycler- Kerala Environ Infrastructure Limited."
    };
    wasteimage1 = {
        instanceID: "wasteimage1",
        image: "naac/C7_data/ph_731/waste1.png",
        width: "55%"
    }; 
    wasteimage2 = {
        instanceID: "wasteimage2",
        image: "naac/C7_data/ph_731/waste2.png",
        width: "55%"
    };   
    wasteimage3 = {
        instanceID: "wasteimage3",
        image: "naac/C7_data/ph_731/waste3.png",
        width: "55%"
    };   

    zeroTitle1 = {
        instanceID: "zeroTitle1",
        title: "• Promoting Zero-Emission Vehicles"
    };
    zerocontent = {
        instanceID: "zerocontent",
        title: "Battery operated two-wheelers can be recharged free of cost inside the campus."
    };
    zeroimage1 = {
        instanceID: "zeroimage1",
        image: "naac/C7_data/ph_731/zeroem1.png",
        width: "55%"
    }; 
    zeroimage2 = {
        instanceID: "zeroimage2",
        image: "naac/C7_data/ph_731/zeroem2.png",
        width: "55%"
    };  


    energyTitle1 = {
        instanceID: "energyTitle1",
        title: "• Energy Saving Measures"
    };
    energycontent = {
        instanceID: "zerocontent",
        title: "Hundreds of LED sources of illumination ensure that the power consumption inside the campus is kept to a minimum. LED based street lamps, tube lights and bulbs are strategically placed within the campus."
    };
    energyimage1 = {
        instanceID: "energyimage1",
        image: "naac/C7_data/ph_731/energysav1.png",
        width: "55%"
    }; 
    energyimage2 = {
        instanceID: "energyimage2",
        image: "naac/C7_data/ph_731/energysav2.png",
        width: "55%"
    };   

    greenTitle1 = {
        instanceID: "greenTitle1",
        title: "• Green Protocol"
    };
    greencontent = {
        instanceID: "greencontent",
        title: "The Total Campus Solution software for the faculty of the college minimises the use of paper in the campus. Attendance entry of students, sessional mark entry and leave availed by the faculty are some of the features the provided by the software."
    };
    greenimage1 = {
        instanceID: "greenimage1",
        image: "naac/C7_data/ph_731/greenprot1.png",
        width: "55%"
    }; 
    greenimage2 = {
        instanceID: "greenimage2",
        image: "naac/C7_data/ph_731/greenprot2.png",
        width: "55%"
    };   
    greenimage3 = {
        instanceID: "greenimage3",
        image: "naac/C7_data/ph_731/greenprot3.png",
        width: "55%"
    };      
    
    

    greencovTitle1 = {
        instanceID: "greencovTitle1",
        title: "• Green Cover"
    };
    greencovcontent = {
        instanceID: "greencovcontent",
        title: "A wide variety of trees, shrubs and plants present throughout the 26 acre campus is one of the most striking features the college has to offer."
    };
    greencovcontent1 = {
        instanceID: "greencovcontent1",
        title: "We, at VJCET, march ahead to a cleaner, greener built environment through adoption of green building principles by promoting the concepts of solar energy, rainwater harvesting, waste water treatment and water reuse."
    };
    greencovimage1 = {
        instanceID: "greencovimage1",
        image: "naac/C7_data/ph_731/greencov1.png",
        width: "55%"
    }; 
    greencovimage2 = {
        instanceID: "greencovimage2",
        image: "naac/C7_data/ph_731/greencov2.png",
        width: "55%"
    };   
    greencovimage3 = {
        instanceID: "greencovimage3",
        image: "naac/C7_data/ph_731/greencov3.png",
        width: "55%"
    };      
    
    greencovimage4= {
        instanceID: "greencovimage4",
        image: "naac/C7_data/ph_731/greencov4.png",
        width: "55%"
    };  




    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <div className="contain">
                    <HeadingOne data={this.InstiBackupTitle}/>

                    <div className="bodyContainer">
                       {/* <BodyOneJustified data={this.maincontent} />*/}
                        <HeadingTwo data={this.WheelTitle1}/>
                        <BodyOneJustified data={this.wheelcontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wheelgrid1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>50 kWp Solar Power Plant located at C Block</p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wheelgrid2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>200kWp Solar Power Plant located at D Block</p>
     

                        <HeadingTwo data={this.RainTitle1}/>
                        <BodyOneJustified data={this.raincontent} />

                       <p style={{textAlign:"center"}}><ImageOne data={this.rainimage1}/></p>
                             <p style={{textAlign:"center"}}><ImageOne data={this.rainimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Rain Water Harvesting System</p>
    
                        <p style={{textAlign:"center"}}><ImageOne data={this.rainimage3}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Open Water Pond: (Outside view)</p>

                        <p style={{textAlign:"center"}}><ImageOne data={this.rainimage4}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Open Water Pond: (Inside view)</p>
                                                            

                        <HeadingTwo data={this.sewageTitle1}/>
                        <BodyOneJustified data={this.sewagecontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.sewageimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Sewage Treatment Plant</p> 
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.sewageimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Overhead pumps located on the top floor</p>
                                 


                        <HeadingTwo data={this.wasteTitle1}/>
                        <BodyOneJustified data={this.wastecontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wasteimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Waste Segregation Bins</p>
                        
                        <p style={{textAlign:"center"}}><ImageOne data={this.wasteimage2}/></p>                        
                                 
                        <p style={{textAlign:"center"}}><ImageOne data={this.wasteimage3}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Incinerator located at campus</p>
                       


                        <HeadingTwo data={this.zeroTitle1}/>
                        <BodyOneJustified data={this.zerocontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.zeroimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Electric Vehicle Recharging Point for two-wheelers</p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.zeroimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Recharging point (Front view)</p>
                           


                        <HeadingTwo data={this.energyTitle1}/>
                        <BodyOneJustified data={this.energycontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.energyimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Use of LED Bulbs</p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.energyimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Use of LED Tube lights</p>
                          


                        <HeadingTwo data={this.greenTitle1}/>
                        <BodyOneJustified data={this.greencontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.greenimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Leave of absence can be availed via Total Campus Solution software</p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.greenimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Faculty leave report using Total Campus Solution software</p>
                        
                        <p style={{textAlign:"center"}}><ImageOne data={this.greenimage3}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Sessional Mark entry Sessional Mark entry using Total Campus Solution software</p>
                        

                        <HeadingTwo data={this.greencovTitle1}/>
                        <BodyOneJustified data={this.greencovcontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.greencovimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Green Cover in the campus</p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.greencovimage2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Route to the college office</p>
                        
                        <p style={{textAlign:"center"}}><ImageOne data={this.greencovimage3}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Towards the cafeteria</p>
                        
                        <p style={{textAlign:"center"}}><ImageOne data={this.greencovimage4}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Towards the main entrance to the college </p>
                        
                        <BodyOneJustified data={this.greencovcontent1} />
             
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default powerandbackup;