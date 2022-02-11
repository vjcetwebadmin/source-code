import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";
import NewsImage from "./NewsImage"
//import CarouselCaption from "react-bootstrap/CarouselCaption";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarouselSecOne extends Component {

  Title1 = {
    instanceID: "NewsSecondaryTLOneTitle",
    title: "Merit&Farewell21",
    link: "https://vjcet.org/downloads/gallery/meritf21.html"
  }

  Image1 = {
    instanceID: "NewsSecondaryTLOneImage",
    image: "CarouselFourImages/farewell.png",
    //Recommended Image Size is 733px x 400px.
    width: "62%"
  }

  Title2 = {
    instanceID: "NewsSecondaryTLTwoTitle",
    title: "Onam 2k21",
    link: "https://vjcet.org/downloads/gallery/onam.html"
  }

  Image2 = {
    instanceID: "NewsSecondaryTLTwoImage",
    image: "CarouselFourImages/onam2021.gif",
    //Recommended Image Size is 733px x 400px.
    width: "55%"
  }
  Title3 = {
    instanceID: "NewsSecondaryTLThreeTitle",
    title: "Oath Taking Ceremony",
    link: "downloads/gallery/unionoath.html"
  }

  Image3 = {
    instanceID: "NewsSecondaryTLThreeImage",
    image: "CarouselFourImages/oath.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "50%"
  }

  render() {

    //const { instanceID } = this.props.data;

    return (
      <Carousel>
        <Carousel.Item>
          <NewsImage data={this.Image1} />
          <a href={this.Title1.link}>
            <Carousel.Caption>
              <h3>{this.Title1.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      <Carousel.Item>
          <NewsImage data={this.Image2} />
          <a href={this.Title2.link}>
            <Carousel.Caption>
              <h3>{this.Title2.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <NewsImage data={this.Image3} />
          <a href={this.Title3.link}>
            <Carousel.Caption>
              <h3>{this.Title3.title}</h3>
            </Carousel.Caption>
          </a>
       </Carousel.Item>
      </Carousel>
    )
  }
}

export default NewsCarouselSecOne;