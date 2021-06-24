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
	title: "VJCET Student Grievance and Redressal Policy formulated in alignment with the “All India Council for Technical  Education (Prevention and Prohibition of Ragging in Technical  Institutions, Universities including Deemed to be Universities  imparting technical education) Regulations 2009” and “UGC Regulations curbing the menace of ragging in higher educational institutions, 2009” which have been notified on 4th July, 2009 in the Gazette of India;  and revised as per the public notice issued by  APJ Abdul Kalam Technological University on “Curbing the Menace of Ragging in KTU Affiliated Technical Institutions” on 10th August, 2015. Following are the four entities functioning in parallel to realize the objectives:"
};
grievwriteup1 = {
	instanceID: "grievwriteup1",
	title: "The Student Grievance Redressal Cell"
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
 
  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <BodyOneJustified data={this.grievwriteup}></BodyOneJustified>
        <p><b><BodyOneJustified data={this.grievwriteup1}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup2}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup3}></BodyOneJustified></b></p>
        <p><b><BodyOneJustified data={this.grievwriteup4}></BodyOneJustified></b></p>
        <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">Students' Grievance Redressal / Appeal Committee</th></tr>
            <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
            <tr><td>Mr. Somy P. Mathew</td><td>Vice-Principal</td></tr>
            <tr><td>Ms. Shine George</td><td>HOD CE</td></tr>
            <tr><td>Mr. Amel Austine</td><td>HOD CSE</td></tr>
            <tr><td>Dr. B. Aruna</td><td>HOD EEE</td></tr>
            <tr><td>Ms. Smitha Cyriac</td><td>HOD ECE</td></tr>
            <tr><td>Ms. Anju Susan George</td><td>HOD IT</td></tr>
            <tr><td>Dr. Shunmugesh K</td><td>HOD ME</td></tr>
            <tr><td>Ms. Viji George</td><td>HOD S&H</td></tr>
            <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
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
          <tr><td>Ms. Niji Mathews</td><td>Asst. Professor , ECE</td></tr>
          <tr><td>Ms. Jesline Joseph</td><td>Asst. Professor , IT</td></tr>
          <tr><td>Mr. Martin Jose</td><td>Asst. Professor , ME</td></tr>
          <tr><td>Ms. Ambily Jose</td><td>Asst. Professor , MBA</td></tr>

      	</tbody>
      </table>
      <br />       
       <table id="tableformat">
	      <tbody>
		      <tr><th colSpan="2">ANTI RAGGING COMMITTEE</th></tr>
          <tr><td style={{width:"40%"}}>Name</td><td>Designation</td></tr>
            <tr><td>Dr. K. K. Rajan</td><td>Principal</td></tr>
            <tr><td>Mr. Somy P. Mathew</td><td>Vice Principal</td></tr>
            <tr><td>Ms. Shine George</td><td>HOD - CE</td></tr>
            <tr><td>Mr. Amel Austine</td><td>HOD - CSE</td></tr>
            <tr><td>Dr. B. Aruna</td><td>HOD - EEE</td></tr>
            <tr><td>Ms. Smitha Cyriac</td><td>HOD - ECE</td></tr>
            <tr><td>Ms. Anju Susan George</td><td>HOD - IT</td></tr>
            <tr><td>Dr. Shanmughesh K.</td><td>HOD - ME</td></tr>
            <tr><td>Ms. Viji George</td><td>HOD - S&H</td></tr>
            <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
            <tr><td>Rev. Fr. Sebastian Valloppillil</td><td>Warden - Gents Hostel</td></tr>
            <tr><td>Rev. Sr. Stany</td><td>Warden - Ladies Hostel</td></tr>
            <tr><td>Mr. Shaji K.J.</td><td>SI of Police, Vazhakulam</td></tr>
            <tr><td>Mr. Jordy Varghese</td><td>President, Avoly Grama Panchayath</td></tr>
            <tr><td>Mr. Shajan P. J.</td><td>Representative, Non Teaching Staff</td></tr>
            <tr><td>Mr. Noble John</td><td>PTA President</td></tr>
            <tr><td>Mr. Sijumon Francis</td><td>PRO</td></tr>
            <tr><td>Mr.Sean Santosh Joseph</td><td>Chairman - Students Council</td></tr>
            <tr><td>Ms. Mariya George</td><td>Vice Chairperson - Students Council</td></tr>
            <tr><td>Mr. H. Anand</td><td>General Secretary - Students Council</td></tr>
            <tr><td>Mr. Bharath N</td><td>First Year Boy Representative</td></tr>
            <tr><td>Ms. Josna Joseph</td><td>First Year Girl Representative</td></tr>
            <tr><td>Mr. Aneesh Kurian</td><td>NSS Co-ordinator</td></tr>
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
          <tr><td>Mr.Appu John</td><td>Asst.Professor, CE</td></tr>
          <tr><td>Mrs. Tintushine A.L</td><td>Asst.Professor, CE</td></tr>
          <tr><td>Mr. Joe Mathew Jacob</td><td>Asst.Professor, CSE</td></tr>
          <tr><td>Mrs. Dona Jose</td><td>Asst.Professor, CSE</td></tr>
          <tr><td>Mrs. Cini K.</td><td>Asso.Professor, EEE</td></tr>
          <tr><td>Mr.Naveen Jacob</td><td>Asst. Professor, ECE</td></tr>
          <tr><td>Mrs. Rose Mary Kuruvithadam</td><td>Asst. Professor, EC</td></tr>
          <tr><td>Mrs. Ann Preetha Jose</td><td>Asst. Professor,IT</td></tr>
          <tr><td>Mr. Arun K R</td><td>Asst.Professor, ME</td></tr>
          <tr><td>Mr. Lovin Varghese</td><td>Asst.Professor, ME</td></tr>
          <tr><td>Mrs.Dany Sebastian</td><td>Asst.Professor, S&H</td></tr>
          <tr><td>Dr. Cyriac Joseph</td><td>Dean & HOD MBA</td></tr>
          <tr><td>Ms. Ambily Jose</td><td>Asst. Professor, MBA</td></tr>

      	</tbody>
      </table>
     </div>
    );
  }
}

export default Library;