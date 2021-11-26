import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
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
    NsslogoImage = {
        instanceID: "NsslogoImage",
        image: "ProfessionalBodies/NSS.png",
        width: "50%"
      }
      ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "CODE OF CONDUCT"
    }

    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "STUDENTS"
    };
    MajoreventsTitle1 = {
        instanceID: "MajoreventsTitle1",
        title: "GOVERNING BODY"
    };
    MajoreventsTitle2 = {
        instanceID: "MajoreventsTitle2",
        title: "MANAGER"
    };
    MajoreventsTitle3 = {
        instanceID: "MajoreventsTitle3",
        title: "DIRECTOR"
    };
    MajoreventsTitle4 = {
        instanceID: "MajoreventsTitle4",
        title: "PRINCIPAL"
    };
    MajoreventsTitle5 = {
        instanceID: "MajoreventsTitle5",
        title: "VICE-PRINCIPAL"
    };
    MajoreventsTitle6 = {
        instanceID: "MajoreventsTitle6",
        title: "DEAN"
    };
    MajoreventsTitle7 = {
        instanceID: "MajoreventsTitle7",
        title: "HEAD OF THE DEPARTMENT"
    };
    MajoreventsTitle8 = {
        instanceID: "MajoreventsTitle8",
        title: "TEACHING STAFF"
    };
    MajoreventsTitle9 = {
        instanceID: "MajoreventsTitle9",
        title: "TECHNICAL STAFF"
    };
    MajoreventsTitle10 = {
        instanceID: "MajoreventsTitle10",
        title: "OTHER STAFF"
    };


    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "DISCIPLINE AND ANTI RAGGING"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "LIBRARY"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "PLACEMENT & TRAINING CELL"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "COMMON COMPUTING CENTRE (CCC) "
    };




    EventContent1 = {
        instanceID: " EventContent1",
        title: "DISCIPLINE AND ANTI RAGGING."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "On 29th April 2018, The IMA thodupuzha honoured the NSS unit of our college as the Best Camp unit."
    }


    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />  
                <HeadingOne data={this.ResearchHeading}></HeadingOne>  
                 <div className="contain">     
                 <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/CodeOfEthics.pdf" target="_blank" rel="noopener noreferrer"><b>Policy Document on Code of Ethics</b></a></p>           
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <h4>DISCIPLINE AND ANTI RAGGING</h4>
                        <ul>                        
                        <li><p>All the students should maintain 100% attendance as far as possible.</p></li>
                        <li><p>Leave or absence due to sickness, attending family functions, unavoidable requirements etc. should not exceed 25% of the attendance.</p></li>
                        <li><p>Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student. </p></li>
                        </ul>
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-3-6.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>


                        <h4>LIBRARY</h4>
                       <ul>                        
                        <li><p>Strict and absolute silence shall be observed in the library.</p></li>
                        <li><p>External books and other personal belongings should not be taken inside the library. </p></li>
                        <li><p>Library users are strictly prohibited from taking the borrowed and stamped books again inside the library.</p></li>
                        <li><p>Number of books that0 can be borrowed is limited to 6 for final year Engineering students, 4 for all other Engineering students and 2 for the students of Management Studies.</p></li>
                        </ul>
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-6-7.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>


                        <h4>PLACEMENT & TRAINING CELL</h4>
                        <p style={{textAlign:"justify",lineHeight:"1.6em"}}>The Placement and Training cell monitors the employment opportunities, caters to enhance the employability of students and arrange campus interviews. Our Campus recruitment program starts right from the penultimate semester. The students aspiring for higher studies are encouraged to undergo GATE/ CAT, GRE and GMAT exams. Besides, in campus IELTS course and IDP overseas education fair is conducted.</p>                      
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-7-8.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>                      


                        <h4>COMMON COMPUTING CENTRE (CCC) </h4>
                        <p style={{textAlign:"justify",lineHeight:"1.6em"}}>VJCET has a central computing facility named Common Computing Centre (CCC) functioning from 8 a.m. to 8p.m. with 67 PC’s and an internet connection with bandwidth of 100 Mbps. This centre is air conditioned and well-equipped with an uninterrupted power backup system. Students can access Internet and download study materials and can procure either hard copies or soft copies of the study materials with the assistance of staff at any time. This area is also Wi-Fi enabled so that students can access internet with their laptops.</p>                      
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-8-9.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>                      


                        <HeadingTwo data={this.MajoreventsTitle1} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The Governing Body is responsible for</p> 
                        <ul>                        
                        <li><p>Aligning the strategic direction with the institution’s aims and objectives.</p></li>
                        <li><p>Ensuring clarity of vision, mission and policy objectives.</p></li>
                        <li><p>Approval of all the policies of the institutions.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-10.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   


                        <HeadingTwo data={this.MajoreventsTitle2} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The Manager</p> 
                        <ul>                        
                        <li><p>Recruits, Interviews and appoints new staff.</p></li>
                        <li><p>Provides administrative leadership to Principal, teachers, and administrative officials of the institutions in the development and coordination of educational programs.</p></li>
                        <li><p>Ensures a safe, secure, and legal work environment.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-10-11.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   


                        <HeadingTwo data={this.MajoreventsTitle3} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The Director is responsible for</p> 
                        <ul>                        
                        <li><p>General academic and administrative supervision.</p></li>
                        <li><p>Annual evaluation of staff along with the Academic Review Committee.</p></li>
                        <li><p>Assessing the workload and making arrangements for the appointment of staff</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-11.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   

                        <HeadingTwo data={this.MajoreventsTitle4} className="Heading" />
                        <p style={{fontWeight:"bold"}}>Following are the responsibilities of the Principal</p> 
                        <ul>                        
                        <li><p>Defines and delegates various responsibilities in the college.</p></li>
                        <li><p>Prepares the annual budget in consultation with HODs.</p></li>
                        <li><p>Conducts periodic meetings of various bodies such as PTA, Library Committee, Anti-ragging Committee, Women’s Grievances Redressal Committee, etc.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-11-12.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   

                        <HeadingTwo data={this.MajoreventsTitle5} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The responsibilities of Vice-Principal are</p> 
                        <ul>                        
                        <li><p>In the absence of the Principal, the Vice-Principal will discharge the duties of the Principal.</p></li>
                        <li><p>Will assist the Principal in maintaining the discipline of students at the college.</p></li>
                        <li><p>Will monitor the admission process of the college.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-13.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   


                        <HeadingTwo data={this.MajoreventsTitle6} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The Dean is responsible for</p> 
                        <ul>                        
                        <li><p>Coordinating and assisting Management for implementing the Institution Vision and Mission.</p></li>
                        <li><p>Leading the College towards achieving the goals set by the University.</p></li>
                        <li><p>Leading and coordinating strategic planning and curriculum development in their respective domains in association with HODs.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-14.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>  


                         <HeadingTwo data={this.MajoreventsTitle7} className="Heading" />
                        <p style={{fontWeight:"bold"}}>HOD is responsible</p> 
                        <ul>                        
                        <li><p>To organise the department in a professional manner with consistent academic record and team spirit.</p></li>
                        <li><p>To maintain discipline in the department in consultation with the faculty and group tutors.</p></li>
                        <li><p>To organise academic programs like seminars, conferences and Faculty Development Programs to improve the domain knowledge and exposure of the students.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-14-16.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>    


                        <HeadingTwo data={this.MajoreventsTitle8} className="Heading" />
                        <p style={{fontWeight:"bold"}}>Following are the jobs and responsibilities of the teaching staff</p> 
                        <ul>                        
                        <li><p>Manage their private affairs in a manner consistent with the dignity of their profession.</p></li>
                        <li><p>Seek to make professional growth through continuous study and research.</p></li>
                        <li><p>Actively participate in professional meetings, seminars and conferences with a view to not only contribute knowledge but also to keep them acquainted with the latest developments in areas of their professional interest.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-1621-3438.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>    

                        <HeadingTwo data={this.MajoreventsTitle9} className="Heading" />
                        <p style={{fontWeight:"bold"}}>The technical staff is responsible </p> 
                        <ul>                        
                        <li><p>To assist the faculty for an effective and orderly conduct of practical courses.</p></li>
                        <li><p>To ensure whether all the equipment and machineries are in proper working condition before the commencement of lab classes.</p></li>
                        <li><p>To ensure the safety of the students during lab classes by carefully following the safety instructions.</p></li>
                        </ul>   
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-21.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   


                         <HeadingTwo data={this.MajoreventsTitle10} className="Heading" />
                         <h3>Administrative Officer</h3>
                         <div className="inner-para">
                        <p style={{fontWeight:"bold"}}>The AO is responsible for the following</p> 
                        <ul>                        
                        <li><p>Checking of bills & vouchers, approval of correspondence, approval of salary bills, admission formalities.</p></li>
                        <li><p>Custodian of staff qualification certificates, appointment orders and all documents pertaining to administration.</p></li>
                        <li><p>To ensure the safety of the students during lab classes by carefully following the safety instructions.</p></li>
                        </ul>   
                        </div>
                        <h3>Head Clerk</h3>
                        <div className="inner-para">
                        <p style={{fontWeight:"bold"}}>The HC is responsible:</p> 
                        <p style={{textAlign:"justify",lineHeight:"1.6em"}}>To prepare vouchers and bills, Professional Tax to Panchayath, Acquittance and Reconciliation, Thapal (Inward & Outward), Admission Register, T.C., Course & Conduct Certificate, Maintenance of Stock Registers and Issue of Forms and Stationery items.</p>                      
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-22-24.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>     
                        </div>
                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;