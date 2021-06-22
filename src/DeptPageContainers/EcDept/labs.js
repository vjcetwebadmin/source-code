import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import ImageOne from "../../Components/Images/ImageOne";
import "../../Components/Tables/tableformat.css";
class Labs extends Component {
  state = {};
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  DeptLibHeading = {
    instanceID: "DeptLibHeading",
    title: "Department Labs"
  };
  ICLabHeading = {
    instanceID: "ICLabHeading",
    title: "INTEGRATED CIRCUITS LAB"
  };
  MCLabHeading = {
    instanceID: "MCLabHeading",
    title: "MICROCONTROLLER & SYSTEMS LAB"
  };
  COMMLabHeading = {
    instanceID: "COMMCLabHeading",
    title: "COMMUNICATION LAB-1"
  };
  ProjLabHeading = {
    instanceID: "ProjLabHeading",
    title: "Project Lab"
  };
  CircLabHeading = {
    instanceID: "CircLabHeading",
    title: "CIRCUITS LAB-I"
  };
  Comm2LabHeading = {
    instanceID: "Comm2LabHeading",
    title: "COMMUNICATION LAB-II"
  };
  Cir2LabHeading = {
    instanceID: "Cir2LabHeading",
    title: "CIRCUITS LAB II"  
  };
  EmbdLabHeading = {
    instanceID: "EmbdLabHeading",
    title: "EMBEDDED SYSTEM LAB"
  };

  VlsiLabHeading = {
    instanceID: "VlsiLabHeading",
    title: "VLSI DESIGN LAB"
  };

  EClabImage1 = {
    instanceID: "EClabImage1",
    image: "DepartmentImages/EC/LABS/circuitlab1.jpg",
    width: "80%"
  };
  EClabImage2 = {
    instanceID: "EClabImage2",
    image: "DepartmentImages/EC/LABS/circuitlab2.jpg",
    width: "80%"
  };
  EClabImage3 = {
    instanceID: "EClabImage3",
    image: "DepartmentImages/EC/LABS/commulab1.jpg",
    width: "80%"
  };
  EClabImage4 = {
    instanceID: "EClabImage4",
    image: "DepartmentImages/EC/LABS/commulab2.jpg",
    width: "80%"
  };
  EClabImage5 = {
    instanceID: "EClabImage5",
    image: "DepartmentImages/EC/LABS/integratedlab.jpg",
    width: "80%"
  };
  EClabImage6= {
    instanceID: "EClabImage6",
    image: "DepartmentImages/EC/LABS/microcontroller.jpg",
    width: "80%"
  };

  Labdesc1 = {
    instanceID: "Labdesc1",
    title:
      "Circuits-I Lab is equipped with advanced and state-of the-art equipment like DSO, CRO, Dual Power Supply, Signal Generator, Decade Resistance Box, Decade Inductance Box etc. from reputed manufacturers. This lab is well designed to provide adequate space and convenience to the students and the Lab is equipped with sufficient number of components well enough to accommodate 3 students per group for doing an experiment, so that student’s get the best exposure and confidence. Circuits-I lab facilitate the enhancement of the skills in Electronic Circuits Design for third and fourth semester students. The characteristics and applications of all basic electronic devices can be studied. Using these devices, Electronic circuits like amplifiers, Oscillators, multivibrators, voltage Regulators etc. can be constructed and can be checked."
  };

  Labdesc2 = {
    instanceID: "Labdesc2",
    title:
      "Circuits-II Lab is equipped with state-of the-art equipment like CRO, Dual Power Supply, Signal Generator, Soldering Station, Q Meter, Audio System, and Drilling Machine etc. from reputed manufacturers. This Lab is equipped with sufficient number of components well enough to accommodate 3 students per group for doing an experiment, so that students get the best exposure and confidence."
  };

  Labdesc3 = {
    instanceID: "Labdesc3",
    title:
      "The Integrated circuits lab provides an opportunity for the students to study the characteristics of linear ICs like Op-Amps, Timers, PLL etc. and Digital IC's like 74XX series. The lab is equipped with Digital trainer kits, Digital LCR-Q Meter, Oscilloscopes, Power supplies, Function generator etc. Application experiments using the above ICs are also performed in this lab."
  };


  Labdesc4 = {
    instanceID: "Labdesc4",
    title:
      "This lab is used by the students to conduct practical pertaining to their mini project and hobby ideas. This lab is equipped with advanced and state-of the-art equipment like CRO, DSO, Dual Power Supply, Signal Generator etc. from reputed manufacturers. This lab provides an opportunity for the students to implement their own idea and make it a final product using the provided GSM modules, GPS modules etc."
  };

  Labdesc5 = {
    instanceID: "Labdesc5",
    title:
      "This laboratory provides the students an opportunity to work on communication area. Latest equipment like high bandwidth Digital Storage Oscilloscopes, multiple power supplies etc. are available in the lab besides training kits for studying the various communication techniques. Microwave antennas, dipole antennas, phase shifters, filters, Optical Fiber Educational kit, Satellite Communication trainer are some such components. Photo lithography unit with developing and etching facility along with shearing, drilling and soldering units are arranged for the purpose of building custom printed PCBs in this lab."
  };


  Labdesc6 = {
    instanceID: "Labdesc6",
    title:
      "The systems lab provides students with a variety of tools which support their curricular and co-curricular activities. Signal processing and hardware programming labs are conducted here as a part of curriculum. This lab is equipped with all the equipment for doing software and hardware experiments with a microcomputer system. Assembly language programming, simple input/output interfacing, and interrupt processing in microcomputer systems can be done in this lab."
  };


  Labdesc7 = {
    instanceID: "Labdesc7",
    title:
      "The primary purpose of the Project Lab in ECE Dept. is to provide the space and resources needed by students to complete their Main Project, Mini Project and student’s hobby Projects. The lab also serves as a meeting location for groups of students working on team projects. Many students also use this lab to work on supplemental learning projects to enhance their understanding of class and lab assignments. The project lab is equipped with oscilloscopes, Waveform Generators, Digital Multimeters, Power supplies, PCB design equipments etc. which facilitate the students to design and etch their own circuits for their project."
  };


  Labdesc8 = {
    instanceID: "Labdesc8",
    title:
      "Embedded Systems lab is equipped with 20 HP computer systems and microcontroller kits. The lab is utilized by Students of final year B Tech and M Tech. The systems are loaded with software for embedded systems experiments. DSP experiments can also be performed in this lab using DSP kits by Spectrum Digital."
  };

  Labdesc9 = {
    instanceID: "Labdesc9",
    title:
      "This lab is utilized by M Tech students for their project work. Final year B Tech students can also use this lab if their project work is related to VLSI design. 17 systems with VLSI Design software is available for the students. FPGA/CPLD kits are also available in this lab."
  };   

  Labdesc10 = {
    instanceID: "Labdesc10",
    title:
      "This lab is utilized by M Tech students for their project work. Final year B Tech students can also use this lab if their project work is related to VLSI design. 17 systems with VLSI Design software is available for the students. FPGA/CPLD kits are also available in this lab."
  };
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLibHeading} />
        <p style={{textAlign:"left",fontSize:"18px"}}>• All the labs in the department are very well equipped with components and equipment required to conduct experiments given in the curriculum and beyond. </p>
        <p style={{textAlign:"left",fontSize:"18px"}}>• We have facility to use Projector in our lab.</p>
        <p style={{textAlign:"left",fontSize:"18px"}}>• All the labs are well furnished and fully air-conditioned. </p>
        <p style={{textAlign:"left",fontSize:"18px"}}>• All labs are provided with Online Uninterruptible Power Supply (UPS) and labs are equipped with speaker, fire& safety instruments and intercom.</p>
        <p style={{textAlign:"left",fontSize:"18px"}}>• The Labs have good ambiance as equipment are arranged in a way that students feel comfortable in doing experiments and individual attention can be given for all students.</p>
        <p style={{textAlign:"left",fontSize:"18px"}}>• All the labs have white board and Wi-Fi internet facility. </p>

        <HeadingTwo data={this.CircLabHeading} />
        <ImageOne data={this.EClabImage1} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc1}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
          <tr><td>DSO</td><td>10</td></tr>
          <tr><td>Function Generator</td><td>15</td></tr>
          <tr><td>Variable Power Supply</td><td>12</td></tr>
          <tr><td>Other equipment</td><td>Voltmeter (25Nos) and Ammeter (25Nos), Multimeter(2nos.), Rheostat(15nos.), Inductance Box(10nos.) and a Computer.</td></tr>
      	</tbody>
      </table>

        <HeadingTwo data={this.Cir2LabHeading} />
        <ImageOne data={this.EClabImage2} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc2}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
            <tr><td>CRO</td><td>16</td></tr>
            <tr><td>Function Generator</td><td>12</td></tr>
            <tr><td>Variable Power Supply</td><td>9</td></tr>
            <tr><td>IC Tester</td><td>1</td></tr>
            <tr><td>Rheostat</td><td>12</td></tr>
            <tr><td>Other equipments</td><td>Ammeter(15nos.), Voltmeter(15nos.), Multimeter(8nos.) and Computer(2nos.)</td></tr>
      	</tbody>
      </table>

      <HeadingTwo data={this.ICLabHeading} />
      <ImageOne data={this.EClabImage5} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc3}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
            <tr><td>Digital Trainer Kit</td><td>12</td></tr>
            <tr><td>CRO</td><td>12</td></tr>
            <tr><td>Function Generator</td><td>22</td></tr>
            <tr><td>Other equipment</td><td>Variable Power Supply (9nos.), Fixed Power Supply (8nos.), Rheostats(7nos.), Multimeters(8nos.), Desktop Computer, LVDT trainer kit(3nos.), Strain measurement trainer kit(3nos.), Strain Gauge(3nos.), Pressure measurement trainer kit(3nos.) and Air Pump(3nos.)</td></tr>
      	</tbody>
      </table>

       <HeadingTwo data={this.COMMLabHeading} />
       <ImageOne data={this.EClabImage3} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc4}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
            <tr><td>DSO</td><td>12</td></tr>
            <tr><td>Function Generator</td><td>15</td></tr>
            <tr><td>Inductance Box</td><td>20</td></tr>
            <tr><td>IC Tester</td><td>1</td></tr>
            <tr><td>Variable Power Supply</td><td>20</td></tr>
            <tr><td>Other equipment</td><td>Fixed Power Supply(2nos.), Multimeter and Series Universal Programmer</td></tr>
      	</tbody>
      </table>
       
       <HeadingTwo data={this.Comm2LabHeading} />
       <ImageOne data={this.EClabImage4} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc5}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
          <tr><td>DSO</td><td>10</td></tr>
            <tr><td>Digital Communication Trainer Kit</td><td>8</td></tr>
            <tr><td>Satellite Communication Training System</td><td>1</td></tr>
            <tr><td>Microwave Training System</td><td>3</td></tr>
            <tr><td>Antenna Trainer Kit</td><td>1</td></tr>
            <tr><td>Other equipment</td><td>Function Generator(16nos.), Variable Power Supply(12nos.), Multimeter, Computer(17nos.) and Lab VIEW software.</td></tr>
      	</tbody>
      </table>

        <HeadingTwo data={this.MCLabHeading} />
        <ImageOne data={this.EClabImage6} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc6}></BodyOneJustified></p>
        <p></p>                
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
          <tr><td>Computer</td><td>36</td></tr>
            <tr><td>DSP kit</td><td>4</td></tr>
            <tr><td>Microcontroller 8051 kit</td><td>13</td></tr>
            <tr><td>Microcontroller 8085 kit</td><td>16</td></tr>
            <tr><td>PAL/GAL trainer kit</td><td>2</td></tr>
            <tr><td>Other equipment</td><td> LCD Projector, CRO(4nos.), 8086kit and 89C51 Microcontroller development board.</td></tr>

      	</tbody>
      </table>
      
        
         <HeadingTwo data={this.ProjLabHeading} />
        <p></p>
        <p><BodyOneJustified data={this.Labdesc7}></BodyOneJustified></p>    
        <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
          <tr><td>DSO</td><td>1</td></tr>
          <tr><td>CRO</td><td>3</td></tr>
          <tr><td>Digital Trainer Kit</td><td>1</td></tr>
          <tr><td>Computer</td><td>3</td></tr>
          <tr><td>Variable DC Power Supply</td><td>5</td></tr>
          <tr><td>Function Generator</td><td>3</td></tr>
      	</tbody>
      </table>
       
       <HeadingTwo data={this.EmbdLabHeading} />
       <p></p>
        <p><BodyOneJustified data={this.Labdesc8}></BodyOneJustified></p>    
       <table id="tableformat">
	      <tbody>
		      <tr><th style={{width:"20%"}}>Equipment</th><th>Quantity</th></tr>
          <tr><td>Computer</td><td>20</td></tr>
          <tr><td>ARM Microcontroller</td><td>4</td></tr>
          <tr><td>Xilinx Software</td><td>15</td></tr>
          <tr><td>DSP Kit</td><td>3</td></tr>
          <tr><td>CPLD/FPGA Kit</td><td>3</td></tr>
      	</tbody>   
      </table>

      <HeadingTwo data={this.VlsiLabHeading} />
       <p></p>
        <p><BodyOneJustified data={this.Labdesc10}></BodyOneJustified></p>    

      </div>
    );
  }
}

export default Labs;
