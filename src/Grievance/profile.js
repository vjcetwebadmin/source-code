import React, { Component } from "react";
/* import HeadingOne from "../Components/Texts/HeadingOne"
import HeadingTwo from "../Components/Texts/HeadingTwo";
import ImageOne from "../Components/Images/ImageOne";
import Bodythree from "../../Components/Texts/BodyThree"; */
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Components/Tables/tableformat.css";

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


grievwriteup = {
	instanceID: "ProjLabUGwriteup1",
	title: "VJCET Student/Staff Grievance and Redressal Policy formulated in alignment with the “All India Council for Technical  Education (Prevention and Prohibition of Ragging in Technical  Institutions, Universities including Deemed to be Universities  imparting technical education) Regulations 2009” and “UGC Regulations curbing the menace of ragging in higher educational institutions, 2009” which have been notified on 4th July, 2009 in the Gazette of India;  and revised as per the public notice issued by  APJ Abdul Kalam Technological University on “Curbing the Menace of Ragging in KTU Affiliated Technical Institutions” on 10th August, 2015. Following are the six entities functioning in parallel to realize the objectives:"
};
grievwriteup1 = {
	instanceID: "grievwriteup1",
	title: "Students Grievance Redressal Committee"
};

grievwriteup6 = {
	instanceID: "grievwriteup6",
	title: "Staff Grievance Redressal Committee"
};

grievwriteup2 = {
	instanceID: "grievwriteup2",
	title: "Student’s Welfare /Counselling Centre"
};
grievwriteup3 = {
	instanceID: "grievwriteup3",
	title: "Anti-Ragging Committee"
};

grievwriteup4 = {
	instanceID: "grievwriteup4",
	title: "Anti-Ragging Squad"
};

grievwriteup5 = {
	instanceID: "grievwriteup5",
	title: "Internal Compliance Committee"
};
 
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <BodyOneJustified data={this.grievwriteup}></BodyOneJustified>
        <p><b><BodyOneJustified data={this.grievwriteup1}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup6}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup2}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup3}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup4}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup5}></BodyOneJustified></b></p>
        <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Students Grievance Redressal / Appeal Committee</th></tr>
            <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
            <tr><td>Dr. K K Rajan</td><td>Principal</td></tr>
            <tr><td>Dr. Sony Kurian</td><td>HOD EEE</td></tr>
            <tr><td>Ms. Smitha Cyriac</td><td>HOD ECE</td></tr>
            <tr><td>Mr. Vinoj K</td><td>Associate Professor ME</td></tr>
            <tr><td>Mr. Mathukutty Manoj</td><td>Students Council Chairman</td></tr>
      	</tbody>
      </table>

      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Grievance Redressal Committee For Faculty/Staff</th></tr>
            <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
            <tr><td>Dr. K K Rajan</td><td>Principal</td></tr>
            <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
            <tr><td>University Nominee</td><td></td></tr>
            <tr><td>University/DTE nominated <br /><br />by Vice-Chancellor</td><td></td></tr>
            
      	</tbody>
      </table>

      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Students Welfare/ Counselling Centre</th></tr>
          <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
          <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
          <tr><td>Rev. Fr. Mathew Mulangacherryil</td><td>Counsellor</td></tr>
          <tr><td>Sr. Recy Varghese</td><td>Counsellor (Girls)</td></tr>
          <tr><td>Ms. Bijimol Joseph</td><td>Asst. Professor , CE</td></tr>
          <tr><td>Ms. Bency Cleetus</td><td>Asst. Professor , CSE</td></tr>
          <tr><td>Ms. Cini K.</td><td>Asso.Professor, EEE</td></tr>
          <tr><td>Mr. Anish M Jose</td><td>Asst. Professor , ECE</td></tr>
          <tr><td>Ms. Jesline Joseph</td><td>Asst. Professor , IT</td></tr>
          <tr><td>Mr. Abraham Antony</td><td>Asst. Professor , ME</td></tr>
          <tr><td>Mr. Pratheepkumar R</td><td>Asst. Professor , MBA</td></tr>

      	</tbody>
      </table>
      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">ANTI RAGGING COMMITTEE</th></tr>
          <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
            <tr><td>Dr. K. K. Rajan</td><td>Principal</td></tr>
            <tr><td>Mr. Somy P. Mathew</td><td>Vice Principal</td></tr>
            <tr><td>Dr. Shine George</td><td>HOD - CE</td></tr>
            <tr><td>Mr. Amel Austine</td><td>HOD - CSE</td></tr>
            <tr><td>Dr. Sony Kurian</td><td>HOD EEE(in-charge)</td></tr>
            <tr><td>Ms. Smitha Cyriac</td><td>HOD - ECE</td></tr>
            <tr><td>Ms. Anju Susan George</td><td>HOD - IT</td></tr>
            <tr><td>Dr. Shanmughesh K.</td><td>HOD - ME</td></tr>
            <tr><td>Mr. Biju George</td><td>HOD S&H</td></tr>
            <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
            <tr><td>Rev. Fr. Sebastian Valloppillil</td><td>Warden - Gents Hostel</td></tr>
            <tr><td>Rev. Sr. Stany</td><td>Warden - Ladies Hostel</td></tr>
            <tr><td>Mr. Shaji K.J.</td><td>SI of Police, Vazhakulam</td></tr>
            <tr><td>Ms. Selmi John</td><td>President, Avoly Grama Panchayath</td></tr>
            <tr><td>Mr. Shajan P. J.</td><td>Representative, Non Teaching Staff</td></tr>
            <tr><td>Mr. Francis George</td><td>PTA President</td></tr>
            <tr><td>Mr. Sijumon Francis</td><td>PRO</td></tr>
            <tr><td>Mr. Mathukutty Manoj</td><td>Chairman - Students Council</td></tr>
            <tr><td>Ms. Ashly Asok</td><td>Vice Chairperson - Students Council</td></tr>
            <tr><td>Mr. Felix Steephen</td><td>General Secretary - Students Council</td></tr>
            <tr><td>Mr. Bharath N</td><td>First Year Boy Representative</td></tr>
            <tr><td>Ms. Josna Joseph</td><td>First Year Girl Representative</td></tr>
            <tr><td>Mr. Rakesh Jose</td><td>NSS Co-ordinator</td></tr>
            <tr><td>Mr. Johnson P. Augustine</td><td>"Media Representative Area Manager - Deepika"</td></tr> 
      	</tbody>
      </table>
      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Anti-Ragging Squad</th></tr>
          <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
          <tr><td>Mr. Babu T. Chacko</td><td>Asst. Professor, EEE</td></tr>
          <tr><td>Dr. Sajan T John</td><td>Asso. Professor, ME</td></tr>
          <tr><td>Mr. Arun Raphel</td><td>Asst.Professor, ME</td></tr>
          <tr><td>Ms. Vinija Kurian</td><td>Asst. Professor, ECE</td></tr>
          <tr><td>Mr. Lins Paul Kuriakose</td><td>Asst.Professor, CE</td></tr>
          <tr><td>Mrs. Tintushine A.L</td><td>Asst.Professor, CE</td></tr>
          <tr><td>Mr. Joe Mathew Jacob</td><td>Asst.Professor, CSE</td></tr>
          <tr><td>Mrs. Dona Jose</td><td>Asst.Professor, CSE</td></tr>
          <tr><td>Mrs. Cini K.</td><td>Asso.Professor, EEE</td></tr>
          <tr><td>Mr. Manu Jose</td><td>Asst. Professor, ECE</td></tr>
          <tr><td>Mrs. Niji Mahtews</td><td>Asst. Professor, EC</td></tr>
          <tr><td>Mrs. Ann Preetha Jose</td><td>Asst. Professor,IT</td></tr>
          <tr><td>Mr. Arun K R</td><td>Asst.Professor, ME</td></tr>
          <tr><td>Mr. Lovin Varghese</td><td>Asst.Professor, ME</td></tr>
          <tr><td>Mrs. Dany Sebastian</td><td>Asst.Professor, S&H</td></tr>
          <tr><td>Mr. Sebin Joseph</td><td>Asst.Professor, MBA</td></tr>
      	</tbody>
      </table>
      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Internal Compliance Committee</th></tr>
          <tr><td style={{width:"60%"}}>Name</td><td>Phone Number</td></tr>
          <tr><td>Dr. Sony Kurian, Associate Professor, EEE</td><td>9447925215</td></tr>
          <tr><td>Dr. Cyriac M. Odackal, Associate Professor, ECE</td><td>9447506638</td></tr>
          <tr><td>Mrs. Jesline Joseph, Assistant Professor, IT</td><td>9447828173</td></tr>
          <tr><td>Mrs. Merlin Thomas, Assistant Professor, ECE</td><td>9446741339</td></tr>
          <tr><td>Mr. Lijo Mathew, Computer Programmer, CSE</td><td>9447751306</td></tr>
      	</tbody>
      </table>
     </div>
    );
  }
}

export default Library;
