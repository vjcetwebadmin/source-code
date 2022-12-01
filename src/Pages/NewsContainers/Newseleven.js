import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
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

class Newsfour extends React.Component {
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
        title: "Jeevana 2022"
    };
    NewsTitle1 = {
        instanceID: "NewsTitle1",
        title: "ജീവന - ഡയാലിസിസ് രോഗികൾക്കുള്ള    ധനസഹായത്തിനായി  ഡിസംബർ 15 വരെ അപേക്ഷിക്കാം"
    };
    Newscontent = {
        instanceID: "Newscontent",
        title: " The 1st batch of KTU(2015-19) secured 91.82% pass"
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/Rank.jpg",
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
    QuickNewsLinks={
        text1: "Download Application Form",
        link1: "https://vjcet.org/downloads/news/Dialysis_application_form.pdf"
    }

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                   
                    <HeadingOne data={this.NewsTitle} />
                    <div className="bodyContainer">
                    {/*   <iframe src="https://vjcet.org/downloads/news/MED Job.pdf" width="90%" height="1000" title="Job Call"></iframe> */}
                                   
                    <HeadingTwo data={this.NewsTitle1} />
                    <p>കേരള സാങ്കേതിക സർവകലാശാലയുടെ കീഴിലുള്ള എഞ്ചിനീയറിംഗ് കോളേജുകളിലെ എൻഎസ്എസ് യൂണിറ്റുകളുടെ ഭാഗമായ 'കെ ടി യു കെയർ' എന്ന വിദ്യാർഥി കൂട്ടായ്മയുടെ നവ സംരംഭമായ 'ജീവന 2022' യുടെ ഭാഗമായി  വാഴക്കുളം വിശ്വജ്യോതി എൻജിനീയറിങ് കോളേജിലെ എൻഎസ്എസ് വോളണ്ടിയേഴ്സ് സമാഹരിച്ച  500 നിർധനരായ ഡയാലിസിസ് രോഗികൾക്കുള്ള    ധനസഹായം ലഭിക്കുന്നതിനായി ഡിസംബർ 15 വരെ അപേക്ഷിക്കാം. പൂരിപ്പിച്ച അപേക്ഷയും, ഏതെങ്കിലും ഒരു തിരിച്ചറിയൽ രേഖയും സമയപരിധിക്കുള്ളിൽ ഏൽപിക്കുന്നവർക്കാണ് പദ്ധതിയുടെ ഭാഗമാകാൻ കഴിയുക.   കൂടുതൽ വിവരങ്ങൾക്കായി  9496062561 /  8943799501  എന്ന നമ്പറിൽ ബന്ധപ്പെടുക.</p>
                    <div className="quickNewsLinks">
                        <a className="quickNewsLink1" target="_blank" href={this.QuickNewsLinks.link1}>
                            <h3>{this.QuickNewsLinks.text1}</h3>
                        </a>
                    </div>
                    <p></p>
                  <iframe src="https://vjcet.org/downloads/news/Jeevana_nss.pdf" width="100%" height="500" title="Campus Map" align="center"></iframe>
                    </div>             

                
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsfour;