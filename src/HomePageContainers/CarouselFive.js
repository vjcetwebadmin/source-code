import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFive from "../Components/Texts/HeadingFive";
import Carousel from "react-multi-carousel";

export default function CarouselFive({ data }) {
  const instanceID=data.instanceID;
  const Events = {
    instanceID: "CarouselFourEvents",
    title: "VJCET Chapters",
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
        instanceID: "EventOneTitle",
        title:<a href="#/campus-life/professionalbodies/ieee" target="_blank" rel="noopener noreferrer"><font color="maroon">IEEE</font></a>
        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "HomepageActivities/ieee.jpg",
        width: "120px",
      }
    },
    
    {
      Title: {
        instanceID: "EventTwoTitle",
        title:<a href="#/campus-life/professionalbodies/iste" target="_blank" rel="noopener noreferrer"><font color="maroon" >ISTE</font></a>
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "HomepageActivities/ISTE1.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: <a href="#/campus-life/professionalbodies/igbc" target="_blank" rel="noopener noreferrer"><font color="maroon">IGBC</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/IGBC.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/professionalbodies/csi" target="_blank" rel="noopener noreferrer"><font color="maroon">CSI</font></a>
      },

      Image: {
        instanceID: "EventFourImage",
        image: "HomepageActivities/CSI.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="#/campus-life/professionalbodies/iete" target="_blank" rel="noopener noreferrer"><font color="maroon">IETE</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "HomepageActivities/iete.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventSixTitle",
        title: <a href="#/campus-life/professionalbodies/sae" target="_blank" rel="noopener noreferrer"><font color="maroon">SAE INDIA</font></a>
      },

      Image: {
        instanceID: "EventSixImage",
        image: "HomepageActivities/SAEINDIA.jpg",
        width: "150px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/nss" rel="noopener noreferrer"><font color="maroon">NSS</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/NSS.png",
        width: "110px"
      }
    },
    
    {
      Title: {
        instanceID: "EventSevenTitle",
        title: <a href="#/campus-life/professionalbodies/ict" rel="noopener noreferrer"><font color="maroon">ICT</font></a>
      },

      Image: {
        instanceID: "EventSevenImage",
        image: "HomepageActivities/ict.png",
        width: "120px"
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
    <div className="CarouselFive" id={instanceID}>
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

