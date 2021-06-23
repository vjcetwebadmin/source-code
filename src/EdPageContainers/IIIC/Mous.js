import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"; 
import Bodythree from "../../Components/Texts/BodyThree";
import "../../Components/Tables/tableformat.css";
class Mous extends Component {
  state = {};
  
  MousHeading = {
    instanceID: "MousHeading",
    title:
      "Memorandums of Understanding With Industries"
  };
  MouDescriptionOne = {
    instanceID: "MouDescriptionOne",
    title:
      "VJCET was interacting with many industries in Kerala and southern part of India in the last one decade. Realizing the need for formalizing the interaction and continue in a systematic manner memorandums of understanding (MOUs) were signed with industries. MOU’s are for a period 5 years and it clearly mentions the areas of mutual exchange and responsibilities. MOUs were signed with 29 industries so far and the list is given below."
  };
  

  render() {
    return (
      <div className="Program" id="program">
         <HeadingOne data={this.MousHeading} />
        <Bodythree data={this.MouDescriptionOne} />
        <table id="tableformat">
                            <tr><th>SL. No</th><th>COMPANY NAME</th><th>YEAR</th></tr>
                            <tr><td>1</td><td>RabbitSquare Viswajyothi Business Incubation Centre Viswajyothi College of Engineering and Technology Vazhakulam, Muvattupuzha Kerala, 686670</td><td>2021</td></tr>
                            <tr><td>2</td><td>M/s Looking soft Pvt. Limited , #C4, 4th floor, Heavenly Plaza, Kakkanad, Cochin, Kerala, India – 682021</td><td>2020</td></tr>
                            <tr><td>3</td><td>ERNST & YOUNG LLP , 9th Floor, ABAD Nucleus, NH 49, Maradu, Kochi, Kerala- 682304</td><td>2020</td></tr>
                            <tr><td>4</td><td>RECODE Innovations,  First Floor, Recode Building, Near Pvt Bus stand, Muvattupuzha Kerala-686661</td><td>2019</td></tr>
                            <tr><td>5</td><td>Deva Matha College, Kuravilangad, Kottayam Dist, Kerala- 686633</td><td>2019</td></tr>
                            <tr><td>6</td><td>M/s Reecco Energy India Pvt. Ltd, Registered office, Bldg No.IV/219 B3&B4, Pala road, Chunkam, Thodupuzha, Kerala 685584, India</td><td>2018</td></tr>
                            <tr><td>7</td><td>M/s Technopower Engineering Company, First floor, Tranquil Tower, Seaport-Airport Road, Kakkanad, Ernakulam-682030,  Kerala, India </td><td>2018</td></tr>
                            <tr><td>8</td><td>M/s IGA TECH Industrial Electronics Pvt Ltd. XII / 230,Morarji Road, Vazhakkala, Kakkanad West, P.O, Cochin, Kerala 682030</td><td>2018</td></tr>
                            <tr><td>9</td><td>Grandmas Food Products,Peringuzha, Perumpalloor P.O., Ernakulam, Kerala 686673</td><td>2018</td></tr>
                            <tr><td>10</td><td>Celebrus commodities Ltd. 27/540, 3rd Floor, EAK Towers, Main Avenue, Panampilly Nagar, Kochi, Kerala, India-682036</td><td>2018</td></tr>
                            <tr><td>11</td><td>Red Hat India Pvt. Ltd., A-201, 2nd Floor, Supreme Business Park, Hiranandani Gardens Powai, Mumbai, 400076 India</td><td>2018</td></tr>
                            <tr><td>12</td><td>M/s SUVIRE Electric (P) Ltd , G-12, SIPCOT, Industrial park, Sriperumbudur, Kanchipuram district, Tamil Nadu, PIN-602105</td><td>2017</td></tr>
                            <tr><td>13</td><td>M/s Metrolla Steels Ltd, Pezhakkappilly P O, Paipra, Muvattupuzha- PIN 686674</td><td>2017</td></tr>
                            <tr><td>14</td><td>M/s Zixent Technologies, Palathinkal building, EEC market Road, Muvattupuzha, Cochin, Kerala,  India, PIN-686673</td><td>2017</td></tr>
                            <tr><td>15</td><td>M/s InterCAD Systems Pvt Ltd , 2 nd floor, Balakrishna Pillai Building, Opp St. Ignatious Knanaya Church, Trivandrum, Kerala</td><td>2017</td></tr>
                            <tr><td>16</td><td>M/s Amaze logics Pvt Ltd , Third floor, Sreevalsam Complex, Thodupuzha,Idukki, Kerala, India, PIN-685584</td><td>2017</td></tr>
                            <tr><td>17</td><td>M/s Supertech Tools & Components Private Ltd. Aiswarya Colony, Madakkathanam, Muvattupuzha, Kerala</td><td>2017</td></tr>
                            <tr><td>18</td><td>M/s BIMIT CAD and BIM Training Services,2nd floor, Naduparambil Building, Above ICICI Bank (Next to IGNOU),Kaloor Jn., Ernakulam-682017</td><td>2017</td></tr>
                            <tr><td>19</td><td>M/s Progressive Cybernetics Pvt.Ltd,41672/A1, II nd Floor, Lovely Avenue, Puthiya road, Kaloor, Cochin – 682017,Kerala, India</td><td>2016</td></tr>
                            <tr><td>20</td><td>M/s Jocyt Aerospace, Olamattom, Thodupuzha, Idukki Dist,   Kerala, India, PIN-685584 </td><td>2016</td></tr>
                            <tr><td>21</td><td>M/s Pepperpot  Systems and Solutions Pvt. Ltd,Devadaram, Infopark Thrissur, Nalukettu Road, Koratty,PIN – 680 308 </td><td>2016</td></tr>
                            <tr><td>22</td><td>M/s C T Control Technology (India) Private Ltd. Srishti, #7, Sharada Colony, 8th Main Road, Basaveshwara Nagar, Bengaluru, Karnataka, PIN- 560079</td><td>2016</td></tr>
                            <tr><td>23</td><td>M/s INFRA HOUSING PVT. LTD, CLS Building, M G Road, Cochin, Kerala, PIN- 682011</td><td>2016</td></tr>
                            <tr><td>24</td><td>M/s Renaisoft Solutions Pvt. Ltd,1st Floor, Puzhakkarayil Building, SH15, Thalayolaparambu, Kerala, PIN- 686605</td><td>2016</td></tr>
                            <tr><td>25</td><td>M/s G & G Constructions,Georgetown, Adam Star Complex, Thodupuzha, Kerala ,PIN-685584</td><td>2016</td></tr>
                            <tr><td>26</td><td>M/s Lunars Rubbers Pvt. Ltd., Post Box No: 34, Matha Shopping Arcade,  Thodupuzha,Kerala , India,PIN - 685584</td><td>2016</td></tr>
                            <tr><td>27</td><td>M/s Bitsforge Technologies (P) Ltd.,7/570k, Chithranjali Studio Building, NGO Quarters, Kakkanad, Thrikkakara P.O.  PIN-682021</td><td>2016</td></tr>
                            <tr><td>28</td><td>M/s Antonal Group of Companies , Pulinattu Properties, Muvattupuzha,  Cochin, Kerala, India, PIN -686673 </td><td>2016</td></tr>
                            <tr><td>29</td><td>Infosys Limited, Electronic City, Hosur Road, Bangalore-560100</td><td>2006</td></tr>
                                              

                            
                </table>
      </div>
    );
  }
}

export default Mous;
