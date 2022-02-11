import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2021 = () => {
        const data = {
          columns: [
            {
                label: 'SL. NO',
                field: 'slno',
                sort: 'asc',
                width: 100
              },
            {
              label: 'COMPANY',
              field: 'company',
              sort: 'asc',
              width: 270
            },
            {
              label: 'YEAR',
              field: 'year',
              sort: 'asc',
              width: 270
            },
            {
              label: 'BRANCH',
              field: 'branch',
              sort: 'asc',
              width: 150
            },
            {
              label: 'NO OF STUDENTS',
              field: 'no_of_students',
              sort: 'asc',
              width: 270
            }
          ],
          rows: [
            {
                slno: '92',
                company: 'Aabasoft',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '91',
                company: 'SHILPI ARCHITECT',
                year: '2021',
                branch: 'CIVIL',
                no_of_students: '01'
            },
            {
                slno: '90',
                company: 'Power India Electrical',
                year: '2021',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '89',
                company: 'Power India Electrical',
                year: '2021',
                branch: 'CIVIL',
                no_of_students: '01'
            },
            {
                slno: '88',
                company: 'Metadata Technologies',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },

            {
                slno: '86',
                company: 'Say One Technologies',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '85',
                company: 'Say One Technologies',
                year: '2021',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '84',
                company: 'Say One Technologies',
                year: '2021',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '83',
                company: 'Suyati Technologies',
                year: '2021',
                branch: 'IT',
                no_of_students: '04'
            },
            {
                slno: '82',
                company: 'Suyati Technologies',
                year: '2021',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '81',
                company: 'Suyati Technologies',
                year: '2021',
                branch: 'ECE',
                no_of_students: '08'
            },
            {
                slno: '80',
                company: 'Suyati Technologies',
                year: '2021',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '79',
                company: 'Think Palm',
                year: '2021',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '78',
                company: 'Think Palm',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '77',
                company: 'Quest Global',
                year: '2021',
                branch: 'CSE',
                no_of_students: '05'
            },
            {
                slno: '76',
                company: 'Coinedone Technologies',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '75',
                company: 'Guidehouse',
                year: '2021',
                branch: 'CSE',
                no_of_students: '05'
            },
            {
                slno: '74',
                company: 'Opteamix',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '73',
                company: 'WIPRO',
                year: '2021',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '72',
                company: 'UST',
                year: '2021',
                branch: 'IT',
                no_of_students: '05'
            },
            {
                slno: '71',
                company: 'UST',
                year: '2021',
                branch: 'EEE',
                no_of_students: '03'
            },
            {
                slno: '70',
                company: 'UST',
                year: '2021',
                branch: 'ECE',
                no_of_students: '08'
            },
            {
                slno: '69',
                company: 'UST',
                year: '2021',
                branch: 'CSE',
                no_of_students: '10'
            },
            {
                slno: '68',
                company: 'Nest Digital',
                year: '2021',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '67',
                company: 'Nest Digital',
                year: '2021',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '66',
                company: 'Nest Digital',
                year: '2021',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '65',
                company: 'Capgemini',
                year: '2021',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '64',
                company: 'Capgemini',
                year: '2021',
                branch: 'CSE',
                no_of_students: '05'
            },
            {
                slno: '63',
                company: 'Rapid Value',
                year: '2021',
                branch: 'IT',
                no_of_students: '03'
            },
            {
                slno: '62',
                company: 'Rapid Value',
                year: '2021',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '61',
                company: 'Rapid Value',
                year: '2021',
                branch: 'ECE',
                no_of_students: '10'
            },
            {
                slno: '60',
                company: 'Rapid Value',
                year: '2021',
                branch: 'CSE',
                no_of_students: '09'
            },
            {
                slno: '59',
                company: 'Orion India System Pvt.LTD',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '58',
                company: 'Litmus7 Circuit branches',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '57',
                company: 'Cognizant',
                year: '2021',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '56',
                company: 'Midtree',
                year: '2021',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '55',
                company: 'Midtree',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '54',
                company: 'IBM',
                year: '2021',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '53',
                company: 'Acenture',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '52',
                company: 'Acenture',
                year: '2021',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '51',
                company: 'Acenture',
                year: '2021',
                branch: 'CSE',
                no_of_students: '20'
            },
            {
                slno: '50',
                company: 'Playshifu',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '49',
                company: 'Carestack',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '48',
                company: 'Qdessa Technologies',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            }, 
   
            {
                slno: '47',
                company: 'KeyValue',
                year: '2021',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '46',
                company: 'WILEYS',
                year: '2021',
                branch: 'EEE',
                no_of_students: '01'
            },

            {
                slno: '45',
                company: 'Envestnet',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            }, 
            {
                slno: '44',
                company: 'Envestnet',
                year: '2021',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '43',
                company: 'Quest Global',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },

            {
                slno: '41',
                company: 'Quest Global',
                year: '2021',
                branch: 'ECE',
                no_of_students: '04'
            },
            {
                slno: '40',
                company: 'Quest Global',
                year: '2021',
                branch: 'CSE',
                no_of_students: '05'
            },

            {
                slno: '39',
                company: '6D Technologies',
                year: '2021',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '38',
                company: '6D Technologies',
                year: '2021',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '37',
                company: 'FACE',
                year: '2021',
                branch: 'ME',
                no_of_students: '01'
            },

            {
                slno: '36',
                company: 'FACE',
                year: '2021',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '35',
                company: 'FACE',
                year: '2021',
                branch: 'EEE',
                no_of_students: '02'
            }, 
            {
                slno: '34',
                company: 'FACE',
                year: '2021',
                branch: 'CIVIL',
                no_of_students: '01'
            },
            {
                slno: '33',
                company: 'PIT solutions',
                year: '2021',
                branch: 'ECE',
                no_of_students: '02'
            },             
            {
                slno: '32',
                company: 'Sutherland Global',
                year: '2021',
                branch: 'EEE',
                no_of_students: '05'
            },
            {
                slno: '31',
                company: 'SUTHERLAND GLOBAL',
                year: '2021',
                branch: 'ME',
                no_of_students: '09'
            },
            {
                slno: '30',
                company: 'SUTHERLAND GLOBAL',
                year: '2021',
                branch: 'IT',
                no_of_students: '03'
            },
            {
                slno: '29',
                company: 'SUTHERLAND GLOBAL',
                year: '2021',
                branch: 'IT',
                no_of_students: '07'
            },
            {
                slno: '28',
                company: 'Sutherland Global',
                year: '2021',
                branch: 'EEE',
                no_of_students: '05'
            },
            {
                slno: '27',
                company: 'Sutherland Global',
                year: '2021',
                branch: 'ECE',
                no_of_students: '21'
            },
            {
                slno: '26',
                company: 'Sutherland Global',
                year: '2021',
                branch: 'CSE',
                no_of_students: '12'
            },
            {
                slno: '25',
                company: 'Sutherland Global',
                year: '2021',
                branch: 'CIVIL',
                no_of_students: '16'
            },
            
            {
                        slno: '24',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '02'
                    },
                    {
                        slno: '23',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '03'
                    },
                    {
                        slno: '22',
                        company: 'EXPERION',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '11'
                    },
                    {
                        slno: '21',
                        company: 'FACTWEAVERS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '20',
                        company: 'GADGEON',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '19',
                        company: 'GUIDEHOUSE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '04'
                    },
                    {
                        slno: '18',
                        company: 'IMAGE INFO SYSTEM',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '17',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '07'
                    },
                    {
                        slno: '16',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '07'
                    },
                    {
                        slno: '15',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '02'
                    },
                    {
                        slno: '14',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '16'
                    }, 
                    {
                        slno: '13',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '12',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '01'
                    },
                    {
                        slno: '11',
                        company: 'MITSOGO',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '01'
                    },
                    {
                        slno: '10',
                        company: 'NMS WORKS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '06'
                    },
                    {
                        slno: '09',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '15'
                    },
                    {
                        slno: '08',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '15'
                    },
                    {
                        slno: '07',
                        company: 'TCS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '4'
                    },
                    {
                        slno: '06',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '34'
                    },
                    {
                        slno: '05',
                        company: 'TCS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '02'
                    },
                    {
                        slno: '04',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '03',
                        company: 'VIT',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '02',
                        company: 'VVDN',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '01',
                        company: 'ZERONE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                ]
              };
              
  
    return (
      <div>

      
      <MDBDataTable
      striped
      bordered
      small
      data={data}
      />
      </div>
      );
    }

export default Recruitment2021;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    