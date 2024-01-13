import React from 'react';

function calculateEMI(loanAmount, interestRate, tenure) {
  // Convert the input values to numbers
  console.log('Props:', loanAmount, interestRate, tenure);

  const principal = parseFloat(loanAmount);
  const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
  const months = parseFloat(tenure); // Total number of months

  // Calculate EMI
  const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

  // Calculate Total Payment
  const totalPayment = emi * months;

  // Calculate Interest Payable
  const interestPayable = totalPayment - principal;
  return {
    emi: emi.toFixed(2),
    interestPayable: interestPayable.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
  };
}

const EmiCalculatorComponent = ({ loanAmount, interestRate, tenure,getFromChild4 }) => {
  const { emi, interestPayable, totalPayment } = calculateEMI(
    parseFloat(loanAmount),
    parseFloat(interestRate),
    parseFloat(tenure)
  );

  getFromChild4(interestPayable)

  return (
    <div >
      <p className='font-montserrat gap-11 mb-10'>
        EMI: <span className='font-montserrat font-bold px-[140px]'>{emi}</span>
      </p>
      <p className='font-montserrat gap-11 mb-10'>
        Interest Payable: <span className='font-montserrat font-bold px-[41px]'> {interestPayable}</span>
      </p>
      <p className='font-montserrat gap-11 mb-10'>
        Total Payment: <span className='font-montserrat font-bold px-[55px]'>{totalPayment}</span>
      </p>
    </div>
  );
};

export default EmiCalculatorComponent;
