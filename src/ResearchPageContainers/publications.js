import React, { Component } from "react";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import "./Research.css"
import "../Components/Tables/tableformat.css";

class Reserch extends Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Publications"
    }
    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                
                                  
    <table id="publicationtable">
        <tr><th>List of papers indexed in Scopus database & conference proceedings with ISBN/ISSN</th></tr>
        <tr><td>Dr. Anishin Raj M.M , CSE, “Leukocyte classification based on feature selection using extra trees classifier: a transfer learning approach”, Turkish Journal of Electrical Engineering & Computer Sciences(SCIE), 2021</td></tr>
        <tr><td>Dr. Anishin Raj M.M , CSE, Leukocyte Classification based on Transfer Learning of VGG16 Features by K-Nearest Neighbour Classifier, IEEE Xplore, 2021</td></tr>
        <tr><td>Dr. Anishin Raj M.M , CSE, Leukocyte classification based on statistical measures of radon transform for monitoring health condition,  Biomedical Physics and Engineering Express, 2021. (ESCI and SCOPUS), 2021</td></tr>
        <tr><td>Dr. Anishin Raj M.M , CSE, Automated Leukocyte Classification based on Transfer Learning for heterogeneous dataset, AIP Conference (SCOPUS) (ICRAINS-2021), 2021</td></tr>
        <tr><td>Ms. Neenu Daniel, CSE, Texture and quality analysis for face spoofing detection, Computers and Electrical Engineering, 2021</td></tr>
        <tr><td>Ms. Anju Susan George, IT, Multi-Replica Integrity Verification in Cloud: A Review and a Comparative Study, IEEE Explore Digital Library [Scopus Indexed], 2021</td></tr>
        <tr><td>Ms. Anju Susan George, IT, Remote Cloud Data Auditing Protocols: A Comprehensive Analysis and Comparative Study&quot;,, Proceedings of 5th International Conference on Intelligent Computing and Control Systems , 2021</td></tr>
        <tr><td>Rajan, K.K., Aruna, B., Anju, S., Verma, S., Bhattacharyay, R. Design development and testing of mutual inductance type level sensor for molten lead-lithium alloy, Fusion Engineering and Design, 2021, 168, 112650</td></tr>
        <tr><td>K. Shunmugesh, K. R. Arun, Arun Raphel, and K. T. Akhil , Optimization of Drilling Parameters of Glass Fiber-Reinforced Polymers Using Grey Relational Analysis, Lecture Notes in Mechanical Engineering, Springer Nature, 2021, pp. 319–324</td></tr>
        <tr><td>Akhil, K.T, Arul, S, Shunmugesh K. Optimization of Cryogenic Turning Process Parameters Using Grey Relational Analysis (GRA) in Super-Duplex Stainless Steel (A479), Lecture Notes in Mechanical Engineering, 2021, pp. 307–312</td></tr>
        <tr><td>Anju Susan George, A Shajin Nargunam, Improved multi-party verification protocol with reduced computational overhead in cloud storage system, Concurrency Computat Practice and Experience. 2021, 1532-0634</td></tr>
        <tr><td>George, S., Anilkumar, P.P.CRITICAL indicators for assessment of capacity development for disaster preparedness in a pandemic context, International Journal of Disaster Risk Reduction, 2021, 55, 102077</td></tr>
        <tr><td>Naveen Jacob, Muralidhar Kulkarni , Krishnamoorthy K.,  An Electronically Switchable UWB to Narrow Band Antenna for Cognitive Radio Applications, Microwave and Optical Technology Letters, 2020, 1098-2760</td></tr>
        <tr><td>Arun Raphel,  P. Vivekanandhan, S. Kumaran, High entropy phenomena induced low thermal conductivity in BiSbTe1.5Se1.5 thermoelectric alloy through mechanical alloying and spark plasma sintering, Material Letters, 2020,  2454-4051</td></tr>
        <tr><td>V. Venkatesh,Anishin Raj M M , K. Sajith, R. Anushiadevi, T. Praba, A precision-based diagnostic model  ADOBE-accurate detection of  breast cancer using logistic  regression approach,  Journal of Intelligent &  Fuzzy Systems, 2020, 1064-1246</td></tr>
        <tr><td>K. Arun , C. Ramesh Kannan , B. Stalin, The effect of cryogenically treated drilling tool on GFRP composite drilling holes-A comparative study, Materials Today: Proceedings, 2020, 2214-7853</td></tr>
        <tr><td>Shibu K.R,Suji Pramila , A novel secret key generation scheme for manets using traffic load to avoid active attackers, International Journal of Emerging Trends in Engineering Research, 2020, 2347 - 3983</td></tr>
        <tr><td>Arun.K, Ramesh Kannan.C ,Milon Selvam Dennison, Fabrication Of GFRP Composite And To Analyse Its Delamination Factor In Drilling Using Three Different Tool Geometries, International Journal of Scientific & Technology research , 2020, 2277-8616</td></tr>
        <tr><td>Karthikeyan B,Anishin Raj M.M, D Yuvaraj,K. Joseph Abraham Sundar, A hybrid approach for video steganography by stretching the secret data, Lecture Notes in  Networks and Systems, 2020,  2367-3370</td></tr>
        <tr><td>Sreeraj M,Jestin Joy, Alphonsa Kuriakose, Sujith M R, Vishnu P K, Haritha Unni, "CLadron :AI assisted device for identifying artificially ripened climacteric fruits", Procedia Computer Science , 2020, 1877-0509</td></tr>
        <tr><td>Sreeraj M,Jestin Joy,Alphonsa Kuriakose ,Bhameesh M B,Anoop K Babu, Merin Kunjumon, VIZIYON: Assistive handheld device for visually challenged, Procedia Computer Science , 2020, 1877-0509</td></tr>
        <tr><td>Naveen Jacob, Muralidhar Kulkarni ,Krishnamoorthy K., Omega Shaped Complementary Split Ring Resonator Loaded Bandwidth Reconfigurable Antenna for Cognitive Radio Applications, Procedia Computer Science, 2020, 1877-0509</td></tr>
        <tr><td>Diana Baby ,Sujitha Juliet Devaraj, Anishin Raj M. M., Leukocyte sub type identification using spline interpolation and graphical analysis, International Journal of   Advanced Trends in   Computer Science and   Engineering  , 2020, 2278-3091</td></tr>
        <tr><td>K.Shunmugesh Amal Pratheesh, Taguchi Grey Relational Analysis based Optimization of Micro-Drilling Parameters on Carbon Fiber Reinforced Plastics, Materials Today: Proceedings , 2020,  2214-7853</td></tr>
        <tr><td>K.S.Vishnu P.A.Anuroop Linto P.Anto Lovely Mathew  K.Shunmugesh, Areca fiber reinforced LLDPE biocomposite, Materials Today: Proceedings (Elsevier), 2020, 2214-7853</td></tr>
        <tr><td>Melbin George  Joseph Josemon Shaji  Mathew Francis ArjunRaghavan K.Shunmugesh, Measurement of Tensile Properties and Hardness of Friction Stir Welded Aluminium Alloy AA1200, Materials Today: Proceedings (Elsevier), 2020,  2214-7853</td></tr>
        <tr><td>Melvin C Jose,Radha Sankararajan,Sreeja B.S,Pratap Kumar, Laser micro-machined 28 GHz broad band single feed microstrip antenna for 5G mm-wave applications, Circuit World, 2019,  0305-6120</td></tr>
        <tr><td>Tony D,Sarin P, Neeraj K. Pushkaran, Nelson J,  Mohanan Pezholil,  Vasudevan, Artificial Dielectric Superstrate Loaded Antenna for Enhanced Radiation Performance, PIER M, 2019, 1937-8726</td></tr>
        <tr><td>M. Karthikeyan, M. P. Jenarthanan, R. Giridharan , K. Shunmugesh,, Investigation on Crash Analysis of a Frontal Car Bumper, Transactions of the Indian Institute of Metals., 2019, 0975-1645</td></tr>
        <tr><td>Shunmugesh, K. Lakshmikanth, G. Lawrance, C.A. Anantha Raman, L., An optimization of micro-drilling parameters in carbon fiber reinforced polymer using grey relation analysis, International Journal of Mechanical and Production Engineering Research and Development, 2019, 2249-8001</td></tr>
        <tr><td>Tintu Shine A.L,Fincy Babu,Dhileep M., Mesoscopic analysis of reinforced concrete beams, Coupled Systems Mechanics, 2019,  2234-2192</td></tr>
        <tr><td>Karthikeyan B, Venkata Keerthy S, Hariharan G, Secure Gray Code Based Reversible Data Hiding Scheme in Radiographic Images, International Journal of Electronic Security and Digital Forensics , 2019, 1751-911X</td></tr>
        <tr><td>Andrews Jose,  Sujitha Juliet Devaraj, Recent advances and investigation of efficient Computer Aided Diagnosis systems for CT images in Liver cancer detection, International Journal of Advanced Trends in Computer Science and Engineering, 2019,  2278-3091</td></tr>
        <tr><td>Elizabeth M J, Jobin Jose, Dona Jose, A Fog Based Security Model For Electronic Medical Records In the Cloud Database, International Journal of Innovative Technology and Exploring Engineering, 2019, 2278-3075</td></tr>
        <tr><td>Shibu K.R,Suji Pramila R, Random Bit Extraction for Secret Key Generation in MANETs, Wireless Personal Communications, 2019, 1572-834X</td></tr>
        <tr><td>Vinoj K, Dr. R Raja, Friction Stir Welding on Dissimilar Alloys - A Critical Review, International Journal of Mechanical Engineering and Technology, 2019,  0976-6359</td></tr>
        <tr><td>Basil Joy, K. Shunmugesh, M.Pramod Kumar, K.Arun, Optimization in Turning of 11sMn30 Through Process Capability Index, Materials Today: Proceedings (Elsevier), 2019,  2214-7853</td></tr>
        <tr><td>K. Shunmugesh, E.K.M. Yaser, Multi-objective optimization of milling process parameters in glass fibre reinforced polymer via grey relational analysis and desirability function, Materials Today: Proceedings (Elsevier), 2019,  2214-7853</td></tr>
        <tr><td>K. Shunmugesh, Jaison Baby, Optimization of Glass Fiber Reinforced Polymer (GFRP) using Multi Objective Taguchi function and TOPSIS, Materials Today: Proceedings (Elsevier), 2019, 2214-7853</td></tr>
        <tr><td>Madathinal Kunjappan Aswathi, Moothetty Padmanabhan, Lovely Mathew, Prosenjit Saha, Roberto Terzano, Nandakumar Kalarikkal, Tatiana Volova, Sabu Thomas, Carbon nanotube reinforced poly(trimethylene terephthalate) nanocomposites: Viscoelastic properties and chain confinement, Polymer Engineering & Science, 2018, 1548-2634</td></tr>
        <tr><td>K. Shunmugesh, K. Panneerselvam, Multi-performance optimization of micro-drilling using Taguchi technique based on membership function, IJEMS, 2018, 0975-1017</td></tr>
        <tr><td>Ajitha A R, Aswathi M K, Geethamma V G,  Lovely Mathew,Sabu Thomas, Effect of MWCNTs on Wetting and Thermal Properties of an Immiscible Polymer Blend, Macromolecular Symposia, 2018, 1521-3900</td></tr>
        <tr><td>Ajitha A R, Aswathi M K, Lovely Mathew,Sabu Thomas, Selective Localization of MWCNT in Poly (Trimethylene Terephthalate)/Poly Ethylene Blends: Theoretical Analysis, Morphology, and Mechanical Properties, Macromolecular Symposia, 2018, 1521-3900</td></tr>
        <tr><td>Sinnu Susan Thomas,Sumana Gupta,Venkatesh K Subramanian, Event Detection on Roads Using Perceptual Video Summarization, IEEE Transactions on Intelligent Transportation Systems,, 2018, 1558-0016</td></tr>
        <tr><td>Easwaran Nampoothiry, Nibin B, Rijo J Thomas, Thermodynamic Analysis of an integrated Gas Turbine Powerplant utilising cold exergy of LNG, Journal of Mechanical Engineering and Sciences, 2018, 2289-4656</td></tr>
        <tr><td>Melvin C Jose,Chithra Devi,Sreeja B.S,S.Meraline, A novel wideband pattern reconfigurable antenna using switchable parasitic stubs, Microwave and Optical Technology Letters, 2018, 0895-2477</td></tr>
        <tr><td>Basil Baby,Suji Pramila R, Survey on analysis of energy optimization in MANET routing, International Journal of Engineering & Technology, 2018, 2227-524X</td></tr>
        <tr><td>Arunkumar S, Subramaniyaswamy V, Karthikeyan B, Saravanan P, Logesh R, Meta-data based secret image sharing application for different sized biomedical images, Biomedical Research, Special Issue: Artificial Intelligent Techniques for Bio Medical Signal Processing , 2018, 0970-938X</td></tr>
        <tr><td>Sheela.V.K, Dr.S.SureshBabu, Brain tumour Detection based on FFT , Curve analysis , k-space and Neural network classifier, International Journal of Signal and Imaging Systems Engineering, 2018, 1748-0701 </td></tr>
        <tr><td>K. Shunmugesh, K. Panneerselvam, Multi-performance Optimization of Drilling Carbon Fiber Reinforced Polymer Using Taguchi: Membership Function, Transactions of the Indian Institute of Metals., 2018, 0975-1645</td></tr>
        <tr><td>Diana Baby, Sujitha Juliet Devaraj, Feature extraction techniques for leukocyte classification - A review, International Journal of Engineering and Technology(UAE), 2018, 2227-524X</td></tr>
        <tr><td>M. P. Jenarthanan, S. Jeyaraj , K. Shunmugesh , Experimental Investigation on Electro-codeposition Nickel-Weld Slag Composite Coating, Transactions of the Indian Institute of Metals., 2018,  0975-1645</td></tr>
        <tr><td>Ajitha A R, Aswathi M K, Lovely Mathew,Sabu Thomas, Carbon Nanotubes: An Ideal Candidate for Biomedical Applications, JSM Nanotechnology & Nanomedicine, 2018,  2334-1815</td></tr>
        <tr><td>Aswathi M K , Ajitha A R , Akhina H , Lovely P. Mathew , ,Sabu Thomas, Quantum Dots: A Promising Tool for Biomedical application, JSM Nanotechnology & Nanomedicine, 2018, 2334-1815</td></tr>
        <tr><td>simi zerine sleeba ,M.G Mini,John Jose, Energy-efficient fault tolerant technique for deflection routers in two-dimensional mesh Network-on-Chips, IET Computers and Digital Techniques, 2018, 1751-8601</td></tr>
        <tr><td>Aswathi M K  , Geethamma V.G ,Lovely P. Mathew ,Sabu Thomas,Prosenjit Saha, Tuning of microstructure in engineered poly (trimethylene terephthalate) based blends with nano inclusion as multifunctional additive, Polymer Testing, 2018, 0142-9418</td></tr>
        <tr><td>KT Akhil, Sanjivi Arul, Optimization of Squeeze Casting Process Parameters Using Taguchi in LM13 Matrix B4C Reinforced Composites, IOP Conference Series: Materials Science and Engineering, 2018, 1757-899X</td></tr>
        <tr><td>Sajan T John, Sridharan, R., Ram Kumar, P. N. and Krishnamoorthy, M., Multi-period reverse logistics network design for used refrigerators, Applied Mathematical Modelling, Vol. 54, 311-331, 2018, 0307-904X</td></tr>
        <tr><td>Shibu K.R,Suji Pramila R, Routing protocol based key management schemes in manet: A survey, International Journal of Engineering and Technology(UAE), 2018, 2227-524X</td></tr>
        <tr><td>Sajan T John, Sridharan, R., and Ram Kumar, P. N. , Reverse logistics network design: a case of mobile phones and digital cameras, International Journal of Advanced Manufacturing Technology, 2018, 1433-3015</td></tr>
        <tr><td>Jerry Varghese,  K.T. Akhil, Arun Raphel,  Frenosh K Francis, Vinoj K, To Study the Cooling Rate and Influence of Boron Carbide on Mechanical Properties of Aluminium LM13 Matrix B4C Reinforced Composites , Materials Today: Proceedings 4 , 7202-7207, 2017,  2214-7853</td></tr>
        <tr><td>Robin Joyce,Minu George,Lokasani BhanuprakashDeepak Kumar Panwar,Ravi Raj Batia,Soney Varghese, Investigation on the effects of low temperature anodic bonding and its reliability  for MEMS packaging using destructive and non-destructive techniques, Journal of Materials Science: Materials in Electronics, 2017, 0957-4522</td></tr>
        <tr><td>Jerry Varghese,  K.T. Akhil, K Shunmugesh,  Vinoj K, Sanjivi Arul, R Sellamuthu, Influence of heat Treatment and aging process on LM13 Aluminium Alloy Cast Sections: An Experimental Study, Materials Today: Proceedings 4 , 7202-7208, 2017,  2214-7853</td></tr>
        <tr><td>K. Shunmugesh K.T. Akhil S.Aravind M.Pramodkumar, Optimization of Drilling Characteristics using Grey-Fuzzy logic in Glass Fiber Reinforced Polymer (GFRP), Materials Today: Proceedings (Elsevier), 2017,  2214-7853</td></tr>
        <tr><td>B Thamotharan, Vaithiyanathan, Venkatraman, Anishin Raj M.M, B Karthikeyan , A novel image processing approach for finding the bubble count in neutron dosimeter, Disaster Advances, 2017, 0974-262X</td></tr>
        <tr><td>K. Shunmugesh K. Panneerselvam, Optimization of Drilling Process Parameters Via Taguchi, TOPSIS and RSA Techniques, Archives of Metallurgy and Materials, 2017,  1733-3490</td></tr>
        <tr><td>Leeba Varghese, S. Aravind, K. Shunmugesh, Multi-Objective Optimization of Machining Parameters during Dry Turning of 11SMn30 Free Cutting Steel Using Grey Relational Analysis, Materials today : Proceedings, 2017, 2218-7853</td></tr>
        <tr><td>G Vijayakumar, S Chandramouli, B.K Nashine, P.Selvaraj,  K.K Rajan , Leak Experiments in LEENA Facility with modified Leak Detector Layout Large Pipelines, Annals of Nuclear Energy, 2017, 0306-4549</td></tr>
        <tr><td>G. Padmakumar,K. Velusamy,B.V.S.S Prasad,K.K Rajan , Hydraulic characteristics of a fast reactor fuel subassembly: An experimental investigation, Annals of Nuclear Energy, 2017, 0306-4549</td></tr>
        <tr><td>T. Chinna Pamulety,  Joby George and  V.M. Pillai, An Inventory Position-Based Policy for Better Supply Chain Performance, Journal of Industrial and Production Engineering, 2017, 2168-1023</td></tr>
        <tr><td>Ch Mahendra,P.M Satya Sai,Anand Babu,K.K Rajan , Transport phenomena in the electrodeionization of cesium from AMP-PAN, Separation Science and Technology (Philadelphia), 2017, 0149-6395</td></tr>
        <tr><td>ArunRaphel,  S.Kumaran, VinoadhKumar,  LovinVarghese, Oxidation and Corrosion resistance of AlCoCrFeTi High Entropy Alloy,  Materials Today Proceedings 4 ,195-202, 2017, 2214-7853</td></tr>
        <tr><td>Genuvin Cyriac, Bins Paul, KT Akhil, K Shunmugesh, The Effect of Fiber Loading on the Mechanical Behaviour of Carbonaramid Hybrid Composites, Polymers & Polymer Composites, 2017, 0967-3911</td></tr>
        <tr><td>Blaise Solomon, Davis George, K Shunmugesh, KT Akhil, The Effect of Fibers Loading on the Mechanical Properties of Carbon Epoxy Composite, Polymers & Polymer Composites, 2017, 0967-3911</td></tr>
        <tr><td>N.S Shivakumar,Nagaraju Bekkenti,S. Suresh Kumar,N. Ravichandran,V.Vinod,G.Padmakumar,K.K Rajan , Evaluation of hydraulic characteristics of Core Flow Monitoring Mechanism for PFBR, Annals of Nuclear Energy, 2017, 0306-4549</td></tr>
        <tr><td>Aravind, S., Shunmugesh, K., Biju, J., & Vijayan, J. K, Optimization of Micro-Drilling Parameters by Taguchi Grey Relational Analysis, Materials Today: Proceedings,, 2017, 2214-7853</td></tr>
        <tr><td>Aruna B., Devanathan R., Necessary and sufficient condition for modified Nevanlinna-Pick interpolation for closed-loop pole placement, Control Theory and Technology, 2017, 2095-6983</td></tr>
        <tr><td>Sajan T John, Sridharan, R., and Ram Kumar, P. N. , Multi-period reverse logistics network design with emission cost, International Journal of Logistics Management, 2017,  0957-4093</td></tr>
        <tr><td>S Aravind, K Shunmugesh, KT Akhil, M Pramodkumar, Process Capability Analysis and Optimization in Turning of 11sMn30 Alloy, Materials Today: Proceedings,, 2017, 2214-7853</td></tr>
        <tr><td>KT Akhil, K Shunmugesh, S Aravind, M Pramodkumar, Optimization of Drilling Characteristics using Grey Relational Analysis (GRA) in Glass Fiber Reinforced Polymer (GFRP), Materials Today: Proceedings,, 2017, 2214-7853</td></tr>
        <tr><td>Simi zerine sleeba ,M.G. Mini, An enhanced model for reliable deflection routing in mesh network on chip, International Journal of High Performance Systems Architecture, 2017, 1751-6536</td></tr>
        <tr><td>Joby George and V. Madhusudanan Pillai, Transfer Function Models of Inventory Policies and Bullwhip Quantification in Supply Chain, Procedia Technology, 2016, 2212-0173</td></tr>
        <tr><td>V. Babu,M. Sai Baba,B.P.C Rao,K.K Rajan , Numerical simulation of Miniature Mutual inductance type leak detector for FBTR, IETE Technical Review, 2016, 0256-4602</td></tr>
        <tr><td>P Dhanasekaran,P.M Satya Sai,C.Anandababu,K.K Rajan , Defluoridation of water by chemical impregnated Artocarpus hirsutus sawdust, Water Science and Technology: Water Supply, 2016, 1607-0798</td></tr>
        <tr><td>V.Prakash,p Anup Kumar,K.K rajan,Krishnan Balasubramaniam, Ultrasonic technique for vibration measurements on PFBR fuel subassemblies, Journal of Vibration Engineering and Technologies, 2016,  2523-3939 </td></tr>
        <tr><td>Ranga Ramakrishna,S.Kishore, S.Chandramouli, V.A  Suresh Kumar, V.Prakash,K.K Rajan , Experimental studies on acoustic leak detection in steam generators of Fast Breeder Reactor, Journal of Maintenance Engineering, 2016, 1355-2511</td></tr>
        <tr><td>Muhammad Sabih,K.K Rajan ,V.Prakash,V.A Suresh Kumar,G Padmakumar, Design and performance evaluation of Core flow monitoring mechanisms for PFBR, Annals of Nuclear Energy, 2016, 0306-4549</td></tr>
        <tr><td>Vinod B,Sreedhar BK,G.Padmakumar,K.K Rajan , Optimization of thermal baffle for liquid metal injection nozzle, International of Journal of Nuclear Energy science and technology, 2016, 1741-6361</td></tr>
        <tr><td>S.P. Patak,V.A Suresh Kumar,I.B Noushad,K.K Rajan ,K Velusamy,C Balaji, Porous Body Model Based Parametric Study for Sodium to Air Heat Exchanger used in Fast Reactors, Journal of Thermal Science and Engineering Applications, 2016, 1948-5093</td></tr>
        <tr><td>Jobin Jose, N Ramasubramanian, A survey on last level cache partitioning techniques in chip multi-processors, International Journal of Control Theory and Applications, 2016, 0974-5572</td></tr>
        <tr><td>Amel Austine, R. Suji Pramila, A Review on Recent Research Directions in Device to Device Communication, Proceedings of 3rd IEEE International Conference on Inventive Computation Technologies (ICICT) – 2018, 2020, 978-1-5386-4985-5 </td></tr>
        <tr><td>Soorya Shaji, M Sreeraj, Jestin Joy, Alphonsa Kuriakose , On Computer-Aided Diagnosis of Breast Cancers Using Nuclear Atypia Scoring, Proceedings of ComNet19, 2020,  1876-1100</td></tr>
        <tr><td>Diana Baby , Sujitha Juliet Devaraj,Soumya Mathew,Anishin Raj M.M, , A Performance Comparison   of Supervised   and Unsupervised Image   Segmentation Methods, Proceedings of ICACI-2019:   Springer Nature Computer Science (Advances   in Computational   Approaches for   Artificial Intelligence,   Image Processing, IoT a  nd Cloud Applications-Topical  collection), 2020, 2662-995X (Print)     2661-8907 (Online)</td></tr>
        <tr><td>Juliet A Murali, An Enhanced Hierarchical Model For Cloud Computing Environments, Proceedings of ACCESS'20, 2020 (Paper accepted), 978-81-946084-0-0</td></tr>
        <tr><td>Neenu Daniel,A.Anitha, A Study on Recent Trends in Face Spoofing Detection Techniques, proceedings of 3rd IEEE International Conference on Inventive Computation Technologies , 2020, 978-1-5386-4985-5 </td></tr>
        <tr><td>Nelson Mathew, Sebin Joseph &  Cyriac Joseph, An Empirical Analysis on Investment Behavior among working Women: Are Women Taking the right Investment Decisions for their Future?, Proceedings 4th International marketing conference IIM K,Dec 7-9,2020, 2020, ISBN :978-93-5419-748-2</td></tr>
        <tr><td>Ranjini Surendran, DJ Hemanth, Scene Understanding Using  Deep Neural Networks— Objects, Actions, and Events:  A Review, Proceedings of the International Conference on  Innovative Computing and  Communications , 2020,  978-981-15-1286-5</td></tr>
        <tr><td>K K Rajan, A study on sodium - the fast breeder reactor coolant, IOP Conference Series: Materials Science and Engineering, 2020, 1757-899X</td></tr>
        <tr><td>K K Rajan , B Aruna, Performance evaluation of a 200 kWp grid tied solar power plant, IOP Conference Series: Materials Science and Engineering, 2020, 1757-899X</td></tr>
        <tr><td>Neena M. Joseph, M. Harikrishna, M.V.L.R. Anjaneyulu, Safety evaluation of multiple horizontal curves using statistical models, International Journal of Vehicle Safety, 2020 (Paper accepted), 1479-3113</td></tr>
        <tr><td>Basil Baby,Daniel A.V,Emmanuel Jose,P.P Gokul,Naveen John,Sachin saju, Experimental Investigation on PCE and SNF Type Admixture on Early Age Strength of M40 Grade Green Concrete, Proceedings of SECON'19, 2019, 978-3-030-26365-2</td></tr>
        <tr><td>K.K. Rajan, Aruna B., A Review on Flow Measurement in Sodium Cooled Fast Reactor Circuits, Proceedings of 2019 3rd IEEE International Conference on Electrical, Computer and Communication Technologies, ICECCT 2019, 2019,   978-1-5386-8158-9 </td></tr>
        <tr><td>Rajan, K.K., Verma, S., Aruna, B., Anju, S., Bhattacharyay, R., Development of Level Sensor for Lead - Lithium Loop System, Proceedings of 2019 3rd IEEE International Conference on Electrical, Computer and Communication Technologies, ICECCT 2019, , 2019, 978-1-5386-8158-9 </td></tr>
        <tr><td>Simi Zerine Sleeba, J Jose, M Palesi , Traffic Aware Deflection Rerouting Mechanism for Mesh Network on Chip, Proceedings of 2018  IEEE/IFIP International Conference on VLSI and System-on-Chip, VLSI-SoC, 2019, 978-1-5386-4756-1                           2324-8440</td></tr>
        <tr><td>RG Kunthara, RK James,Simi Zerine Sleeba, ReDC: Reduced Deflection CHIPPER Router for Bufferless NoCs, Proceedings of the 2018 8th International Symposium on Embedded Computing and System Design, ISED 2018, 2019,  978-1-5386-6575-6                          2473-9413</td></tr>
        <tr><td>RG Kunthara, RK James,Simi Zerine Sleeba, 2L-2D Routing for Buffered Mesh Network-on-Chip, Proceedings of the International Symposium on VLSI Design and Test, 2019, 978-981-32-9767-8</td></tr>
        <tr><td>E Nandhini, BS Sreeja,Melvin C Jose , Implementation of Aperture coupled Stacked layer Microstrip Patch Antennas for 5G Wireless Communication Systems, Proceedings - International Conference on Vision Towards Emerging Trends in Communication and Networking, ViTECoN 2019, 2019, 978-1-5386-9353-7 </td></tr>
        <tr><td>Melvin C Jose, S Radha, BS Sreeja, Design of 28 GHz High Gain 5G MIMO Antenna Array System, Proceedings of TENCON 2019 - 2019 IEEE Region 10 Conference (TENCON), 2019, 978-1-7281-1895-6 </td></tr>
        <tr><td>Naveen Jacob, Muralidhar Kulkarni & Krishnamoorthi K.,  A Compact Frequency Reconfigurable Antenna for Cognitive Radio Applications, Proceedings of  International Engineering Symposium (IES-2019), Kumamoto University, Japan, 2019, Nil</td></tr>
        <tr><td>Joby George and V. Madhusudanan Pillai , A study of factors affecting supply chain performance, Journal of Physics Conference Series website, 2019,                 1742-6596</td></tr>
        <tr><td>Cyriac M odackal,A.O Lindo,C.K. Aanandan,Thomaskutty Matthew, Backscattereing reduction of dihedreal corner reflector with metallo-dielectric structure based on sierpinsky carpet array, IEEE Proceedings of the Progress in Electromagnetics Research Symposium - Fall (PIERS - FALL), 2018, 978-1-5386-1211-8</td></tr>
        <tr><td>K.K. Rajan, A Review of Recent Advancements in Nuclear Power Generation, IEEE Proceedings of the International Conference on Control, Power, Communication and Computing Technologies, 2018, 978-1-5386-0796-1 </td></tr>
        <tr><td>Juliet A Murali,T Brindha., Analysis of Scheduling Algorithms in Hadoop, Communications in Computer and Information Science book series , , 2018, 1865-0929</td></tr>
        <tr><td>Sethulekshmi Raju ,Naveen Jacob,  A Low Power Content Addressable Memory with  Self-Control Mechanism and Segmented Matchlines, Proceedings of IEEE  International Conference on Energy, Communication, Data Analytics and Soft  Computing (ICECDS), 2018, 978-1-5386-1887-5</td></tr>
        <tr><td>Anu Mary Sunny , Naveen Jacob,  Application of Distributed Arithmetic in Image and  ECG Signal Processing, Proceedings of IEEE International Conference on Current  Trends in Computer, Electrical, Electronics and Communication (CTCEEC), 2018, 978-1-5386-3243-7</td></tr>
        <tr><td>Naveen Jacob, Muralidhar Kulkarni & Krishnamoorthi K.,  A Compact Reconfigurable Penta-Band Artificial Magnetic Conductor for WiFi  Applications, Proceedings of IEEE–INAE Workshop on Electromagnetics (IIWE-2018), 2018, Nil</td></tr>
        <tr><td>P. Lijukrishnan,D. Ramdasu,V. Vinod,G. Padmakumar,K.K. Rajan, Numerical simulation and experimental validation of future FBR surge tank hydraulics, Proceedings of the 5th International and 41st National Conference on FMFP 2014, 2017, 978-81-322-2743-4</td></tr>
        <tr><td>B. Karthikeyan; A. Deepak; K.S. Subalakshmi; Anishin Raj M M; V. Vaithiyanathan, A Combined approach of Steganography with LSB Encoding technique and DES Algorithm, IEEE Proceedings of the Third International Conference on Advances in Electrical, Electronics, Information, Communication and Bio-Informatics (AEEICB), 2017, 978-1-5090-5434-3</td></tr>
        <tr><td>B. Karthikeyan;K. P. Akshaya;V. S. Ramanujan;C. S. Srirag, A simple bit plane based robust watermarking scheme, IEEE Proceedings of the International Conference on Intelligent Computing and Control Systems, 2017, 978-1-5386-2745-7</td></tr>
        <tr><td>M. Rajasekhar Reddy;R Akilandeswari;S. Priyadarshini;B. Karthikeyan;E. Ponmani, A modified cryptographic approach for securing distributed data storage in cloud computing, IEEE Proceedings of the 2017 International Conference on Networks & Advances in Computational Technologies , 2017, 978-1-5090-6590-5</td></tr>
        <tr><td>Sinnu Susan Thomas;Sumana Gupta;Venkatesh K. Subramanian, Smart surveillance based on video summarization, Proceedings of IEEE TENSYMP 2017 - IEEE International Symposium on Technologies for Smart Cities, 2017, 978-1-5090-6255-3</td></tr>
        <tr><td>Himanshu Kumar;Saumik Bhattacharya;Sinnu Susan Thomas;Sumana Gupta;K. S. Venkatesh, Design of smart video surveillance system for indoor and outdoor scenes, Proceedings of IEEE International Conference on Digital Signal Processing, DSP, 2017, 978-1-5386-1895-0</td></tr>
        <tr><td>B. Karthikeyan;A. Deepak;K.S. Subalakshmi;Anishin Raj M M;V. Vaithiyanathan, A combined approach of  steganography  with LSB encoding technique and  des algorithm, Proceedings of the 3rd  IEEE International  Conference on Advances  in Electrical and  Electronics, Information , Communication and  Bio-Informatics,  AEEICB 2017 ( SCOPUS Indexed), 2017, 978-1-5090-5434-3</td></tr>
        <tr><td>Satyanarayana Vollala; S. Indrajeet; Amit D. Joshi; P. S. Tamizharasan; Jobin Jose, Implementation of algorithms for  L(2,1)-coloring problems, IEEE conference proceedings, 2017, 978-1-5090-3038-5</td></tr>
        <tr><td>TG Unnikrishnan, Cherian Paul, R Sellamuthu, Sanjivi Arul, An investigation on the effects of Co, Ti and Si on microstructure, hardness and wear properties of AlCuNiFe based entropy alloys, Materials Today: Proceedings, 2017,  2214-7853</td></tr>
        <tr><td>Jina Varghese,K.N Ramachandran Nair, Detecting video shot boundaries by modified tomography, Proceedings of the Third International Symposium on Computer Vision and the Internet, 2016, 978-1-4503-4301-5</td></tr>
        <tr><td>Jina Varghese,K.N Ramachandran Nair, An Algorithmic Approach for General Video Summarization, Proceedings  of the IEEE  5th International Conference on Advances in Computing and Communications,, 2016, 978-1-4673-6994-7</td></tr>
        <tr><td>Venkata Keerthy S;Rhishi Kishore T K C;Karthikeyan B;Vaithiyanathan V;Anishin Raj M M, A hybrid technique for  quadrant based data hiding  using Huffman coding, Proceedings of the IEEE  International Conference  on Innovations in  Information, Embedded  and Communication  Systems , 2015, 978-1-4799-6818-3</td></tr>
        <tr><td>S. Sriram;B. Karthikeyan;V. Vaithiyanathan;M.M. Anishin Raj, An approach of cryptography and  steganography using rotor cipher  for secure transmission, Proceedings of the IEEE International Conference on Computational Intelligence and Computing Research, 2015, 978-1-4799-7849-6</td></tr>
        <tr><td>Sony Kurian, T. K. Sindhu, Elizabeth P. Cheriyan, Composite pricing strategy for energy storage in wind electric generation,  2015 IEEE PES Asia-Pacific Power and Energy Engineering Conference (APPEEC), Brisbane, Australia, 2015, 978-1-4673-8132-1</td></tr>
        <tr><td>Rajesh Cherian Roy, The Relationship between the WHT and the CIT, Procedia Computer Science, 2015, 1877-0509</td></tr>
        <tr><td>Jyothi Joms, V K Vanitha Rugmoni,  A Novel Multiple Errors Recovery Technique in TMR Systems, Proceedings of the  International Conference on Instrumentation,Electrical and Electronics Engineering, 2015, 978-93-85225-36-9</td></tr>
        <tr><td>Basil Baby, Serin Sara Roy, Emmanuel Jose, Characteristics of Green Concrete with Perlite as a Partial Replacement of Fine Aggregate, Proceedings of the Annual International Conference on Emerging Research Areas, 2020, 9780429353628</td></tr>
        <tr><td>Jibin Boban,Arun Lawrence, Manesh K K, Leeba Varghese, Effect of polarity in micro-electrical discharge machining, Emerging Trends in Engineering, Science and Technology for Society, Energy and Environment - Proceedings of the International Conference in Emerging Trends in Engineering, Science and Technology, ICETEST 2018, 2018, 978-1-3511-2414-0</td></tr>
        <tr><td>M.J. Neena ,M. Harikrishna , M.V.L.R. Anjaneyulu, Operating speed of different classes of vehicles at summit vertical curves on two-lane non-urban roads, Proceedings of the International Conference in Emerging Trends in Engineering, Science and Technology, 2018, 978-1-3511-2414-0</td></tr>
        <tr><td>Anitha Rajan, Premanand M.E, Grammar worksheets, Enhance your English, 2017, 9788130023199</td></tr>
    </table>
               
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Reserch;