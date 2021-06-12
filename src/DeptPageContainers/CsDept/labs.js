import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
/* import Bodythree from "../../Components/Texts/BodyThree"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import ImageOne from "../../Components/Images/ImageOne";
import "../../Components/Tables/tableformat.css";
class Library extends Component {
  state = {};
  DeptLabHeading = {
    instanceID: "DeptLabHeading",
    title: "Department Labs"
  };
  AdvdatabaseLabHeading = {
    instanceID: "AdvdatabaseLabHeading",
    title: "Advanced Operating System & Database Lab"
  };
  AdvdatabaseLabImagedata = {
	instanceID: "AdvdatabaseLabImage",
	image: "DepartmentImages/CS/LABS/DBMSLAB.JPG",
	width: "80%"
}
  PGProjLabHeading = {
    instanceID: "PGProjLabHeading",
    title: "PG Project Lab"
  };
  PGProjLabImagedata = {
	instanceID: "PGProjLabImage",
	image: "DepartmentImages/CS/LABS/PGPROJLAB.JPG",
	width: "80%"
}
  ProjectLabHeading = {
    instanceID: "ProjectLabHeading",
    title: "Project Lab(UG)"
  };
  ProjLabImagedata = {
	instanceID: "ProjLabImage",
	image: "DepartmentImages/CS/LABS/PROJECTLAB.JPG",
	width: "80%"
}
  NWLabHeading = {
    instanceID: "NWLabHeading",
    title: "Network Systems Lab"
  };
  NWImagedata = {
	instanceID: "NWLabImage",
	image: "DepartmentImages/CS/LABS/NWLAB.JPG",
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
  DeptLibDescriptionOne = {
    instanceID: "DeptLibDescriptionOne",
    title:
      "The Department of Computer Science and Engineering maintains a books enriched library where its primary aim is to support the student of the institution for education.  The Library was established in 2006.  The library has a collection of more than 600 books. Besides books the Library possesses B.Tech project and seminar reports, Monographs, Lab Manuals, Question papers, CD-ROMs, Internet facility. The departmental library serve the academic disciplines bearing their names. "
  };
  DeptLibDescriptionTwo = {
    instanceID: "DeptLibDescriptionTwo",
    title:
      "The collection is strong in all aspects with special strengths in C programming, Software Engineering, Automata Theory, System Programming, Computer Architecture and Organization, Data Structures, Microprocessors, Database Management System and also books on  Digital Electronics, Humanities, Management."
  };
  DeptLibDescriptionThree = {
    instanceID: "DeptLibDescriptionThree",
    title:
      "It has a carpet area of about 500 square feet. The library opens from 8.45 a.m. to 4.30 p.m. except Saturdays and Sundays. The library collection is arranged subject-wise. The library is maintaining records of all Purchased/Donated books, CDS, Seminar Reports/Project Reports/Magazines/Monographs/Lab Manual/Previous Year Question Papers. Members can search and view the status (Available/Not Available) of each searched item through the software.  The library is also maintaining all Issue/Deposit/Fine reports and it will be periodically updates at the end of each semesters."
  };


  ProjLabUGwriteup1 = {
	instanceID: "ProjLabUGwriteup1",
	title: "This laboratory is specially designed for the Computer Science and Engineering department to facilitate the students to do their mini and major projects inside the campus. It has 35 computers. All are networked and well furnished. The projects done by the Computer Science and Engineering Students are in–house projects. Projects vary from System software and Application software development, design and optimization of new algorithms, database projects, graphics application development. This laboratory in the department is made available to all faculty and students for their research and project activities."
};
MultimediaUGwriteup2 = {
	instanceID: "MultimediaUGwriteup2",
	title: "The lab is equipped with sufficient number of computers well enough to accommodate each student	having separate computers for doing programs, so that student’s get the best exposure and confidence.	This lab is mainly used by first year undergraduate students for their basic programming lab such as	Python programming in first semester and C programming in second semester. Developer C++ and	Python programming Language are used to familiarize programming basics."
};

HardwareUGwriteup3 = {
	instanceID: "HardwareUGwriteup3",
	title: "Hardware Lab is equipped with facilities to help the students to familiarize with the PC Components. It also helps to train the students in assembling and disassembling PCs. System Level Programming with C and MASM is also incorporated in this lab."
};
NetworkUGwriteup4 = {
	instanceID: "NetworkUGwriteup4",
	title: "The lab is well equipped with 33 computers that facilitate to train students about network configuration and management. This lab is used for socket programming between client and server in a network scenario using different network protocols. It is also equipped with softwares to develop the knowledge about database design and implementation using RDBMS. This lab is mainly utilized by students of Semester II (Computer Programming Lab), Semester III(Data Structures Lab), Semester IV(FOSS Lab), Semester V(Database Lab),  and Semester VI (Network Programming Lab)."
};
MicroUGwriteup5 = {
	instanceID: "MicroUGwriteup5",
	title: "The Micro Processor Lab is one of the oldest laboratories in the institution under the Department of Computer Science & Engineering. A well-equipped Microprocessor Lab with advanced facilities to do their experiments are provided in this laboratory. We are using Micro-86 EB1 Trainer Kit, Intel 8086/8088 CPU at 5/4.77 MHz clock rate. The device has 40 pins, + 5 V power supply with 16×2 LCD DISPLAY and having 48 I/O lines using two numbers of 8255. It can access upto 1 GB of physical memory. This is to familiarize the students with 8086, MASM programming, and 8051 Microcontroller trainer kit and various interfacing boards."
};

MicroUGwriteup6 = {
	instanceID: "MicroUGwriteup6",
	title: "This lab is dedicated for M. Tech students to work on practical experiments related to courses such as Computer Networks, Wireless Networks,Mobile Communications. Network systems lab is well equipped with 15 computers. This lab is to provide an exposure to the students with hands on experience on various simulator tools like NS2, NS3 and packet analyzers such as Wireshark."
};
MicroUGwriteup7 = {
	instanceID: "MicroUGwriteup7",
	title: "The lab is dedicated for M.Tech students to develop their minor project and thesis work. The lab provides all necessary facilities to promote multi-disciplinary projects.  Also the M.Tech students utilizes this lab for research work and paper publications."
};
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingOne data={this.DeptLabHeading} />
      <div>
        <HeadingTwo data={this.AdvdatabaseLabHeading} />
		<ImageOne data={this.AdvdatabaseLabImagedata} />
		<p></p>
		<p><BodyOneJustified data={this.ProjLabUGwriteup6}></BodyOneJustified></p>
		<p></p>       
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>PG Lab 1</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>15</td>
	       </tr>
	       <tr>
		          <td>Configuration</td>
	        	  <td>HP DX2480 Intel Core2Duo Processor 2 GB DDR2 RAM , 250 GB Sata HDD</td>
	       </tr>
	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Window 7, Java, Developer C, Ubuntu</td>
	      </tr>	
      	</tbody>
      </table>
      </div>
      <div>
        <HeadingTwo data={this.PGProjLabHeading} />
		<ImageOne data={this.PGProjLabImagedata} />
		<p></p>
		<p><BodyOneJustified data={this.ProjLabUGwriteup7}></BodyOneJustified></p>
		<p></p>        
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>PG Project Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>10</td>
	       </tr>
	       <tr>
		          <td>Configuration</td>
	        	  <td>HP Compaq DX3090 MT Intel Core2Duo Processor 2 GB DDR2 RAM , 250 GB Sata HDD</td>
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
		<p><BodyOneJustified data={this.ProjLabUGwriteup1}></BodyOneJustified></p>
		<p></p>
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>Project Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>35</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>29 X DELL 54JIT72, INTEL CORE i5 PROCESSOR, 4 GB RAM, 500 GB HDD</td>
	       </tr>
	       <tr>
		          <td>Configuration</td>
	        	  <td>6 X HP 280 GI MT BUSINESS PC INTEL i5 PROCESSOR,4 GB RAM,1 TB HDD</td>
	       </tr>
	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Window 7, .Net 2008, SQL Server 2008, Developer C, Perl 5.26</td>
	      </tr>	
      	</tbody>
      </table>
      </div>
      <div>
        <HeadingTwo data={this.NWLabHeading} />
        <ImageOne data={this.NWImagedata} />
		<p></p>
		<p><BodyOneJustified data={this.NetworkUGwriteup4}></BodyOneJustified></p>
		<p></p>
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>NW Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>33</td>
	       </tr>
         <tr>
		          <td>Configuration</td>
	        	  <td>HP ELITE T100 MT INTEL i3 3.2 GH, 2 GB RAM ,250 GB HDD</td>
	       </tr>
	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Windows 7, .Oracle, C and Java , Developer C, Perl 5.26</td>
	      </tr>	
      	</tbody>
      </table>
      </div>
	  <div>
        <HeadingTwo data={this.MMLabHeading} />
        <ImageOne data={this.MMImagedata} />
		<p></p>
		<p><BodyOneJustified data={this.MultimediaUGwriteup2}></BodyOneJustified></p>
		<p></p>
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>MM Lab</td>
	       </tr>
	       <tr>
		          <td>No of systems/ capacity</td>
		          <td>36</td>
	       </tr>
         	<tr>
		          <td>Configuration</td>
	        	  <td>30 X HP Pro-3090 MT Desktop , Intel Core2Duo 2.93 GHz 2 GB DDR3, 250 GB HDD</td>
	       </tr><tr>
		          <td>Configuration</td>
	        	  <td>2 X HP COMPAQ dx 2700 Intel Core2  1.83 GHz 512 MB DDR2, 80 GB HDD</td>
	       </tr>
		   <tr>
		          <td>Configuration</td>
	        	  <td>2 X HP COMPAQ dx7400 MT- Intel Core2Duo 2.53 GHz 1 GB DDR2, 80 GB HDD</td>
	       </tr>
		   <tr>
		          <td>Configuration</td>
	        	  <td>2 X HP COMPAQ dx7400 MT- Intel Core2Duo 2.53 GHz 1 GB DDR2, 80 GB HDD</td>
	       </tr>

	       <tr>
	        	  <td>Licensed software using</td>
		          <td>Windows 7, Ubuntu, Oracle9i, Java , Developer C, Perl 5.26, NetBeans IDE, Eclipse, MySQL 5.5.8 </td>
	      </tr>	
      	</tbody>
      </table>
      </div>
	  <div>
	  <HeadingTwo data={this.HWLabHeading} />
	  <ImageOne data={this.HWImagedata} />
	  <p></p>
	  <p><BodyOneJustified data={this.HardwareUGwriteup3}></BodyOneJustified></p>
		<p></p>
		<table id="tableformat">
		   <tbody>
			   <tr>
				   <td>Lab code</td>
				   <td>HW Lab</td>
			</tr>
			<tr>
				   <td>No of systems/ capacity</td>
				   <td>34</td>
			</tr>
		  <tr>
				   <td>Configuration</td>
				   <td>33 X Intel Core 2 Duo,  2 GB RAM DDR2, 250 GB HDD</td>
			</tr>
			<tr>
				   <td>Configuration</td>
				   <td>1 X HP Elite 7100 Intel Core i3 Processor, 2GB DDR3 RAM, 250 GB Sata HDD,</td>
			</tr>
			<tr>
				   <td>Licensed software using</td>
				   <td>Window 7, .Net 2008, SQL Server 2008, Developer C, Perl 5.26</td>
		   </tr>	
		   </tbody>
	   </table>
	   </div>
	   <div>
        <HeadingTwo data={this.MPLabHeading} />
        <ImageOne data={this.MPImagedata} />
		<p></p>
		<p><BodyOneJustified data={this.MicroUGwriteup5}></BodyOneJustified></p>
		<p></p>
       <table id="tableformat">
	      <tbody>
		      <tr>
	          	<td>Lab code</td>
		          <td>MP Lab </td>
	       </tr>
	       
	       <tr>
		          <td>Components</td>
	        	  <td>
					  
						  <ol> 20 X MICROPROCESSOR KIT , MODEL - VI MICROSYSTEMS MICRO 85 EB </ol>
						  <ol> 2 X DIGITALTO ANALOG CONVERTER INTERFACE BOARD , MODEL - VI MICROSYSTEMS</ol>
						  <ol> 2 X ANALOG TO DIGITAL CONVERTER INTERFACE BOARD ,MODEL - VI MICROSYSTEMS</ol>
						  <ol> 4 X TRAFFIC LIGHT CONTROLLER INTERFACE  BOARD , MODEL-  VI MICROSYSTEMS</ol>
						  <ol> 3 X 8237 INTERFACE BOARD,  MODEL - VI MICROSYSTEMS</ol>
						  <ol> 2 X MULTIPLEXER INTERFACE BOARD,  MODEL -  VI MICROSYSTEMS</ol>
						  <ol> 2 X 8279 DISPLAY INTERFACE BOARD , MODEL –VI MICROSYSTEMS</ol>
						  <ol> 2 X VGA CARD INTERFACE BOARD , MODEL – VI MICROSYSTEMS</ol>
						  <ol> 3 X 8255 INTERFACE BOARD , MODEL – VI MICROSYSTEMS </ol>
						  <ol> 10 X STEPPER MOTOR INTERFACE BOARD  WITH 5V, 1.8 DEGREE STEPPING MOTOR , VIMICROSYSTEMS</ol>
						  <ol> EPROM PROGRAMMER CARD , MODEL – VI MICROSYSTEMS</ol>
						  <ol> 8257 INTERFACE BOARD , MODEL – VI MICROSYSTEMS</ol>
						  <ol> 2 X ELEVATOR SIMULATOR INTERFACE BOARD , MODEL – VI MICROSYSTEMS</ol>
						  <ol> 14 POWER SUPPLY DC 30 V  </ol>
						  <ol> 2 X WIRELESS ACCESS POINT , MODEL – LINKSYS WIRELESS – B </ol>
						  <ol> 4 X QUICK PROG PROGRAMMER CARD   </ol>
						  <ol> 5 X OCL DB87 RUNBOARD  </ol>
						  <ol> GPS KIT WITH MOTHERBOARD </ol>
						  <ol> GSM MODEM WITH ANTENNA</ol>
						  <ol> 20 X MICROPROCESSOR KIT , MODEL VI MICROSYSTEMS </ol>
	
					  
				   </td>
	       </tr>
	       
      	</tbody>
      </table>
      </div>

        {/* <Bodythree data={this.DeptLibDescriptionOne} />
        <Bodythree data={this.DeptLibDescriptionTwo} />
        <Bodythree data={this.DeptLibDescriptionThree} /> */}
      </div>
    );
  }
}

export default Library;
