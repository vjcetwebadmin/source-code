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
  title: "Placement is a very important activity at VISWAJYOTHI College of Engineering and Technology .VJCET has an independent placement cell focused to cater to the needs of leading organizations in conducting campus interviews for the final year. The placement officer is assisted by student representatives. The committee evolves a broad policy framework every year. Students are closely co-opted in implementing these policy decisions. The cell keeps close liaison with various industrial establishments (both private and public sectors), which conduct campus interviews and select the student from all disciplines. Most of them visit the Campus for holding campus interviews. Department of Management Studies have a department representative who co ordinates the placement activities synchronizing with placement department."
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
LibraryServiceTitle7= {
  instanceID: "LibraryServiceTitle7",
  title: "NOTIFICATIONS"
};
LibraryContent7 = {
  instanceID: "LibraryContent7",
  title: "Those who are studying for last year degree course and are awaiting their results may also apply for the KMAT KERALA Entrance Examination 2021."
}
LibraryServiceTitle8= {
  instanceID: "LibraryServiceTitle8",
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
        <br></br>
        <HeadingTwo data={this.LibraryServiceTitle7} className="Heading" />
        <b><BodyOneJustified data={this.LibraryContent7}/></b>
        <div  style={{textAlign:"left"}}>
          <p>Notification</p>
          <ul style={{lineHeight:"1.5em"}}>
              <li><a href="http://www.vjcetmba.in/wp-content/uploads/2019/11/5TH-NOTIFICATION-OF-THE-FIRST-KMAT-KERALA-EXAMINATION-2020.pdf" target="_blank" rel="noopener noreferrer">5TH-NOTIFICATION-OF-THE-FIRST-KMAT-KERALA-EXAMINATION-2020</a></li>
              <li><a href="http://www.vjcetmba.in/wp-content/uploads/2019/11/Kerala-University-of-Fisheries-and-Ocean-Studies-KMAT.docx" target="_blank" rel="noopener noreferrer">Kerala University of Fisheries and Ocean Studies – KMAT</a></li>
              <li><a href="http://www.vjcetmba.in/wp-content/uploads/2020/12/Students-Admission-List-20-21-batch.pdf" target="_blank" rel="noopener noreferrer">Students Admission List 20 – 21 batch</a></li>
              <li><a href="https://www.vjcetmba.in/application-form/" target="_blank" rel="noopener noreferrer">ONLINE REGISTRATION</a></li>
              <li><a href="https://www.vjcetmba.in/wp-content/uploads/2021/08/PR-LLB-KMAT-LLM-Exam-date-published.pdf" target="_blank" rel="noopener noreferrer">KMAT NOTIFICATION</a></li>
             </ul>
        </div>       
        <HeadingTwo data={this.LibraryServiceTitle8} className="Heading" />
        <div  style={{textAlign:"left"}}>
          <h3>HOW TO APPLY?</h3>
          <ul style={{lineHeight:"1.5em"}}>
              <li>Formal Application form for the MBA Admission can be obtained from the Viswajyothi School of Management Studies Office in person on payment of Rs. 500.</li>
              <li>Application forms may also be downloaded from the link below. Such applications have to be submitted along with a DD of Rs. 500/- in favour of " Principal, Viswajyothi College of Engineering and Technology" payable at Vazhakulam, Muvattupuzha.</li>
              <li>The duly filled application forms along with attested copies of the necessary documents can be submitted directly or by registered post addressing the college so as to reach the college office on or before the prescribed date. Applicants shall obtained acknowledgment from the college for application submitted directly.</li>
              <li>Application submitted to the college should be completed in all respects. The candidate should fill in all the items in the application form in his / her own handwriting.</li>
              <li>Copies of following Certificates / Documents Attested by Gazetted Officer/Head of the Institution where the student had studied should be submitted along with the application.</li>
                <ul style={{lineHeight:"1.4em"}}>
                  <li>10 / 12 or equivalent certificate in proof of the date of birth.</li>
                  <li>Mark list of the qualifying examination.</li>
                  <li>Score card of MAT/C-MAT/KMAT.</li>
                  <li>In case of candidates claiming any sort of reservation or special consideration, document to prove such claims must be submitted along with the application.</li>
                </ul>
          </ul>
          <h3>NOTE:</h3>
          <ul style={{lineHeight:"1.5em"}}>
              <li>Furnishing false information/particulars would result in the forfeiture of the candidature as well as cancellation of admission of the course.</li>
              <li>Merit list for the admission will be published in the college website/notice board.</li>
              <li>Selection will be in the order of merit.</li>
          </ul>
        </div>    
      </div>
    );
  }
}

export default CSFaculty;
