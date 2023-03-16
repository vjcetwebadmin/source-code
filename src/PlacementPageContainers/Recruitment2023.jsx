import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2023 = () => {
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
                slno: '47',
                company: 'TCS',
                year: '2023',
                branch: 'CSE',
                no_of_students: '14'
            },
            {
                slno: '46',
                company: 'TCS',
                year: '2023',
                branch: 'CIVIL',
                no_of_students: '02'
            },
            {
                slno: '45',
                company: 'TCS',
                year: '2023',
                branch: 'ME',
                no_of_students: '05'
            },
            {
                slno: '44',
                company: 'TCS',
                year: '2023',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '43',
                company: 'TCS',
                year: '2023',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '42',
                company: 'Experion',
                year: '2023',
                branch: 'CSE',
                no_of_students: '13'
            },
            {
                slno: '41',
                company: 'Experion',
                year: '2023',
                branch: 'ECE',
                no_of_students: '07'
            },
            {
                slno: '40',
                company: 'Experion',
                year: '2023',
                branch: 'IT',
                no_of_students: '04'
            },
            {
                slno: '39',
                company: 'GADGEON',
                year: '2023',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '38',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'CSE',
                no_of_students: '04'
            },
            {
                slno: '37',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'ECE',
                no_of_students: '05'
            },
            {
                slno: '36',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'ME',
                no_of_students: '05'
            },
            {
                slno: '35',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'CIVIL',
                no_of_students: '07'
            },
            {
                slno: '34',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'IT',
                no_of_students: '05'
            },
            {
                slno: '33',
                company: 'Sutherland Global',
                year: '2023',
                branch: 'EEE',
                no_of_students: '01'
            },
            {
                slno: '32',
                company: '6d Technologies',
                year: '2023',
                branch: 'CSE',
                no_of_students: '13'
            },
            {
                slno: '31',
                company: '6d Technologies',
                year: '2023',
                branch: 'ECE',
                no_of_students: '02'
            },
            {
                slno: '30',
                company: '6d Technologies',
                year: '2023',
                branch: 'IT',
                no_of_students: '04'
            },
            {
                slno: '29',
                company: 'IBS',
                year: '2023',
                branch: 'CSE',
                no_of_students: '55'
            },
            {
                slno: '28',
                company: 'IBS',
                year: '2023',
                branch: 'ECE',
                no_of_students: '08'
            },
            {
                slno: '27',
                company: 'IBS',
                year: '2023',
                branch: 'IT',
                no_of_students: '02'
            },
            {
                slno: '26',
                company: 'EY',
                year: '2023',
                branch: 'CSE',
                no_of_students: '12'
            },
            {
                slno: '25',
                company: 'EY',
                year: '2023',
                branch: 'IT',
                no_of_students: '03'
            }, 
   
            {
                slno: '24',
                company: 'Tech Mahindra',
                year: '2023',
                branch: 'CSE',
                no_of_students: '10'
            },
            {
                slno: '23',
                company: 'Tech Mahindra',
                year: '2023',
                branch: 'IT',
                no_of_students: '01'
            },

            {
                slno: '22',
                company: 'Acabes',
                year: '2023',
                branch: 'CSE',
                no_of_students: '10'
            }, 
            {
                slno: '21',
                company: 'South Indian Bank',
                year: '2023',
                branch: 'CSE',
                no_of_students: '19'
            },
            {
                slno: '20',
                company: 'South Indian Bank',
                year: '2023',
                branch: 'ECE',
                no_of_students: '06'
            },

            {
                slno: '19',
                company: 'South Indian Bank',
                year: '2023',
                branch: 'ME',
                no_of_students: '01'
            },
            {
                slno: '18',
                company: 'South Indian Bank',
                year: '2023',
                branch: 'CIVIL',
                no_of_students: '01'
            },
            {
                slno: '17',
                company: 'South Indian Bank',
                year: '2023',
                branch: 'IT',
                no_of_students: '02'
            },
            {
                slno: '16',
                company: 'Qburst',
                year: '2023',
                branch: 'CSE',
                no_of_students: '08'
            },
            {
                slno: '15',
                company: 'Envestnet',
                year: '2023',
                branch: 'CSE',
                no_of_students: '03'
            },

            {
                slno: '14',
                company: 'Envestnet',
                year: '2023',
                branch: 'IT',
                no_of_students: '01'
            },
            {
                slno: '13',
                company: 'INCTURE',
                year: '2023',
                branch: 'CSE',
                no_of_students: '04'
            }, 
            {
                slno: '12',
                company: 'INCTURE',
                year: '2023',
                branch: 'IT',
                no_of_students: '06'
            },
            {
                slno: '11',
                company: 'Quest',
                year: '2023',
                branch: 'CSE',
                no_of_students: '09'
            },
            {
                slno: '10',
                company: 'Quest',
                year: '2023',
                branch: 'ECE',
                no_of_students: '05'
            },
            {
                slno: '09',
                company: 'Quest',
                year: '2023',
                branch: 'IT',
                no_of_students: '04'
            },             
            {
                slno: '08',
                company: 'ASCIA Technologies',
                year: '2023',
                branch: 'CSE',
                no_of_students: '02'
            },
            {
                slno: '07',
                company: 'ASCIA Technologies',
                year: '2023',
                branch: 'ECE',
                no_of_students: '01'
            },
            {
                slno: '06',
                company: 'Mindcurve',
                year: '2023',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '05',
                company: 'KALERYA',
                year: '2023',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '04',
                company: 'IBM',
                year: '2023',
                branch: 'CSE',
                no_of_students: '01'
            },
            {
                slno: '03',
                company: 'RDC',
                year: '2023',
                branch: 'CSE',
                no_of_students: '03'
            },
            {
                slno: '02',
                company: 'Jobin & Jismi',
                year: '2023',
                branch: 'ECE',
                no_of_students: '03'
            },
            {
                slno: '01',
                company: 'Jobin & Jismi',
                year: '2023',
                branch: 'CIVIL',
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

export default Recruitment2023;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    