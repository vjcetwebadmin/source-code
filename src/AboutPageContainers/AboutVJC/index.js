import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import "./About.css";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";

class AboutVJC extends React.Component {
  AboutVjcTitle = {
    instanceID: "AboutVjcTitle",
    title: "About Viswajyothi"
  };
 
  AboutVjcImage = {
    instanceID: "AboutVjcImage",
    image: "cover2-1.jpg",
    width: "93%"
  };
  AboutVjcText1 = {
    instanceID: "AboutVjcText1",
    title:
      "Viswajyothi College of Engineering and Technology, Vazhakulam was established in the year 2001 and is run by the Diocesan Technical Educational Trust under the aegis of the Syro Malabar Catholic Eparchy of Kothamangalam. As a professional educational  institution it has always strived to educate Engineers and Professionals  to the next level through innovative activities. Students from all over Kerala and abroad seek admission here because of the  excellent infrastructure, well experienced faculty,  separate hostel facility for ladies and gents, internet connectivity and apt learning environment. Today, Viswajyothi College has grown in name and fame.  Six of its programmes are  accredited by NBA. VJCET  has  strong  Alumni base working globally as brand ambassadors. It trains undergraduate Engineers in seven disciplines and conducts three post graduate courses as well as MBA. Presently, 1708 students undergo training in different courses. The College Management is very  keen in  opening  new branches in emerging areas  to nurture  and equip the students to the needs of current and future industry."
  };
  AboutVjcText2 = {
    instanceID: "AboutVjcText2",
    title:
      "Viswajyothi has  a team of faculty, well-experienced, committed and devoted in imparting holistic training  to make students industry ready. It has state of the art infrastructure with an area of around 46,000 sq.m. in a sprawling campus of 25.28 acres with panoramic landscapes, well-planned class rooms, cutting edge labs, modernised workshops, updated library with reputed  national/international journals and e- journals, Research & Development wing, hostels, playgrounds and gymnasium  nestled in the pristine hillock, overlooking the Punalur – Muvattupuzha state highway. "
  };
  AboutVjcText3 = {
    instanceID: "AboutVjcText3",
    title:
      "The Placement and Training Cell makes it a point to pool in  training resources  so as to improve the students’ employability. Soft skill and technical training is spread throughout  the academic year utilizing even vacations. Students are given ample opportunities for hands on experience through  internship, inhouse incubation centre, Fab Lab and Start-Ups. The  students can avail training  in  German language in the campus itself at the Foreign Language Division of the college. Industry relevant add on courses like  Python, Java and bridge courses  are  organised periodically.  Around 50 reputed companies regularly visit our campus for  recruitments  and    Infosys absorbs very good portion of  the students. The placement team keeps a good rapport with all major  industries for possible employment openings for the students. Most of the  eligible students of the current year have already secured placement in reputed companies."
  };
  AboutVjcText4 = {
    instanceID: "AboutVjcText4",
    title:
      "Viswajyothi aspires to bring out the extraordinary from the ordinary students coming from rural background. The Placement and Training Cell makes it a point to pool in training resources as to improve the students’ employability. Soft Skill and Technical Training is spread through the academic year utilizing even vacations. In addition, a regular hour in a week is allotted for aptitude training creating a platform that prepares for a successful career. To wet the taste for engineering application among undergraduate engineers, opportunities for hands own experience is provided through arranged internship, in house incubation centre, Fab lab and Start-Ups. Besides,  interested scholars are encouraged to undergo various traingn programmes at the in-house internationally recognized examination centre for German language, industry relevant add on courses- Python, Java and bridge courses available. Around 50 reputed companies regularly visit our campus apart from the off campus drives every year of which Infosys lifts the major haul! “Knock and the door shall be opened”, is the living faith of Viswajyothi placement team that keeps scanning industries nationally and internationally for possible openings. Around 85% of all eligible students of the current year have already secured placement in reputed companies adding to the Alumni-the brand Ambassadors of Viswajyothi."
  };
  PGCourse = {
    instanceID: "PGCourse",
    title: "PG Programmes offered:"
  }
  PGCourse1 = {
    instanceID: "PGCourse1",
    title: "Computer Science & Engineering"
  }
  PGCourse2 = {
    instanceID: "PGCourse2",
    title: "Electronics and Communication Engineering with specialization VLSI & Embedded Systems."
  }
  PGCourse3 = {
    instanceID: "PGCourse3",
    title: "Industrial Engineering and Management"
  }
  PGCourse4 = {
    instanceID: "PGCourse4",
    title: "MBA"
  }
  UGCourse = {
    instanceID: "UGCourse",
    title: "B-Tech Programmes offered:(Six programs Accredited by NBA)"
  }
  UGCourse1 = {
    instanceID: "UGCourse1",
    title: "Civil Engineering"
  }
  UGCourse2 = {
    instanceID: "UGCourse2",
    title: "Computer Science and Engineering"
  }
  UGCourse3 = {
    instanceID: "UGCourse3",
    title: "Electronics and Communication Engineering"
  }
  UGCourse4 = {
    instanceID: "UGCourse4",
    title: "Electrical and Electronics Engineering"
  }
  UGCourse5 = {
    instanceID: "UGCourse5",
    title: "Information Technology"
  }
  UGCourse6 = {
    instanceID: "UGCourse6",
    title: "Mechanical Engineering"
  }
  UGCourse7 = {
    instanceID: "UGCourse7",
    title: "Artificial Intelligence and Data Science"
  }
  UGCourse8 = {
    instanceID: "UGCourse8",
    title: "Computer Science and Design"
  }

  render() {
    return (
      <React.Fragment>
        <HeadingTwo data={this.AboutVjcTitle} />
        <ImageOne data={this.AboutVjcImage} />
         <div className="about-para">
          <p><BodyOneJustified data={this.AboutVjcText1} /></p>
          <p><BodyOneJustified data={this.AboutVjcText2} /></p>
          <p><BodyOneJustified data={this.AboutVjcText3} /></p>
  
          <div className="inner-para">
            <p><BodyOneJustified data={this.PGCourse} /></p>
            <ul>
              <li><p><BodyOneJustified data={this.PGCourse1} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse2} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse3} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse4} /></p></li>
            </ul>
            <p><BodyOneJustified data={this.UGCourse} /></p>
            <ul>
              <li><p><BodyOneJustified data={this.UGCourse7} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse1} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse8} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse2} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse3} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse4} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse5} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse6} /></p></li>              
            </ul>

          </div>
          
        </div>
        {/* <ResourcesGroup /> */}

      </React.Fragment>
    );
  }
}

export default AboutVJC;
