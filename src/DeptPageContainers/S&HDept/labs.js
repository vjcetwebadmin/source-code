import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
/* import Bodythree from "../../Components/Texts/BodyThree"; */
import "../../Components/Tables/tableformat.css";
class Labs extends Component {
  state = {};
  DeptLabHeading = {
    instanceID: "DeptLabHeading",
    title: "Department Labs"
  };
  

  Labname1 = {
    instanceID: "Labname1",
    title: "ENGINERING CHEMISTRY LAB"
  };
  Labimage1 = {
	instanceID: "Labimage1",
	image: "DepartmentImages/CE/LABS/Labname1.JPG",
	width: "80%"
  }
  Labwriteup1 = {
    instanceID: "Labwriteup1",
    title: "Engineering Chemistry Lab consists of Potentiometer, Conductivity meter ,PH    meter and several other apparatus useful for students to conduct their laboratory experiments. Students get an indepth knowledge about different experiments through these lab sessions. The lab is mainly utilized by first year students of all departments.  lab is well lit and properly ventilated.  The batch size o this lab is 32."
  }; 


  Labname2 = {
    instanceID: "Labname2",
    title: "ENGINERING CHEMISTRY LAB"
  };
  Labimage2 = {
	instanceID: "Labimage2",
	image: "DepartmentImages/CE/LABS/Labname2.JPG",
	width: "80%"
  }
  Labwriteup2 = {
    instanceID: "Labwriteup2",
    title: "Engineering Chemistry Lab consists of Potentiometer, Conductivity meter, pH    meter and several other apparatus useful for students to conduct their laboratory experiments. Students get an indepth knowledge about different experiments through these lab sessions. The lab is mainly utilized by first year students of all departments.  Lab is well lit and properly ventilated.  The batch size of this lab is 32."
  }; 


  Labname3 = {
    instanceID: "Labname1",
    title: "ENGINEERING PHYSICS LAB"
  };
  Labimage3 = {
	instanceID: "Labimage3",
	image: "DepartmentImages/CE/LABS/Labname3.JPG",
	width: "80%"
  }
  Labwriteup3= {
    instanceID: "Labwriteup3",
    title: "Theory and experiment go hand in hand. The basic focus of Engineering Physics Lab is to make the students gain practical knowledge and enable students to understand fundamentals of Engineering Physics. The lab is well equipped with all the apparatus required as per the curriculum.  The lab is mainly utilized by first year students of all branches. The batch size of the lab is 32."
  }; 



  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLabHeading} />
        {/*<div>
            <HeadingTwo data={this.Labname1} />
            {/*<ImageOne data={this.Labimage8} />
            <p></p>
            <BodyOneJustified data={this.Labwriteup1}></BodyOneJustified>
            <p></p>     
         </div>*/}
  
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
                     <ol> DIGITAL POTENTIOMETER: Equiptronics, 500RPM, 1.018V, 230V</ol>
                     <ol> DIGITAL CONDUCTIVITY METER: Hanna instruments, Automatic,240V</ol>
                     <ol> DIGITAL CONDUCTIVITY METER: Analab, Automatic & Manual, 240V</ol>
                     <ol> DIGITAL pH METER: Analab, Manual, 0 – 14 pH, 230V</ol>
                     <ol> PHOTOMETER: Elico Ltd, Spectral range :  450nm – 670nm, Photo diode, Solid state, 260V</ol>
                     <ol> DIGITAL FLAME PHOTOMETER: Analab , Range : Na, K, Ca & Li, Silicon photo diode, 230V</ol>
                     <ol> PENSKY MARTENS APPARATUS: Ambica Scientifics, Flash point range : 300 C - 3000 C, 1 – 2 rev/sec, 220V</ol>
                     <ol> ELECTRONIC BALANCE: Scale - Tec, Capacity: 200g , 240V</ol>
                     <ol> HOT AIR OVEN: Rotek, 95Ltr , Temp.range : 50 C - 2000 C, 230V</ol>
                     <ol> ALL GLASS DISTILLATION UNIT: Lab - Sil ,4Ltr/hr, Silica heater ,230V, 50Hz</ol>
                 
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
            <table id="tableformat">
              <tbody>
                  <tr>
                    <td>List of Equipments</td>
                  </tr>
                  <tr><td>  
                      <ol> LASER BEAM APPARATUS: - Scientific Enterprises, Diode laser- 650nm, 5mW, 3/12 V DC, 100mA, Diffraction Grating-100 lines/mm, 300 lines/mm, 500 lines/mm</ol>
                      <ol>  MELDE’S STRING APPARATUS: - Scientific Enterprises, 2 to 12V DC, Electrically Driven Tuning Fork</ol>
                      <ol>  NEWTON’S RINGS APPARATUS: - Scientific Enterprises, Sodium Vapour Lamp – 35W, Transformer i/p – 220 VOLTS A.C, W- 35 to 55, Travelling Microscope-AE 107</ol>
                      <ol>  CATHODE RAY OSCILLOSCOPE: - Amity Solutions, 30 MHZ, 2 Channel, Function Generators – 3MHZ, Power-230V,50HZ, 36 to 40 VA</ol>
                      <ol>  SOLAR CELL APPARATUS: - Scientific Enterprises, 0 to 30mA, 0 to 600 mV, 0.1 to 1Kohm</ol>
                      <ol>  SPECTROMETER GRATING: - Scientific Enterprises, Spectrometer, Mercury Vapour Lamp – 125W, Diffraction Grating-2500 lines/mm</ol>
                      <ol>  LIGHT EMITTING DIODE APPARATUS: - Xeltronix, DC 0-5V, 100mA</ol>
                      <ol>  NUMERICAL APERTURE AND BENDING LOSSES: - Kamaljeeth Instruments, Diode laser 650nm, Power – 2mW, Optical Voltmeter - 0-2V</ol>
                      <ol>  DEFLECTION MAGNETOMETER: - Kamaljeeth Instruments</ol>
                  
                </td></tr>
                  </tbody>
                </table>
        </div>
      </div>
    );
  }
}

export default Labs;