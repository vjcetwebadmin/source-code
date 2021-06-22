import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
/* import Bodythree from "../../Components/Texts/BodyThree"; */
import "../../Components/Tables/tableformat.css";
class Library extends Component {
  state = {};
  DeptLabHeading = {
    instanceID: "DeptLabHeading",
    title: "Department Labs"
  };
  DBMSLabHeading = {
    instanceID: "DBMSLabHeading",
    title: "DBMS Lab"
  };
  DBMSImagedata = {
	instanceID: "DBMSLabImage",
	image: "DepartmentImages/IT/LABS/DBMSLab.JPG",
	width: "80%"
}
  ProgrammingLabHeading = {
    instanceID: "ProgrammingLabHeading",
    title: "Programming Lab"
  };
  ProgrammingLabImagedata = {
	instanceID: "ProgrammingLabImage",
	image: "DepartmentImages/IT/LABS/ProgrammingLab.JPG",
	width: "80%"
}
  ProjectLabHeading = {
    instanceID: "ProjectLabHeading",
    title: "Project Lab"
  };
  ProjLabImagedata = {
	instanceID: "ProjLabImage",
	image: "DepartmentImages/IT/LABS/ProjectLab.JPG",
	width: "80%"
}
  DCLabHeading = {
    instanceID: "DCLabHeading",
    title: "Data Communication Lab"
  };
  DCImagedata = {
	instanceID: "DCLabImage",
	image: "DepartmentImages/IT/LABS/DCLab.JPG",
	width: "80%"
}
  MMLabHeading = {
    instanceID: "MMLabHeading",
    title: "Multimedia Lab"
  };
  MMImagedata = {
	instanceID: "MMLabImage",
	image: "DepartmentImages/CS/LABS/MMLAB.JPG",
	width: "80%"
}
  HWLabHeading = {
    instanceID: "HWLabHeading",
    title: "Hardware Lab"
  };
  HWImagedata = {
	instanceID: "HWLabImage",
	image: "DepartmentImages/CS/LABS/HWLAB.JPG",
	width: "80%"
}
  MPLabHeading = {
    instanceID: "MPLabHeading",
    title: "Microprocessor Lab"
  };
  MPImagedata = {
	instanceID: "MPLabImage",
	image: "DepartmentImages/CS/LABS/MPLAB.JPG",
	width: "80%"
}


dbmswriteup = {
	instanceID: "ProjLabUGwriteup1",
	title: "The lab is well designed to provide adequate space and convenience to the students, so that student’s get the best exposure and confidence. It is equipped with modern systems to develop the knowledge about database design and implementation using RDBMS. Students can be practically capable to manage the real life applications by implementing and deploying web applications using Servlets, HTML and JSPs. DBMS lab is used to provide experience on design, testing, and analysis of Algorithms and Data Structures. It is used by students of various semesters for doing language programming, web application development, networking and database management."
};
programminwriteup = {
	instanceID: "MultimediaUGwriteup2",
	title: "The lab is well equipped with facilities to train students about network configuration and management, client server applications. It is used for socket programming between client and server in a network scenario using TCP/IP protocol. System level Programming like MASM also incorporated in this lab. It is also used for Python Programming by first semester students in Linux platform. The software Packet Tracer is used for simulation of network programs. Students can be practically capable to manage the real life applications by implementing and deploying web applications using Servlets, HTML and JSP. This lab is used by students of various semesters for doing language programming, web application development and also for networking."
};

datacommwriteup = {
	instanceID: "HardwareUGwriteup3",
	title: "The lab is well equipped with facilities to train students to do their analog and digital electronic circuit experiments. This lab is used for designing different oscillator circuits, wave shaping circuits and amplifier using active and passive components. Digital IC training kit is made available for designing various combinational and sequential circuits."
};
projectwriteup = {
	instanceID: "HardwareUGwriteup3",
	title: "Project lab is mainly used by students of third year and fourth year to do their academic projects and faculty members can also do their research related works. The lab is also used to do database projects, application software development, open ended experiments etc."
};
 
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLabHeading} />
        <div>
        <HeadingTwo data={this.DBMSLabHeading} />
		<ImageOne data={this.DBMSImagedata} />
    <p></p>
		<BodyOneJustified data={this.dbmswriteup}></BodyOneJustified>
		<p></p>        
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>DBMS Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>36</td>
	       </tr>
	       <tr>
		          <td>Configuration</td>
	        	  <td>31 X HP DX2480 C2D2.93GHz</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>5  X HP DX7400 Core2 Duo 2.53GHz</td>
	       </tr>
	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Window 7, Ubuntu, Phython, Java, Visual Studio 2008, Oracle 9i, Perl 5.26, Developer C</td>
	      </tr>	
      	</tbody>
      </table>
      </div>
      <div>
        <HeadingTwo data={this.ProgrammingLabHeading} />
		<ImageOne data={this.ProgrammingLabImagedata} />
    <p></p>
		<BodyOneJustified data={this.programminwriteup}></BodyOneJustified>
		<p></p>       
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>Programming Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>35</td>
	       </tr>
	       <tr>
		          <td>Configuration</td>
	        	  <td>30 X DELL Optiplex 3020 SFF core i53.3 GHz</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>4 X HP 280G1</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>1 X HP DX2480 C2D2.93GHz</td>
	       </tr>
	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Window 7, Ubuntu, Phython, Java, Visual Studio 2008, Oracle 9i, Perl 5.26, Developer C</td>
	      </tr>	
      	</tbody>
      </table>
      </div>
      <div>
        <HeadingTwo data={this.ProjectLabHeading} />
        <ImageOne data={this.ProjLabImagedata} />
        <p></p>
		<BodyOneJustified data={this.projectwriteup}></BodyOneJustified>
		<p></p>
           <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>Project Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>8</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>Dell Optiplex 3020, Intel core i5, 4GB RAM, 500GB HDD </td>
	       </tr>
	       
      	</tbody>
      </table>
      </div>
      <div>
        <HeadingTwo data={this.DCLabHeading} />
        <ImageOne data={this.DCImagedata} />
        <p></p>
		<BodyOneJustified data={this.datacommwriteup}></BodyOneJustified>
		<p></p>
      <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>DC Lab</td>
	       </tr>
	       <tr>
		          <td>Components</td>
	        	  <td>
					  
						  <ol>15 X Function Generator Model No.2009</ol>
						  <ol>4 X CRO Model No.3305</ol>
              <ol>5 X CRO Model No.3937R</ol>
              <ol>1 X CRO Model No.HM 1004-3</ol>
              <ol>8 X Power Supply ModelNo.F-L-0502</ol>
              <ol>8 X Power Supply ModelNoFD1501</ol>
              <ol>15 X Power Supply ModelNo.L3201</ol>
              <ol>5 X Digital Trainer Model No.ST-01LIA</ol>
              <ol>1 X Digital Analog IC Tester MME ADIT-40</ol>
              <ol>1 X Microprocessor Kit 8086</ol>
              <ol>4 X Fiber Optic Trainer Kit 2502</ol>
              <ol>1 X Digital Multimeter with LCD Meter Model No 306</ol>
              <ol>1 X Digital Multimeter</ol>
              <ol>1 X Analog Multimeter</ol>
              <ol>70 X BreadBoard</ol>
              <ol>5 X Electronic Integrated Circuit Trainer Kit DIC IA</ol>
              <ol>5 X Caddo 802 20 Mhz Dual Trace Microcontroller based Oscilloscope with built in RS232 interface & S/W with Component Tester</ol>
              <ol>6 X 10 VDC volt meter</ol>
              <ol>6 X Meco-MR 65 EDM 100mA DC Milliameter</ol>
              <ol>6 X Meco-MR 65 EDM I VDC volt meter</ol>
              <ol>8 X Meco- MR 65 EDM 10 mA DC Milliameter</ol>
              <ol>8 X Meco- MR 65 EDM 100mA Educational Desknet</ol>
              <ol>2 X Meco- MR 65 EDM 1A DC Ammeter</ol>
              <ol>20 X Rheostat 1K ohm – 5 A</ol>
              <ol>10 X CRO Probe BNC to Crocodil connector</ol>
              <ol>10 X Variable Power Supply Dual Output</ol>
              <ol>20 X 8085 Microprocessor Trainer</ol>
              <ol>4 X Keyboard & display Interface Board</ol>
              <ol>4 X 2 ChannelDAC interface board</ol>
              <ol>4 X 8 Channel ADCInterface board</ol>
              <ol>2 X 8255 Interface board</ol>
              <ol>4 X Stepper Motor Controller With Motor</ol>
              <ol>4 X LCD Interface board</ol>
              <ol>4 X Traffic Light Control System</ol>
  			   </td>
	       </tr>
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
