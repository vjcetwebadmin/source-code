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
      "Viswajyothi College of Engineering and Technology, Vazhakulam was established in the year 2001 and run by the Diocesan Technical Educational Trust under the aegis of the Syro Malabar Catholic Eparchy of Kothamangalam. As a professional institution it has always strived to educate engineers and scientists to the next level through innovative activities. Scholars from all over Kerala and abroad seek admissions here because of its excellent infrastructure, well experienced faculty, separate hostel facility for ladies and gents, connectivity and apt learning environment. Today, Viswajyothi College has grown in name and fame as an NBA accredited professional engineering institution with its Alumni as brand ambassadors working globally. It trains undergraduate engineers in seven disciplines and conducts four post graduate courses as well. Presently, 2036 students undergo trainings in all, with a keen intention to open up more branches as to customise to the taste and needs of the time."
  };
  AboutVjcText2 = {
    instanceID: "AboutVjcText2",
    title:
      "Viswajyothi has an excellent team of faculty, well-experienced, committed and devoted in imparting holistic training as to make students industry fit. It has state of the art infrastructure with an area of 45944.47 sq.m. in a sprawling campus of 25.28 acres with panoramic landscapes, well-planned class rooms, cutting edge Labs, Workshops, updated Library with latest national/international journals and E journals, R&D block, hostels, playgrounds and gymnasium on the pristine hillock overlooking Ernakulam - Thodupuzha state highway."
  };
  AboutVjcText3 = {
    instanceID: "AboutVjcText3",
    title:
      "The Placement and Training Cell makes it a point to pool in training resources as to improve the students’ employability. Soft Skill and Technical Training is spread through the academic year utilizing even vacations. Students are given ample opportunities for hands own experience through arranged internship, in house incubation centre, Fab Lab and Start-Ups. They avail trainings at the in-house coaching centre for German language, industry relevant add on courses- Python, Java and bridge courses available. Around 50 reputed companies regularly visit our campus among which Infosys lifts the major haul! The placement team keeps scanning industries for possible openings. Around 85% of all eligible students of the current year have already secured placement in reputed companies."
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
    title: "Electronics and Communication engineering"
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

  render() {
    return (
      <React.Fragment>
        <HeadingTwo data={this.AboutVjcTitle} />
        <ImageOne data={this.AboutVjcImage} />
        <div className="about-para">
          <BodyOneJustified data={this.AboutVjcText1} />
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
