import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFive from "../Components/Texts/HeadingFive";

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

export default function CarouselFour({ data }) {
  const instanceID=data.instanceID;
  const Events = {
    instanceID: "CarouselFourEvents",
    title: "Top Events",
  };
  const Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px",
  };

  const Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px",
  };

  const slides = [
    {
      Title: {
        instanceID: "EventFiveTitle",
        title:<a href="https://vjcet.org/downloads/gallery/boddrishya2022.html" rel="noopener noreferrer"  target="_blank"><font color="maroon">Bodhi & Drishya 2022</font></a>
        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "CarouselFourImages/bodhi.jpg",
        width: "100px",
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="/downloads/gallery/christmas21.html" rel="noopener noreferrer"  target="_blank"><font color="maroon">Christmas</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "CarouselFourImages/christ21.png",
        width: "90px"
      }
    },
    {
      Title: {
        instanceID: "EventOneTitle",
        title:<a href="https://vjcet.org/downloads/gallery/meritf22.html" rel="noopener noreferrer"  target="_blank"><font color="maroon">Merit & Farewell 2022</font></a>        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "CarouselFourImages/farewell.png",
        width: "100px",        
      },      
    },   
    {
      Title: {
        instanceID: "EventTwoTitle",
        title:<a href="https://vjcet.org/downloads/gallery/onam.html" rel="noopener noreferrer"  target="_blank" ><font color="maroon" >Onam</font></a>
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "CarouselFourImages/onam2021.gif",
        width: "88px"
      }
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: <a href="https://vjcet.org/downloads/gallery/unionoath.html" rel="noopener noreferrer"  target="_blank"><font color="maroon">Oath Taking Ceremony</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "CarouselFourImages/oath.jpg",
        width: "82px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="https://vjcet.org/downloads/gallery/classbegins.html" rel="noopener noreferrer"  target="_blank"><font color="maroon">Inauguration of First year classes</font></a>
      },

      Image: {
        instanceID: "EventFourImage",
        image: "CarouselFourImages/index.jpeg",
        width: "82px"
      }
    }
    

  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="CarouselFour" id={instanceID}>
      <div className="CarouselFourContentWrapper">
        <div className="CarouselFourTop">
          <HeadingTwo data={Events} />
          <div className="CarouselFourArrows" id="CarouselFourArrows">
            {/* <ImageOne data={Previous} onClickAction={rotateLeft} />
            <ImageOne
              className="CarouselFourArrowRight"
              data={Next}
              onClickAction={rotateRight}
            /> */}
          </div>
        </div>

        <div className="CarouselFourSlider" style={{display: "block"}}>
          <Carousel
            focusOnSelect
            beforeChange={() => console.log("true moving")}
            afterChange={() => console.log("false moving")}
            responsive={responsive}
            showDots
            infinite
            containerClass="container-with-dots"
            itemClass="image-item"
          >
            {slides.map((item,index) => (
              <div key={index} className="CarouselFourSlide" id={instanceID + "SlideThree"}>
                <ImageOne data={item.Image} />
                <HeadingFive data={item.Title} />
              </div>
            ))}
          </Carousel>

        </div>
      </div>

      <div className="CarouselFourPaginationContainer">
        <div className="CarouselFourPagination">
          {/* {slides.map((item, index, arr) => {
            if (index % state.sliderSize === 0)
              return (
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor:
                      index === state.currentPage ? "#880D1E" : "#aaa",
                    margin: "5px",
                    borderRadius: "100%",
                  }}
                />
              );
          })} */}
        </div>
      </div>
    </div>
  );
}





/*
class CarouselFour extends Component {
  state = { currentPage: 0, sliderSize: 3 };
  componentDidMount() {
    this.setState({ sliderSize: window.innerWidth < 768 ? 1 : 3 });
  }
  rotateLeft = () => {
    console.log("rotateLeft");
    console.log(this.state.currentPage);
    if (this.state.currentPage - 1 < 0) {
      this.setState({
        currentPage: Math.floor(this.slides.length / this.state.sliderSize) - 1,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };
  rotateRight = () => {
    console.log("rotateRight");
    console.log(this.state.currentPage);
    if (
      this.state.currentPage + 1 >
      Math.floor(this.slides.length / this.state.sliderSize) - 1
    ) {
      this.setState({
        currentPage: 0,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  CarouselTitle = {
    instanceID: "CarouselTitle",
    title: "Top Events",
  };
  Events = {
    instanceID: "CarouselFourEvents",
    title: "Top Events",
  };
  Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px",
  };

  Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px",
  };
  EventOneTitle = {
    instanceID: "EventOneTitle",
    title: "Arts Festival : Drishya 2K19",
  };

  EventOneImage = {
    instanceID: "EventOneImage",
    image: "CarouselFourImages/stock3.png",
    width: "202px",
  };

  EventTwoTitle = {
    instanceID: "EventTwoTitle",
    title: "Magnum 2k19",
  };

  EventTwoImage = {
    instanceID: "EventTwoImage",
    image: "CarouselFourImages/magnum.jpg",
    width: "202px",
  };

  EventThreeTitle = {
    instanceID: "EventThreeTitle",
    title: "Tech Fest : Bodhi 2K19",
  };

  EventThreeImage = {
    instanceID: "EventThreeImage",
    image: "CarouselFourImages/stock3.png",
    width: "202px",
  };

  EventFourTitle = {
    instanceID: "EventFourTitle",
    title: "Merit & Farewell: 2022",
  };

  EventFourImage = {
    instanceID: "EventFourImage",
    image: "CarouselFourImages/farewell.png",
    width: "202px",
  };
  EventFiveTitle = {
    instanceID: "EventFiveTitle",
    title: "Onam: 2021",
  };

  EventFiveImage = {
    instanceID: "EventFiveImage",
    image: "CarouselFourImages/onam2021.gif",
    width: "150px",
  };
  slides = [
    {
      Title: {
        instanceID: "EventOneTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/meritf22.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Merit & Farewell 2022</font> 
          </a>
        ),
      },

      Image: {
        instanceID: "EventOneImage",
        image: "CarouselFourImages/farewell.png",
        width: "150px",
      },
    },
   {
      Title: {
        instanceID: "EventFiveTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/onam.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Onam 2021</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "CarouselFourImages/onam2021.gif",
        width: "150px",
      },
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/unionoath.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Oath Taking Ceremony</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "CarouselFourImages/oath.jpg",
        width: "125px",
      },
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: (
          <a
            href="downloads/gallery/classbegins.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Inauguration of First year classes</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EvenFourImage",
        image: "CarouselFourImages/index.jpeg",
        width: "125x",
      },
    }
  ];

  render() {
    const { instanceID } = this.props.data;
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768 && this.state.sliderSize > 1) {
        this.setState({ sliderSize: 1 });
      } else if (window.innerWidth >= 768 && this.state.sliderSize < 3) {
        this.setState({ sliderSize: 3 });
      }
    });

    return (
      <div className="CarouselFour" id={instanceID}>
        <div className="CarouselFourContentWrapper">
          <div className="CarouselFourTop">
            <HeadingTwo data={this.Events} />
            <div className="CarouselFourArrows" id="CarouselFourArrows">
              <ImageOne data={this.Previous} onClickAction={this.rotateLeft} />
              <ImageOne
                className="CarouselFourArrowRight"
                data={this.Next}
                onClickAction={this.rotateRight}
              />
            </div>
          </div>

          <div className="CarouselFourSlider">
            {this.slides.map((item, index, arr) => {
              if (
                index < this.state.sliderSize + this.state.currentPage &&
                index >= this.state.currentPage * this.state.sliderSize
              ) {
                return (
                  <div
                    key={index}
                    className="CarouselFourSlide"
                    id={instanceID + "SlideThree"}
                  >
                    <ImageOne data={item.Image} />
                    <HeadingFive data={item.Title} />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="CarouselFourPaginationContainer">
          <div className="CarouselFourPagination">
            {this.slides.map((item, index, arr) => {
              if (index % this.state.sliderSize === 0)
                return (
                  <div
                  key={index}
                    style={{
                      height: "6px",
                      width: "6px",
                      backgroundColor:
                        index === this.state.currentPage ? "#880D1E" : "#aaa",
                      margin: "5px",
                      borderRadius: "100%",
                    }}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselFour;*/
