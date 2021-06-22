import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
/* import Bodythree from "../../Components/Texts/BodyThree"; */
import "../../Components/Tables/tableformat.css";
class Library extends Component {
  state = {};
  DeptLabHeading = {
    instanceID: "DeptLabHeading",
    title: "Department Labs"
  };

  Labname1 = {
    instanceID: "Labname1",
    title: "CIVIL ENGINEERING WORKSHOP"
  };
  Labimage1 = {
	instanceID: "Labimage1",
	image: "DepartmentImages/CE/LABS/Labname1.JPG",
	width: "80%"
  }
  Labwriteup1 = {
    instanceID: "Labwriteup1",
    title: "The Civil Engineering Workshop is one of the oldest laboratories of the institution under the department of Civil Engineering. The laboratory has all required equipment and facilities for conducting practical courses in Civil Workshop. At present, the first-year students of all branches are undergoing practical courses in this laboratory."
  }; 


  Labname2 = {
    instanceID: "Labname2",
    title: "SURVEY LAB"
  };
  Labimage2 = {
	instanceID: "Labimage2",
	image: "DepartmentImages/CE/LABS/Labname2.JPG",
	width: "80%"
  }
  Labwriteup2 = {
    instanceID: "Labwriteup2",
    title: "The laboratory has all required equipment and facilities for conducting practical courses in Surveying. At present undergraduate students of semester III are undergoing practical courses in this laboratory. The lab is actively used by the final year students for their projects."
  }; 


  Labname3 = {
    instanceID: "Labname1",
    title: "COMPUTER APPLICATIONS LABORATORY"
  };
  Labimage3 = {
	instanceID: "Labimage3",
	image: "DepartmentImages/CE/LABS/Labname3.JPG",
	width: "80%"
  }
  Labwriteup3= {
    instanceID: "Labwriteup3",
    title: "Comprehensive Knowledge in Civil Engineering software play a pivotal role in shaping up the engineers competent to the present-day construction scenario. The Computer Applications Lab is fully air conditioned with 35 workstations having latest configurations, which satisfy the computing requirements for various laboratories and project work of students. Internet connectivity is provided for all the systems. The lab is enriched with licensed application software like AutoCAD, STAAD Pro, & Primavera for modeling, analysis & design of structures and construction management. The lab is effectively utilized for conducting FDPs, workshops etc. for the benefit of students and faculty members."
  }; 


  Labname4 = {
    instanceID: "Labname4",
    title: "MATERIAL TESTING LAB I"
  };
  Labimage4 = {
	instanceID: "Labimage4",
	image: "DepartmentImages/CE/LABS/Labname4.JPG",
	width: "80%"
  }
  Labwriteup4 = {
    instanceID: "Labwriteup4",
    title: "The Material Testing Laboratory I provide facilities to test the mechanical properties of materials used in construction. The lab is actively used for research and consultancy activities as well. While designing any structure, one of the most important concerns of design engineer is to determine the strength of any material that has to be used in the construction of relevant structure. The material should be strong enough to carry load for which the subject structure is to be designed without undergoing undue deformations. In this lab the experiments are performed to measure the properties of the materials such as tensile strength, compressive strength, hardness, impact strength, shear strength etc. This lab is used by students of Civil and Mechanical Engineering branch to conduct their regular experiments in the under graduate level."
  }; 


  Labname5 = {
    instanceID: "Labname5",
    title: "GEOTECHNICAL ENGINEERING LAB"
  };
  Labimage5 = {
	instanceID: "Labimage5",
	image: "DepartmentImages/CE/LABS/Labname5.JPG",
	width: "80%"
  }
  Labwriteup5 = {
    instanceID: "Labwriteup5",
    title: "The Geotechnical Lab is equipped with the latest machinery for determination of strength and compressibility characteristics of soils. The lab is also used for research and consultancy activities."
  }; 


  Labname6 = {
    instanceID: "Labname6",
    title: "MATERIAL TESTING LAB II"
  };
  Labimage6 = {
	instanceID: "Labimage6",
	image: "DepartmentImages/CE/LABS/Labname6.JPG",
	width: "80%"
  }
  Labwriteup6 = {
    instanceID: "Labwriteup6",
    title: "The Material Testing Lab II provides facilities for various destructive and non – destructive tests on cement and concrete. The Material Testing Laboratory II is of utmost importance for a Civil Engineering student as it provides facilities for major tests for Cement, Aggregates, Concrete, Tiles and Bricks which includes test for Compressive strength, Flexural strength, Fineness, Mix design of concrete etc. These facilities are also used for Consultancy works."
  }; 


  Labname7 = {
    instanceID: "Labname7",
    title: "TRANSPORTATION ENGINEERING LAB"
  };
  Labimage7 = {
	instanceID: "Labimage7",
	image: "DepartmentImages/CE/LABS/Labname7.JPG",
	width: "80%"
  }
  Labwriteup7 = {
    instanceID: "Labwriteup7",
    title: "The Transportation Engineering Laboratory is equipped with facilities for testing and design of materials used for pavement construction and bituminous mixes. The Laboratory is fully equipped to conduct regular experiments in the undergraduate level, and also to take up consultancy works."
  }; 


  Labname8 = {
    instanceID: "Labname8",
    title: "ENVIRONMENTAL ENGINEERING LAB"
  };
  Labimage8 = {
	instanceID: "Labimage8",
	image: "DepartmentImages/CE/LABS/Labname8.JPG",
	width: "80%"
  }
  Labwriteup8 = {
    instanceID: "Labwriteup8",
    title: "The Environmental Engineering laboratory offers the student exposure to APHA approved water and wastewater quality testing procedures. The laboratory is fully equipped with instruments like UV-VIS spectrophotometer, pH meter, C.O.D apparatus, B.O.D incubator etc for the analysis of water and wastewater."
  }; 


 
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLabHeading} />
        <div>
            <HeadingTwo data={this.Labname1} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup1}></BodyOneJustified>
            <p></p>     
         </div>
  
         <div>
            <HeadingTwo data={this.Labname2} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup2}></BodyOneJustified>
            <p></p>     
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>                    
                     <ol>   1. Dumpy Level </ol>
                     <ol>   2. Automatic Level</ol>
                     <ol>   3. Celestial Globe</ol>
                     <ol>   4. Digital Level </ol>
                     <ol>   5. Total Station</ol>
                     <ol>   6. Plane Table </ol>
                     <ol>   7. Hand held GPS</ol>
                     <ol>   8. Prismatic compass </ol>
                     <ol>   9. Plumb bob</ol>
                     <ol>   10. Vernier Transit Theodolite </ol>
                     <ol>   11. Chain with Arrows</ol>
                     <ol>   12. Digital Distance Measuring Device</ol>                
                  </td></tr>
              </tbody>
            </table>
        </div>
  
        <div>
            <HeadingTwo data={this.Labname3} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup3}></BodyOneJustified>
            <p></p>     
        </div>
  
        <div>
            <HeadingTwo data={this.Labname4} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup4}></BodyOneJustified>
            <p></p> 
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td> 
                
                      <ol> 1.	Universal Testing Machine (400kN)</ol>
                      <ol>  2.	Torsion Testing Machine (60Nm)</ol>
                      <ol>  3.	Compression Testing Machine (2000kN)</ol>
                      <ol>    4.	Spring Testing Machine (2500N)</ol>
                      <ol>     5.	Impact Testing Machine (300J)</ol>
                      <ol>      6.	Vickers Hardness Tester </ol>
                      <ol>     7.	Brinell Hardness Tester </ol>
                      <ol>     8.	Rockwell Hardness Tester </ol>
                      <ol>     9.	Torsion Pendulum</ol>
                      <ol>     10.	Extensometer </ol>
                      <ol>     11.	Shear Test Attachment </ol>
                      <ol>     12.	Fatigue Testing Machine</ol>
                      <ol>     13.	Electronic Weighing Machine  </ol>                 
                                
                  </td></tr>
              </tbody>
            </table>
                
        </div>
  
        <div>
            <HeadingTwo data={this.Labname5} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup5}></BodyOneJustified>
            <p></p>     
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>   

                  <ol>     1. Shrinkage Limit Set </ol>
                  <ol>      2. Sieve Sets</ol>
                  <ol>     3. Unconfined Compression Testing Machine </ol>
                  <ol>     4. Hot Air Oven</ol>
                  <ol>     5. Lab Permeability Apparatus </ol>
                  <ol>      6. Vane Shear Test Apparatus</ol>
                  <ol>      7. Sand pouring cylinder apparatus </ol>
                  <ol>     8. Core Cutter</ol>
                  <ol>     9. Direct Shear Test Apparatus </ol>
                  <ol>     10. Consolidation Apparatus</ol>
                  <ol>       11. Triaxial Machine </ol>
                  <ol>     12. Sieve Shaker</ol>
                  <ol>     13. High Speed Stirrer </ol>
                  <ol>     14. Compaction Apparatus</ol>
                  </td></tr>
              </tbody>
            </table>
        </div>
  
        <div>
            <HeadingTwo data={this.Labname6} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup6}></BodyOneJustified>
            <p></p>     
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>   
         
                  <ol>        1. Portable Platform Scale </ol>
                  <ol>        2. Compaction Factor Apparatus </ol>
                  <ol>        3. Lateral Extensometer </ol>
                  <ol>      4. Vee Bee Consistometer</ol>
                  <ol>      5. Longitudinal Compressometer </ol>
                  <ol>      6. Flexure Testing machine (100 KN)</ol>
                  <ol>      7. Vibrating Table Lab </ol>
                  <ol>      8. Concrete Mixer Drum Type </ol>
                  <ol>      9. Compression Testing Machine (3000 KN) </ol>
                  <ol>      10. Vibration Machine </ol>
                  <ol>      11. Concrete Test Hammer </ol>
                  <ol>      12. Hot Air Oven </ol>
                  <ol>      13. Tile Flexural Test Machine (200kg)</ol>
                  <ol>      14. Bulk Density Measures </ol>
                  <ol>      15. IS Sieve Shaker </ol>
                  </td></tr>
              </tbody>
            </table>
          </div>
  
        <div>
            <HeadingTwo data={this.Labname7} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup7}></BodyOneJustified>
            <p></p>     
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>   
         
                  <ol>        1. Portable Platform Scale </ol>

                  <ol>         1. Los Angeles Abrasion Testing Machine </ol>
                  <ol>        2. Cylindrical Metal Measures including 3 litres, 15 litres and 30 litres</ol>
                  <ol>        3. Aggregate Impact Tester </ol>
                  <ol>        4. Marshall Apparatus</ol>
                  <ol>        5. Crushing Value Apparatus </ol>
                  <ol>        6. Centrifuge Extractor</ol>
                  <ol>        7. Standard Tar Viscometer </ol>
                  <ol>        8. Automatic Compactor</ol>
                  <ol>        9. Ductility Testing Machine </ol>
                  <ol>        10. CBR Testing Machine</ol>
                  <ol>        11. Ring and Ball Apparatus </ol>
                  <ol>        12. Asphalt Mixer</ol>
                  <ol>        13. Universal Penetrometer with Bitumen Penetration Kit </ol>
                  <ol>        14. IS Sieves (20 cm and 30 cm dia)</ol>
                  <ol>        15. Hot Air Oven </ol>
                  <ol>        16. Electronic balance of 200 kg Capacity</ol>
                  <ol>        17. Water Bath (Ring Type) </ol>
                  <ol>        18. Electronic balance of 60 g Capacity</ol>
                  <ol>        19. Merlin apparatus</ol>
                   </td></tr>
              </tbody>
            </table>
           </div>
  

        <div>
            <HeadingTwo data={this.Labname8} />
            {/*<ImageOne data={this.Labimage8} />*/}
            <p></p>
            <BodyOneJustified data={this.Labwriteup8}></BodyOneJustified>
            <p></p>     
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>   

                  <ol>      1. Autoclave</ol>
                  <ol>  2. B.O.D Incubator</ol>
                  <ol>  3. Digital Nephelo/Turbidity Meter</ol>
                  <ol>  4. Jar Test Apparatus </ol>
                  <ol>  5. Imhoff Cones</ol>
                  <ol>  6. Magnetic Stirrer</ol>
                  <ol>  7. Muffle Furnace </ol>
                  <ol>  8. UV-VIS Digital Spectrophotometer </ol>
                  <ol>  9. Water Bath </ol>
                  <ol>  10. Chloroscope </ol>
                  <ol>  11. COD Apparatus </ol>
                  <ol>  12. Dessicator </ol>
                  <ol>  13. Distilled Water Unit </ol>
                  <ol>  14. Conductivity -TDS Analyser</ol>
                  <ol>  15. Hot air oven</ol>
                  <ol>  16. Hot Plate</ol>
                  <ol>  17. M.P.N. Incubator</ol>
                  <ol>  18. pH Meter</ol>
                  <ol>  19. Refrigerator</ol>
                  <ol>  20. Weighing Balance</ol>

                   </td></tr>
              </tbody>
            </table>
        </div>
  
   
        {/* <Bodythree data={this.DeptLibDescriptionOne} />
        <Bodythree data={this.DeptLibDescriptionTwo} />
        <Bodythree data={this.DeptLibDescriptionThree} />
        <Bodythree data={this.DeptLibDescriptionFour} />
        <Bodythree data={this.DeptLibDescriptionFive} />
        <Bodythree data={this.DeptLibDescriptionSix} /> */}
      </div>
    );
  }
}

export default Library;
