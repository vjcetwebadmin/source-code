import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingFour from "../Components/Texts/HeadingFour";
import ImageOne from "../../Components/Images/ImageOne";
import "./Research.css"


class nss extends React.Component {
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
 
    MajoreventsTitle5 = {
        instanceID: "MajoreventsTitle5",
        title: "FDP & Webinars"
    };
  
 
    render() {
        return (
                  <div >     
                        <HeadingTwo data={this.MajoreventsTitle5} className="Heading" />
                        {/*<p ><a href="https://drive.google.com/file/d/1FziOAoudmAdNRTChx4XkhFCZKtSs6rcb/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Webpage</a></p>*/}

                        <p className="paraeresource">AICTE sponsored One Week Online Short Term Training Programme (STTP) on "Iot Based Manufacturing and Design - Challenges and Opportunity” Phase 1 - 23rd Nov - 28th Nov  2020-<a href="https://drive.google.com/file/d/1zd-WauHsGH8Rm7bC_62Dx4Y8CN0xkDK0/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">AICTE sponsored One Week Online Short Term Training Programme (STTP) on  "Iot Based Manufacturing and Design - Challenges and Opportunity” Phase 2 - Phase 2: 14th to 19th December ‘2020-<a href="https://www.youtube.com/watch?v=z3SgoMmgUS0" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Five Days Online Faculty Development Program (FDP) on    BLOCKCHAIN from 19-23 OCT 2020 sponsored by AICTE Training and Learning (ATAL) Academy- <a href="https://drive.google.com/drive/folders/1RkR7HNjZNIDzO1AcJEF0wip9i7Fj2Gf2?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">KTU sponsored FDP on "Advancements in Systems for Electric and Hybrid Vehicles ” at VJCET (19th - 23rd April 2021)-<a href="https://drive.google.com/drive/folders/17LgPXYJSpBqrLMVxAB-gAXCctBdVnwN2?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “How to File National and International Patents” conducted on 17-10-2020-<a href="https://www.youtube.com/watch?v=blkWwvnqLmM" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Introduction to Foss Cell” conducted on 09-12-2020-<a href="https://www.youtube.com/watch?v=eA-Sh7CWtm8" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Familiarizing Yourself with the Field” conducted on 17-11-2020.-<a href="https://www.youtube.com/watch?v=fOYq8_fcvtE" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Indian Space: An Inspiring Story” conducted on 30-12-2020-<a href="https://www.youtube.com/watch?v=ITRAGitpxjk" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Interactive Session with "Successful Start-up Founders" conducted on 03-03-2021<a href="https://www.youtube.com/watch?v=mTdjVYtqLdo" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Power Transmission and Distribution in Kerala” conducted on 30-12-2020<a href="https://www.youtube.com/watch?v=T4HAuOnY4Bk" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Building a Data Science Portfolio” conducted on 09-09-2020-<a href="https://www.youtube.com/watch?v=TCt1KPp8d9A" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “Introduction to Development Boards” conducted on 07-09-2020- <a href="https://youtu.be/_Sy2263NlYQ" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “How to Be Equipped as a Promising Professional” conducted on 27-09-2020-<a href="https://www.youtube.com/watch?v=51g01qkpz4U" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraeresource">Webinar on “How to Market Yourself in a Competitive World” conducted on 15-07-2020-<a href="https://www.youtube.com/watch?v=gnP6M2I0tTg" target="_blank" rel="noopener noreferrer">click here</a></p>
                     
                 </div>

        )
    }

}

export default nss;