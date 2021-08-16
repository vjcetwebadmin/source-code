import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewsCarousel.css";
import NewsImage from "./NewsImage";
//import CarouselCaption from "react-bootstrap/CarouselCaption";

//This is Carousal Component. Uses a library called react-bootstrap. Don't Mess with..

class NewsCarouselPrimary extends Component {
  Title1 = {
    instanceID: "NewsPrimaryOneTitle",
    title: "",
    link: ""
  };


  Title2 = {
    instanceID: "NewsPrimaryTwoTitle",
    title: "326 Students Placed",
    link: "#/placement/"
  };

  Image2 = {
    instanceID: "NewsPrimaryTwoImage",
    image: "NewsSection/BigNews/BigNews2.jpg",
    //Recommended Image Size is 733px x 400px. 
    width: "100%"
  };
  Title3 = {
    instanceID: "NewsPrimaryThreeTitle",
    title: "12 University Ranks(2014-18)",
    
  };

  Image3 = {
    instanceID: "NewsPrimaryThreeImage",
    image: "NewsSection/BigNews/DSC_0282.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };

  Title4 = {
    instanceID: "NewsPrimaryOneTitle",
    title: "Installed Smart Classroom at Kunjipara Tribal School,Kuttampuzha",
    link: ""
  };

  Image4= {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/ColPos.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };
  Image5 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/collegeadd.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };
  Image6 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/onam21.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "60%"
  };

 /* Image9 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/Pict1.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };
  Image10 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/Pict2.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }; 
  Image11 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/Pict3.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  };  
  Image12 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/Pict4.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "100%"
  }; 
  Title6 = {
    instanceID: "NewsPrimaryOneTitle",
    title: "Viswajyothi ranked 9th out of 13 in the Cybathlon Competition",
    link: ""
  };
  
  Image13 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/news2606.jpg",
    //Recommended Image Size is 733px x 400px.
    width: "43%"
  };
  /*Image15 = {
    instanceID: "NewsPrimaryOneImage",
    image: "NewsSection/BigNews/Itnews1.jpeg",
    //Recommended Image Size is 733px x 400px.
    width: "60%"
  };*/

  render() {
    //const { instanceID } = this.props.data;

    return (
      <Carousel>
       <Carousel.Item>
          <NewsImage data={this.Image6}/>      
       </Carousel.Item>         
       <Carousel.Item>
          <NewsImage data={this.Image3}/>      
       </Carousel.Item> 
       {/* <Carousel.Item>
          <NewsImage data={this.Image10} />
          {<a href={this.Title6.link}>
            <Carousel.Caption>
              <h3>{this.Title6.title}</h3>
            </Carousel.Caption>
          </a>}
        </Carousel.Item>  
        <Carousel.Item>
          <NewsImage data={this.Image11} />
          {<a href={this.Title6.link}>
            <Carousel.Caption>
              <h3>{this.Title6.title}</h3>
            </Carousel.Caption>
          </a>}
        </Carousel.Item>  
          <Carousel.Item>
          <NewsImage data={this.Image9} />
          {<a href={this.Title6.link}>
            <Carousel.Caption>
              <h3>{this.Title6.title}</h3>
            </Carousel.Caption>
          </a>}
        </Carousel.Item>         
         <Carousel.Item>
          <NewsImage data={this.Image12} />
          {<a href={this.Title6.link}>
            <Carousel.Caption>
              <h3>{this.Title6.title}</h3>
            </Carousel.Caption>
          </a>}
       </Carousel.Item> */}
      <Carousel.Item>
          <NewsImage data={this.Image2} />
      
        </Carousel.Item> 
        <Carousel.Item>
          <NewsImage data={this.Image4} />
      
        </Carousel.Item>               
        {/*<Carousel.Item>
          <NewsImage data={this.Image6} />
         <a href={this.Title5.link}>
            <Carousel.Caption>
              <h3>{this.Title5.title}</h3>
            </Carousel.Caption>
    </a>
        </Carousel.Item> 
        <Carousel.Item>
          <NewsImage data={this.Image5} />
          <a href={this.Title5.link}>
            <Carousel.Caption>
              <h3>{this.Title5.title}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>        
        <Carousel.Item>
          <NewsImage data={this.Image1} />
          <a href={this.Title1.link}>
          <h3>{this.Title1.title}</h3>
            {/* <Carousel.Caption>
              
            </Carousel.Caption> 
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <NewsImage data={this.Image4} />
          <a href={this.Title4.link}>
            <Carousel.Caption>
              <h3>{this.Title4.title}</h3>
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
        </Carousel.Item>*/}
        <Carousel.Item>
          <NewsImage data={this.Image5} />
       </Carousel.Item>
       

      </Carousel>
    );
  }
}

export default NewsCarouselPrimary;
