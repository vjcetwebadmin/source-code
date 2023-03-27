import React, { Component } from "react";
import "./NewsSection.css";
import NewsHeading from "../Components/Texts/NewsHeading";
import NewsCarouselPrimary from "./LocalContainers/NewsCarouselPrimary";
import NewsCarouselSecOne from "./LocalContainers/NewsCarouselSecOne";
import NewsCarouselSecTwo from "./LocalContainers/NewsCarouselSecTwo";
import NewsCarouselSecThree from "./LocalContainers/NewsCarouselSecThree";
import NewsCarouselSecFour from "./LocalContainers/NewsCarouselSecFour";

class NewsSection extends Component {
  state = {};

  News = {
    instanceID: "NewsSectionHead",
    title: "News"
  };

  render() {

    const { instanceID } = this.props.data;

    return (
      
      <div className="HomePageNewsSection" id={instanceID}>
        <p>
          <div class="ticker-wrapper-h">
            <div class="heading"><b>Announcements</b></div>            
            <ul class="news-ticker-h">
              {/*<li><a href="#/newseleven">ജീവന - ഡയാലിസിസ് രോഗികൾക്കുള്ള    ധനസഹായത്തിനായി  ഡിസംബർ 15 വരെ അപേക്ഷിക്കാം.(JEEVANA-2022)<span style={{color:"blue",fontWeight:"normal"}}>click_here</span></a></li>  */}             
              <li><img src="/icons/iconnew.gif" width={47}/><b><a href="https://www.bodhi23.tech/" target="_blank">‘<span style={{color:"#ff1700"}}>BODHI</span>-<img src="/icons/LogoBhodi.png" width={27}/>’ the annual Tech-Fest of Viswajyothi College of Engineering and Technology on March 28 and 29 <span style={{color:"blue",fontWeight:"normal"}}>click...</span></a></b></li>              
              <li>||</li>
              <li><b><a href="#/departments/bhmct">VJCET proudly announces the commencement of new four-year degree programme in Hotel Management and Catering Technology with an intake of 60 seats from the academic year 2022-23 onwards <span style={{color:"blue",fontWeight:"normal"}}>More...</span></a></b></li>
              <li>||</li>
              <li><b>Free KMAT Coaching Registration Opened, For Registration Contact: 9847946548</b></li>              
              <li>||</li>
              <li><b>VJCET has been Re-accredited by the NBA till 2025.</b></li>
              <li>||</li>
              <li><strong>VJCET has been accredited by the NAAC with 'A' Grade in May 2022, This Accreditation is valid for the next 5 years.</strong></li>
            </ul>
          </div>
        </p>
        <NewsHeading data={this.News} />
        <div className="BigNews">
          <NewsCarouselPrimary />
        </div>
        <div className="SmallNews">
          <div className="SmallNewsRow">
            <div className="SmallNewsItem SmallNewsFirst">
              <NewsCarouselSecOne />
            </div>
            <div className="SmallNewsItem SmallNewsSecond">
              <NewsCarouselSecTwo />
            </div>
          </div>
          <div className="SmallNewsRow">
            <div className="SmallNewsItem SmallNewsFirst">
              <NewsCarouselSecThree />
            </div>
            <div className="SmallNewsItem SmallNewsSecond">
              <NewsCarouselSecFour />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsSection;