import React, { useState, useEffect } from 'react';
import { auth, db } from 'components/firebase_config'; // Adjust the path based on your project structure
 // Import your Firebase configuration
import Navbar from 'components/Navbar';
import './admin.css';


import { 

  query,
  getDocs,
  collection,

 } from 'firebase/firestore'
function Admin() {
  const [selectedLoan, setSelectedLoan] = useState('PersonalLoan');
  const [loanData, setLoanData] = useState([]);

  const handleTabClick = (loanType) => {
    setSelectedLoan(loanType);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionName =selectedLoan;
        console.log(collectionName)
        const q = query(collection(db, collectionName));

        const querySnapshot = await getDocs(q);

        const loanDataArray = [];
        querySnapshot.forEach((doc) => {
          console.log(doc)
          loanDataArray.push(doc.data());
        });
  
        setLoanData(loanDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [selectedLoan]);
  

  return (
    <>
      <Navbar />
      <div className='admin'>
        <div className='tabs'>
          <div
            className={selectedLoan === 'PersonalLoan' ? 'active' : ''}
            onClick={() => handleTabClick('PersonalLoan')}
          >
            Personal Loan
          </div>
          <div
            className={selectedLoan === 'HomeLoan' ? 'active' : ''}
            onClick={() => handleTabClick('HomeLoan')}
          >
            Home Loan
          </div>
          <div
            className={selectedLoan === 'InstantLoan' ? 'active' : ''}
            onClick={() => handleTabClick('InstantLoan')}
          >
            Instant Loan
          </div>
          <div
            className={selectedLoan === 'Contact Us' ? 'active' : ''}
            onClick={() => handleTabClick('Contact Us')}
          >
            Inquiry
          </div>
        </div>
        {/* <div className={selectedLoan === 'all' ? 'content show' : 'content hide'}>
          {loanData.map((loan, index) => (
            <div key={index}>

              <h1>{loan.firstname}</h1>

            </div>
          ))}
        </div> */}
        <div className={selectedLoan === 'PersonalLoan' ? 'content show' : 'content hide'}>
          <table  className='data-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                <th>Loan Amount</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>PinCode</th>
                {/* Add other headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.firstname}</td>
                  <td>{loan.lastname}</td>
                  <td>{loan.salary}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.email}</td>
                  <td>{loan.phonenumber}</td>
                  <td>{loan.pincode}</td>

                  {/* Add other fields based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={selectedLoan === 'HomeLoan' ? 'content show' : 'content hide'}>
        <table  className='data-table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Loan Amount</th>
                <th>Property Type</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>PinCode</th>
                {/* Add other headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.firstname}</td>
                  <td>{loan.lastname}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.propertyType}</td>
                  <td>{loan.email}</td>
                  <td>{loan.phonenumber}</td>
                  <td>{loan.pincode}</td>

                  {/* Add other fields based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={selectedLoan === 'InstantLoan' ? 'content show' : 'content hide'}>
        <table  className='data-table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Loan Amount</th>
               
                <th>Email</th>
                <th>Phone Number</th>

                {/* Add other headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.firstname}</td>
                  <td>{loan.lastname}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.email}</td>
                  <td>{loan.phonenumber}</td>

                  {/* Add other fields based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={selectedLoan === 'Contact Us' ? 'content show' : 'content hide'}>
        <table  className='data-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>

                {/* Add other headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.name}</td>
                  <td>{loan.email}</td>
                  <td>{loan.phone}</td>

                  {/* Add other fields based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
