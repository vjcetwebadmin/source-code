import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import "../Components/Images/gallery.css";


class artsfest extends React.Component {
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


    ArtsfestTitle = {
        instanceID: "ArtsfestTitle",
        title: "Drishya 2019"
    };
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "DRISHYA"
      };
      ProfileDescriptionOne = {
        instanceID: "ProfileDescriptionOne",
        title:
          "Viswajyothi College of Engineering and Technology celebrates Drishya, the arts fest preferably every year. It promotes an awareness of the arts across the student community recognizing and supporting all feasible forms of creative expressions such as music, dance, creative writing and other virtual arts. Every engineering undergraduates as an individual is an artist who can use his/her potentials to entertain, create or build. Some may do it with a brush, a few with pen when others perform feats of entertainment. Drishya provides a common platform to showcase these intense modes of individualisms through inter-house competitions. Normally a cine Artist inaugurate the fest and there after the organizing committee members have a hectic time in coordinating different events due to the high spirit of students. Drishya definitely provides a welcome diversion highlighting our students creative drive and aspirations."
      };
    
    EventContent1 = {
        instanceID: " EventContent1",
        title: "Students Council Election was held on 10th August 2018. Dr.Anoop CK (Professor Civil Engineering Department) was the election returning officer. Twenty one student council members were elected."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "Oath taking ceremony of student’s council (2018-19) is conducted on 14th August 2018 at PTC seminar Hall in the presence of Principal. "
    }
  
    
   

    render() {
        return (
            <React.Fragment>
                
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.ProfileHeading} />
                 <Bodythree data={this.ProfileDescriptionOne} /> 
                 <br></br>
               <div class="gallery">                    
                    <iframe src="https://vjcet.org/downloads/gallery/drishya.html" width="100%" height="500" title="Drishya" ></iframe>
                </div>        
               
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default artsfest;