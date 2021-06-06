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
        title: "DHRISHYA"
      };
      ProfileDescriptionOne = {
        instanceID: "ProfileDescriptionOne",
        title:
          "Viswajyothi College of Engineering and Technology celebrates Dhrishya, the arts fest preferably every year. It promotes an awareness of the arts across the student community recognizing and supporting all feasible forms of creative expressions such as music, dance, creative writing and other virtual arts. Every engineering undergraduates as an individual is an artist who can use his/her potentials to entertain, create or build. Some may do it with a brush, a few with pen when others perform feats of entertainment. Dhrishya provides a common platform to showcase these intense modes of individualisms through inter-house competitions. Normally a cine Artist inaugurate the fest and there after the organizing committee members have a hectic time in coordinating different events due to the high spirit of students. Dhrishya definitely provides a welcome diversion highlighting our students creative drive and aspirations."
      };
    
    EventContent1 = {
        instanceID: " EventContent1",
        title: "Students Council Election was held on 10th August 2018. Dr.Anoop CK (Professor Civil Engineering Department) was the election returning officer. Twenty one student council members were elected."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "Oath taking ceremony of student’s council (2018-19) is conducted on 14th August 2018 at PTC seminar Hall in the presence of Principal. "
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "Hon’ble Justice Cyriac Joseph inaugurated student’s council (18-19) on 9th October 2018.Students performed various cultural programs as part of the inauguration."
    }
    EventContent4 = {
        instanceID: " EventContent4",
        title: "Annual sports meet is conducted on 15th and 16th February 2019.Mr.Samson (Sub Inspector Muvattupuzha ) was  inaugurated the event in the presence of Manager and Principal."
    }
    EventContent51 = {
        instanceID: " EventContent51",
        title: "National Level Technical Fest (BODHI 2019) was conducted on 20th March and 21st March 2019. Mr. Sreedharan Radhakrishnan Nair (Managing Director,Team Front Line Ltd & Team e-Biz) inaugurated the program. Departments conducted various technical events as part of BODHI’19 and more than 1000 students were participated from other colleges. "
    }
    EventContent52 = {
        instanceID: " EventContent52",
        title: "College arts festival (DRISHYA – 2019) was held on 22nd March and 23rd March 2019.Mr.K.S. Harisankar (Playback Singer) was inaugurated the program. Different cultural competitions were conducted as part of DRISHYA- 2019. Inauguration Ceremony of BODHI’19 and DRISHYA’19 are held on 20th March 2019."
    }
    EventContent6 = {
        instanceID: " EventContent6",
        title: "Inter Collegiate Basket Ball Tournament was conducted on 19th to 21st March 2019.Mr.Sejin Mathew (Indian youth basket ball team caption) inaugurated the event in the presence Principal."
    }
    
   

    render() {
        return (
            <React.Fragment>
                
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.ProfileHeading} />
                 <Bodythree data={this.ProfileDescriptionOne} /> 
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