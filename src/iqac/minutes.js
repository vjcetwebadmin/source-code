import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import "./Research.css"
import Expandable from "../Components/NewComponents/Expandable";

//import Profile from "./csi";

class minutes extends Component {
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
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Minutes And Reports"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "IQAC will facilitate /contribute"
    }
      
    render() {
        const IQAC_Data = [
          {
            year: "2021-2022",
            events: [
              {
                date: "11-10-2021",
                minutes: "https://vjcet.org/downloads/iqac/N24.pdf",
                action: "https://vjcet.org/downloads/iqac/A25.pdf",
              },
              {
                date: "11-01-2022",
                minutes: "https://vjcet.org/downloads/iqac/N25.pdf",
                action: "",
              },
              {
                date: "18-04-2022",
                minutes: "https://vjcet.org/downloads/iqac/18-04-22M.pdf",
                action: "https://vjcet.org/downloads/iqac/18-04-22A.pdf",
              },
              {
                date: "07-06-2022",
                minutes: "https://vjcet.org/downloads/iqac/07-06-22M.pdf.pdf",
                action: "https://vjcet.org/downloads/iqac/07-06-22A.pdf",
              },
              
            ],
            annualReport: "",
          },
          {
            year: "2020-2021",
            events: [
              {
                date: "07-07-2020",
                minutes: "https://vjcet.org/downloads/iqac/07-07-2020M.pdf",
                action: "https://vjcet.org/downloads/iqac/A20.pdf",
              },              
              {
                date: "06-10-2020",
                minutes: "https://vjcet.org/downloads/iqac/N20.pdf",
                action: "https://vjcet.org/downloads/iqac/A21.pdf",
              },
              {
                date: "04-01-2021",
                minutes: "https://vjcet.org/downloads/iqac/N21.pdf",
                action: "https://vjcet.org/downloads/iqac/A22.pdf",
              },
              {
                date: "12-04-2021",
                minutes: "https://vjcet.org/downloads/iqac/N22.pdf",
                action: "https://vjcet.org/downloads/iqac/A23.pdf",
              },
              {
                date: "09-08-2021",
                minutes: "https://vjcet.org/downloads/iqac/N23.pdf",
                action: "https://vjcet.org/downloads/iqac/A24.pdf",
              },
            ],
            annualReport: "",
          },

            {
              year: "2019-2020",
              events: [
                {
                  date: "08-07-2019",
                  minutes: "https://vjcet.org/downloads/iqac/N15.pdf",
                  action: "https://vjcet.org/downloads/iqac/A16.pdf",
                },
                {
                  date: "07-10-2019",
                  minutes: "https://vjcet.org/downloads/iqac/N16.pdf",
                  action: "https://vjcet.org/downloads/iqac/A17.pdf",
                },
                {
                  date: "18-12-2019",
                  minutes: "https://vjcet.org/downloads/iqac/N17.pdf",
                  action: "https://vjcet.org/downloads/iqac/A18.pdf",
                },
                {
                  date: "17-02-2020",
                  minutes: "https://vjcet.org/downloads/iqac/N18.pdf",
                  action:  "https://vjcet.org/downloads/iqac/A19.pdf",
                },
              ],
              annualReport: "",
            },
            {
              year: "2018-2019",
              events: [
                {
                  date: "06-07-2018",
                  minutes: "https://vjcet.org/downloads/iqac/N10.pdf",
                  action: "https://vjcet.org/downloads/iqac/A11.pdf",
                },
                {
                  date: "04-10-2018",
                  minutes: "https://vjcet.org/downloads/iqac/N11.pdf",
                  action: "https://vjcet.org/downloads/iqac/A12.pdf",
                },
                {
                  date: "20-12-2018",
                  minutes: "https://vjcet.org/downloads/iqac/N12.pdf",
                  action: "https://vjcet.org/downloads/iqac/A13.pdf",
                },
                {
                  date: "26-02-2019",
                  minutes: "https://vjcet.org/downloads/iqac/N13.pdf",
                  action: "https://vjcet.org/downloads/iqac/A14.pdf",
                },
                {
                  date: "29-04-2019",
                  minutes: "https://vjcet.org/downloads/iqac/N14.pdf",
                  action: "https://vjcet.org/downloads/iqac/A15.pdf",
                },
              ],
              annualReport: "",
            },
            {
              year: "2017-2018",
              events: [
                {
                  date: "18-07-2017",
                  minutes: "https://vjcet.org/downloads/iqac/N07.pdf",
                  action: "https://vjcet.org/downloads/iqac/A08.pdf",
                },
                {
                  date: "13-11-2017",
                  minutes: "https://vjcet.org/downloads/iqac/N08.pdf",
                  action: "https://vjcet.org/downloads/iqac/A09.pdf",
                },
                {
                  date: "09-04-2018",
                  minutes: "https://vjcet.org/downloads/iqac/N09.pdf",
                  action: "https://vjcet.org/downloads/iqac/A10.pdf",
                },
               ],
              annualReport: "",
            },
            {
              year: "2016-2017",
              events: [
                {
                  date: "12-07-2016",
                  minutes: "https://vjcet.org/downloads/iqac/N07.pdf",
                  action: "https://vjcet.org/downloads/iqac/A08.pdf",
                },
                {
                  date: "17-11-2016",
                  minutes: "https://vjcet.org/downloads/iqac/N05.pdf",
                  action: "https://vjcet.org/downloads/iqac/A06.pdf",
                },
                {
                  date: "16-03-2017",
                  minutes: "https://vjcet.org/downloads/iqac/N04.pdf",
                  action: "https://vjcet.org/downloads/iqac/A05.pdf",
                },
               ],
              annualReport: "",
            },
            {
              year: "2015-2016",
              events: [
                {
                  date: "15-07-2015",
                  minutes: "https://vjcet.org/downloads/iqac/N01.pdf",
                  action: "https://vjcet.org/downloads/iqac/A01.pdf",
                },
                {
                  date: "18-11-2015",
                  minutes: "https://vjcet.org/downloads/iqac/N02.pdf",
                  action: "https://vjcet.org/downloads/iqac/A03.pdf",
                },
                {
                  date: "17-03-2016",
                  minutes: "https://vjcet.org/downloads/iqac/N03.pdf",
                  action: "https://vjcet.org/downloads/iqac/A04.pdf",
                },
               ],
              annualReport: "",
            },
          ];
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> 
                <BodyThree data={this.ReserchBody1} /><br />*/}
                <Expandable data={IQAC_Data} />
 
              </div>
        );
    }
}

export default minutes;