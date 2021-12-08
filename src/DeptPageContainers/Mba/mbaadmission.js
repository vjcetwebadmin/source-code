import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
//import "../styles.css"
import "../../Components/Tables/tableformat.css";
class CSFaculty extends Component {
  state = {};
  LibraryServiceTitle = {
    instanceID: "LibraryServiceTitle",
    title: "ADMISSION PROCESS"
};
LibraryContent1 = {
  instanceID: "LibraryContent1",
  title: "Placement is a very important activity at VISWAJYOTHI College of Engineering and Technology .VJCET has an independent placement cell focused to cater to the needs of leading organizations in conducting campus interviews for the final year. The placement officer is assisted by student representatives. The committee evolves a broad policy framework every year. Students are closely co-opted in implementing these policy decisions. The cell keeps close liaison with various industrial establishments (both private and public sectors), which conduct campus interviews and select the student from all disciplines. Most of them visit the Campus for holding campus interviews. VISWAJYOTHI School of Management (VSMS) have a department representative who co ordinates the placement activities synchronizing with placement department."
}
LibraryServiceTitle2 = {
  instanceID: "LibraryServiceTitle1",
  title: "ELIGIBILITY CRITERIA"
};
LibraryServiceTitle3 = {
  instanceID: "LibraryServiceTitle1",
  title: "FEE STRUCTURE"
};
LibraryServiceTitle4 = {
  instanceID: "LibraryServiceTitle1",
  title: "ADMISSION HELP LINE"
};
LibraryServiceTitle5 = {
  instanceID: "LibraryServiceTitle1",
  title: "NOTIFICATIONS"
};
LibraryServiceTitle6 = {
  instanceID: "LibraryServiceTitle1",
  title: "APPLY ONLINE"
};
  render() {
    return (
      <div>                   
          <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
        <div  style={{textAlign:"left"}}>
          <ul  style={{lineHeight:"1.5em"}}>
              <li>Admission will be purely based on merit.</li>
              <li>A Ranklist will be made with the aggregate score from UG Marks, Entrance Exam (CMAT, KMAT or CAT ), Group Discussion and Personal Interview.</li>
            </ul>
        </div>
        {/*  <BodyOneJustified data={this.LibraryContent1}/>*/}
        <HeadingTwo data={this.LibraryServiceTitle2} className="Heading" />
        <div  style={{textAlign:"left"}}>
          <ul  style={{lineHeight:"1.5em"}}>
              <li>A pass in any bachelor’s Degree Examination of MG University or an equivalent degree of any other university, duly recognized by KTU with not less than 50% marks in the aggregate for all parts of examination or a Master’s Degree Examination with 50% marks in aggregate.</li>
              <li>Valid KMAT / CMAT or CAT Score.</li>
              <li>A pass in any Bachelor’s Degree examination is needed for SC/ST candidates.</li>
            </ul>
        </div>
        <HeadingTwo data={this.LibraryServiceTitle3} className="Heading" />
        <div  style={{textAlign:"left"}}>
          <p>The following fees schedule is applicable for candidates seeking new admission to the MBA Batch of 2018-2019</p>
          <ul  style={{lineHeight:"1.5em"}}>
              <li>The One-time Application Fee of Rs 500 is to be paid at the time of submitting the Application Form.</li>
              <li>Admission Fee (one-time) of Rs.500 and a part of Tuition Fee Rs. 25,000 are to be paid together once admission is offered to the candidate. Thus, a candidate who has been offered admission will have to pay Rs. 25,500/-.</li>
             </ul>
             <p>Tuition Fee for subsequent trimester will only be payable later.</p>
        </div>
          <table border="1" id="tableformat">
          <tr><th>Particulars</th><th>Amount (Rs.)</th></tr> 
              <tr>
                  <td>Tuition Fee</td><td>1,50,000 per year (Payable in 2 installments of Rs.75,000 each)</td>
              </tr>
              <tr>
                  <td>Caution Deposit</td><td>5,000</td>
              </tr>
              <tr>
                  <td>Examination Fee</td><td>1,700 per Semester(subject to the decision of the university)</td>
              </tr>
              <tr>
                  <td>Admission Fee</td><td>500</td>
              </tr>
              <tr>
                  <td>University Student Administration Fee</td><td>1,000</td>
              </tr>
              <tr>
                  <td>PTA Fund</td><td>500</td>
              </tr>
              <tr>
                  <td>Student Union & Association Fees</td><td>400 (Subject to change as per the decision of Students Union)</td>
              </tr>
          </table>  
          <div  style={{textAlign:"left"}}>
            <ul  style={{lineHeight:"1.5em"}}>
              <li>If the candidate is opting for bank loan, already collected tuition fee of Rs.25,000 will be reimbursed to the candidate as an when the bank loan is approved.</li>
              <li>Any candidate who desires to discontinue from the programme after confirmation of admission & registration for the courses specified in the admit offer letter will forfeit the total amount of fees paid.</li>
             </ul>
        </div> 
        <br></br>
        <HeadingTwo data={this.LibraryServiceTitle4} className="Heading" />
        <div  style={{textAlign:"left"}}>
          <p><b>FOR ENQUIRIES – CONTACT</b></p>
          <ul style={{listStyleType:"none",lineHeight:"1.5em"}}>
              <li><b>Mr. Sebin Joseph</b></li>
              <li><b>Asst.Professor – Admission Cell</b></li>
              <li><b>9847946548</b></li>
              <li><b>sebin@vjcet.org</b></li>
             </ul>
        </div>
      </div>
    );
  }
}

export default CSFaculty;
