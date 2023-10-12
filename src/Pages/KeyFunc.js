import React from "react";
import HeadingThree from "../Components/Texts/HeadingThree";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class keyfunct extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Key Functionaries"
    };
    PatronTitle = {
        instanceID: "CCCTitle",
        title: "PATRON"
    };

    CCCTitle = {
        instanceID: "CCCTitle",
        title: "MANAGER"
    };
    
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "DIRECTOR"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "PRINCIPAL"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi was established with the aim of imparting quality professional education to aspiring students. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Our Alumni who have been placed at respectable posts in MNCs around the world has done us proud. We have been able to maintain the ties with a number of respectable MNCs which aids our placement.VJCET essentially has excellent infrastructure, ambiance conducive to learning, well equipped laboratories and workshops, comfortable hostels for gents and ladies,state-of-art-library and loads of other facilities.We have been serving the society for the past twenty years and with steady steps, we continue our march forward. We look forward to meeting you at VJCET."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "The Viswajyothi College of Engineering and Technology, established in 2001, offers courses in different fields of Engineering, Business Management and Hotel Management. Rated among the best Engineering Colleges in Kerala, Viswajyothi excels in training students to meet the challenges of future competently through a blend of theoretical knowledge, practical skills and a value-based philosophy of life. Viswajyothi strives to foster a learning environment that encourages creativity, critical thinking, and hands-on experience in research and development. We are committed to imparting not only technical knowledge but also essential life-skills that empower the students to excel in their chosen fields. With its dedicated faculty, state-of-the-art facilities, ample infrastructure, and lush green Campus, Viswajyothi provides a conducive platform for the students to grow up to be the best persons and professionals they can be. Viswajyothi, as the name suggests, is a bright beacon that lights up the lives of the students to be shining examples of competence, confidence and commitment to build a a better tomorrow for themselves and the society at large."
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: "Viswajyothi College of Engineering and Technology (VJCET) stands as a formidable force among Engineering Colleges in Kerala, proudly ranking 13 th in the state for the 2023 batch, a testament to our consistent excellence in pass percentages and academic performance index. In the realm of self-financing colleges, we proudly hold the coveted 3 rd position, a reflection of our unwavering commitment to excellence. This achievement is the result of our exceptional infrastructure, the collaborative spirit of our passionate management, dedicated faculty, committed technical and administrative staff, our inspiring alumni, supportive parents, and the vibrant energy of our students."
    }
    CCCContent3_p2 = {
        instanceID: "CCCContent3",
        title: "At VJCET, our driving force is to shape professionals of exceptional caliber, imbued with integrity, fairness, and deeply rooted human values. With five NBA-accredited Engineering branches and a prestigious NAAC A-grade accreditation, our commitment to quality education is impeccable. The college provides a diverse range of educational programs, offering eight engineering programs in addition to MBA and BHMCT courses. Notably, our institution excels in fostering strong industry- institute interactions and boasts an Innovation and Entrepreneurship Development Centre, cultivating innovation and enhancing the employability of our Engineering graduates. Extra-curricular activities encompassing arts, sports and cultural pursuits, form indispensable component of campus life at VCET. In essence, VJCET is the pre-eminent destination for those seeking higher education in the realms of engineering and technology, where excellence thrives."
    }
    PatronImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/patron.jpg",
        width: "30%"
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/frpiusmk.png",
        width: "35%"
    }
    DImagedata = {
      instanceID: "DImage",
      image: "KeyFunctionaries/vjcet_director.jpg",
      width: "35%"
    }
    PImagedata = {
      instanceID: "PImage",
      image: "KeyFunctionaries/principal.JPG",
      width: "40%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <HeadingThree data={this.PatronTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.PatronImagedata} /></p>
                   <p align="center"><b> Mar George Madathikandathil</b></p> 
                    <HeadingThree data={this.CCCTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.CCCImagedata} /></p>
                   <p align="center"><b> Msgr. Dr. Pius Malekandathil [<a href="https://vjcet.org/downloads/keyfunctionaries/RevfrPiusMalekandathil.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <BodyOneJustified data={this.CCCContent1} />
                   <br />
                   <HeadingThree data={this.WifiTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.DImagedata} /></p>
                   <p align="center"><b> Rev. Fr. Paul Parathazham </b></p> 
                   <BodyOneJustified data={this.CCCContent2} />
                   <br />
                   <HeadingThree data={this.ServerTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.PImagedata} /></p>
                   <p align="center"><b> Dr. K.K Rajan [<a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC129" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <BodyOneJustified data={this.CCCContent3} />
                   <BodyOneJustified data={this.CCCContent3_p2} />

                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default keyfunct;