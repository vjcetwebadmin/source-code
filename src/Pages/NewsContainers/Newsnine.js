import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
//import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

class Newsnine extends React.Component {
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


    NewsTitle = {
        instanceID: "NewsTitle",
        title: "College Timing"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: "College Timing on 29th and 30th (NAAC visiting days)"
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/csi.jpg",
        width: "80%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/Registernow.jpg",
        width: "20%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                   
                   <HeadingOne data={this.NewsTitle} />
                    <table id="tableformat" >
                    <tbody>
                        <tr><th colSpan="3">College Timing</th></tr>
                            <tr><td><b>Time</b></td><td><b>Period</b></td><td><b>Duration</b></td></tr>
                            <tr><td>8.55 to 9.50</td><td>1</td><td>55 Min</td></tr>
                            <tr><td>9.50 to 10.45</td><td>2</td><td>55 Min</td></tr>
                            <tr><td colSpan="3" style={{textAlign:"center"}}>Interval 10 Min</td></tr>
                            <tr><td>10.55 to 11.50</td><td>3</td><td>55 Min</td></tr>
                            <tr><td>11.50 to 12.45</td><td>4</td><td>55 Min</td></tr>
                            <tr><td colSpan="3"  style={{textAlign:"center"}}>Noon Interval 55 Min</td></tr>
                            <tr><td>1.40 to 2.30</td><td>5</td><td>50 Min</td></tr>
                            <tr><td>2.30 to 3.20</td><td>6</td><td>50 Min</td></tr>
                            <tr><td colSpan="3"  style={{textAlign:"center"}}>Interval 5 Min</td></tr>
                            <tr><td>3.25 to 4.15</td><td>7</td><td>50 Min</td></tr>

                            
                    </tbody>
                    </table>


                   
                {/*
                 
                  <iframe src="https://vjcet.org/downloads/news/LABINSTRUCTOR.pdf" width="100%" zoom="80%" height="850" title="Campus Map" align="center"></iframe>
                */}
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsnine;