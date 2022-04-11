import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2022 = () => {
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
                slno: '69',
                company: 'Tata Elxsi',
                year: '2022',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '68',
                company: 'Face Prep',
                year: '2022',
                branch: 'CIVIL',
                no_of_students: '01'
            },
            {
                slno: '67',
                company: 'Face Prep',
                year: '2022',
                branch: 'ME',
                no_of_students: '06'
            },
            {
                slno: '66',
                company: 'Face Prep',
                year: '2022',
                branch: 'ECE',
                no_of_students: '01'
            },
            {
                slno: '65',
                company: 'Capgemini',
                year: '2022',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '64',
                company: 'Capgemini',
                year: '2022',
                branch: 'ME',
                no_of_students: '01'
            },
            {
                slno: '63',
                company: 'Capgemini',
                year: '2022',
                branch: 'IT',
                no_of_students: '03'
            },
            {
                slno: '62',
                company: 'Capgemini',
                year: '2022',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '61',
                company: 'Capgemini',
                year: '2022',
                branch: 'ECE',
                no_of_students: '01'
            },
            {
                slno: '60',
                company: 'Capgemini',
                year: '2022',
                branch: 'CSE',
                no_of_students: '06'
            },
            {
                slno: '59',
                company: 'Mind Tree',
                year: '2022',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '58',
                company: 'VVDN',
                year: '2022',
                branch: 'ECE',
                no_of_students: '01'
            },
            {
                slno: '57',
                company: '6 D Technologies',
                year: '2022',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '56',
                company: '6 D Technologies',
                year: '2022',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '55',
                company: 'Midtree',
                year: '2022',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '54',
                company: 'Elitmus',
                year: '2022',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '53',
                company: 'TCS',
                year: '2022',
                branch: 'IT',
                no_of_students: '06'
            },
            {
                slno: '52',
                company: 'TCS',
                year: '2022',
                branch: 'EEE',
                no_of_students: '03'
            },
            {
                slno: '51',
                company: 'TCS',
                year: '2022',
                branch: 'CIVIL',
                no_of_students: '12'
            },
            {
                slno: '50',
                company: 'TCS',
                year: '2022',
                branch: 'ME',
                no_of_students: '11'
            },
            {
                slno: '49',
                company: 'TCS',
                year: '2022',
                branch: 'ECE',
                no_of_students: '13'
            },
            {
                slno: '48',
                company: 'TCS',
                year: '2022',
                branch: 'CSE',
                no_of_students: '35'
            }, 
   
            {
                slno: '47',
                company: 'Guidehouse',
                year: '2022',
                branch: 'IT',
                no_of_students: '02'
            },
            {
                slno: '46',
                company: 'Guidehouse',
                year: '2022',
                branch: 'ME',
                no_of_students: '02'
            },

            {
                slno: '45',
                company: 'Guidehouse',
                year: '2022',
                branch: 'ECE',
                no_of_students: '03'
            }, 
            {
                slno: '44',
                company: 'Guidehouse',
                year: '2022',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '43',
                company: 'Zoho Corporation',
                year: '2022',
                branch: 'CSE',
                no_of_students: '01'
            },

            {
                slno: '41',
                company: 'Indoshell',
                year: '2022',
                branch: 'ME',
                no_of_students: '06'
            },
            {
                slno: '40',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'EEE',
                no_of_students: '07'
            },
            {
                slno: '39',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'IT',
                no_of_students: '04'
            },
            {
                slno: '38',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'CIVIL',
                no_of_students: '19'
            },
            {
                slno: '37',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'ME',
                no_of_students: '19'
            },

            {
                slno: '36',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'ECE',
                no_of_students: '20'
            },
            {
                slno: '35',
                company: 'Sutherland Global',
                year: '2022',
                branch: 'CSE',
                no_of_students: '18'
            }, 
            {
                slno: '34',
                company: 'IBS',
                year: '2022',
                branch: 'IT',
                no_of_students: '02'
            },
            {
                slno: '33',
                company: 'IBS',
                year: '2022',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '32',
                company: 'IBS',
                year: '2022',
                branch: 'CSE',
                no_of_students: '25'
            },
            {
                slno: '31',
                company: 'UST Global',
                year: '2022',
                branch: 'IT',
                no_of_students: '03'
            },             
            {
                slno: '30',
                company: 'UST Global',
                year: '2022',
                branch: 'EEE',
                no_of_students: '03'
            },
            {
                slno: '29',
                company: 'UST Global',
                year: '2022',
                branch: 'ECE',
                no_of_students: '06'
            },
            {
                slno: '28',
                company: 'UST Global',
                year: '2022',
                branch: 'CSE',
                no_of_students: '16'
            },
            {
                slno: '27',
                company: 'WIPRO',
                year: '2022',
                branch: 'IT',
                no_of_students: '02'
            },
            {
                slno: '26',
                company: 'WIPRO',
                year: '2022',
                branch: 'ECE',
                no_of_students: '01'
            },
            {
                slno: '25',
                company: 'WIPRO',
                year: '2022',
                branch: 'CSE',
                no_of_students: '21'
            },
            {
                slno: '24',
                company: 'Quest Global',
                year: '2022',
                branch: 'IT',
                no_of_students: '03'
            },
            
            {
                        slno: '23',
                        company: 'Quest Global',
                        year: '2022',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '22',
                        company: 'Quest Global',
                        year: '2022',
                        branch: 'ECE',
                        no_of_students: '05'
                    },
                    {
                        slno: '21',
                        company: 'Quest Global',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '11'
                    },
                    {
                        slno: '20',
                        company: 'Aspire',
                        year: '2022',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '19',
                        company: 'Aspire',
                        year: '2022',
                        branch: 'ECE',
                        no_of_students: '03'
                    },
                    {
                        slno: '18',
                        company: 'Aspire',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '07'
                    },
                    {
                        slno: '17',
                        company: 'INFOSYS',
                        year: '2022',
                        branch: 'CIVIL',
                        no_of_students: '06'
                    },
                    {
                        slno: '16',
                        company: 'INFOSYS',
                        year: '2022',
                        branch: 'ECE',
                        no_of_students: '05'
                    },
                    {
                        slno: '15',
                        company: 'INFOSYS',
                        year: '2022',
                        branch: 'IT',
                        no_of_students: '03'
                    },
                    {
                        slno: '14',
                        company: 'INFOSYS',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '32'
                    }, 
                    {
                        slno: '13',
                        company: 'INFOSYS',
                        year: '2022',
                        branch: 'ME',
                        no_of_students: '05'
                    },
                    {
                        slno: '12',
                        company: 'Virtusa',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '10'
                    },
                    {
                        slno: '11',
                        company: 'Experion',
                        year: '2022',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '10',
                        company: 'Experion',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '09'
                    },
                    {
                        slno: '09',
                        company: 'Qburst',
                        year: '2022',
                        branch: 'IT',
                        no_of_students: '02'
                    },
                    {
                        slno: '08',
                        company: 'Qburst',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '06'
                    },
                    {
                        slno: '07',
                        company: 'IBM',
                        year: '2022',
                        branch: 'IT',
                        no_of_students: '4'
                    },
                    {
                        slno: '06',
                        company: 'IBM',
                        year: '2022',
                        branch: 'ECE',
                        no_of_students: '02'
                    },
                    {
                        slno: '05',
                        company: 'IBM',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '04',
                        company: 'Gadgeon Smart Systems',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '03',
                        company: 'TECH MAHINDRA Cerium',
                        year: '2022',
                        branch: 'ECE',
                        no_of_students: '02'
                    },
                    {
                        slno: '02',
                        company: 'Marlabs',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '01'
                    },
                    {
                        slno: '01',
                        company: 'Envestnet',
                        year: '2022',
                        branch: 'CSE',
                        no_of_students: '01'
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

export default Recruitment2022;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    