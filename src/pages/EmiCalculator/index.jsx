import React,{useState} from 'react';
import RangeSlider from 'components/Rangeslider';
import Graph from 'components/Graph';
import EmiCalculatorComponent from 'components/EmiCalculatorComponent';
import Widget from 'components/Widget';
import { Text } from 'components';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [tenure, setTenure] = React.useState(0);
  // Define breakpoints (values where you want to place the thumb-like images)

  const totalRange = 5000000; // Maximum range for loanAmount slider
  const totalRange2 = 40; // Maximum range for loanAmount slider
  const totalRange3 = 84; // Maximum range for loanAmount slider
  const [Value1, setValue1] = useState(totalRange);
  const [Value2, setValue2] = useState(totalRange2);
  const [Value3, setValue3] = useState(totalRange3);
  const [Value4, setValue4] = useState(1);
  // Calculate breakpoints based on percentage
  
  const breakpointsPercentage = [20, 40, 60, 80, 100];
  const breakpointsL = breakpointsPercentage.map((percentage) =>
    Math.floor((percentage / 100) * totalRange)
  );
  
  const breakpointsI = breakpointsPercentage.map((percentage) =>
    Math.floor((percentage / 100) * totalRange2)
  );

  
  const breakpointsT = breakpointsPercentage.map((percentage) =>
    Math.floor((percentage / 100) * totalRange3)
  );

    function getFromChild(data){
        console.log({data})
        setValue1(data)
    }
    function getFromChild2(data){
        console.log(data)
        setValue2(data)

    }
    function getFromChild3(data){
        console.log(data)
        setValue3(data)
       
    }
    function getFromChild4(data){
        console.log(data)
        setValue4(data)

    }

  return (
    <div>
    <Navbar/>
    <div className='flex justify-center mt-3 mb-4 font-montserrat font-bold text-[30px]'>
        <h1>EMI Calculator</h1>
    </div>
      <div className="absolute justify-center m-auto  w-full">
      <div className=" mt-1 m-auto w-full">
      <div className='flex justify-row space-x-[40px] sm:flex-col items-center  px-5'>
        <div className='flex px-[120px]'>
          <Graph loanAmount={Value1} interestPayable={Value4} />
        </div>
        <div className='mt-[70px]'>
          <EmiCalculatorComponent loanAmount={Value1} interestRate={Value2} tenure={Value3} getFromChild4={getFromChild4} />
        </div>
        
      </div>
      
      <div className="  mt-1 " >

        <RangeSlider
          min={0}
          max={5000000}
          step={1}
          value={loanAmount}
          onChange={setLoanAmount}
          breakpoints={breakpointsL}
          symbol="₹"
          name="Loan Amount"
          getFromChild={getFromChild}
        />
      </div>

      <div className=' mt-1'>
        <RangeSlider
          min={0}
          max={40}
          step={0.01}
          value={interestRate}
          onChange={setInterestRate}
          breakpoints={breakpointsI}
          symbol="%"
          name="Interest Rate"
          getFromChild={getFromChild2}
        />
      </div>
      <div className=' mt-1'>
        <RangeSlider
          min={0}
          max={84}
          step={1}
          value={tenure}
          onChange={setTenure}
          breakpoints={breakpointsT}
          symbol="M"
          name="Tenure"
          getFromChild={getFromChild3}
        />
        {/* <p>Tenure: {loan} M</p> */}
      </div>
      {/* <div>
        <Graph loanAmount={loanAmount} interestRate={interestRate} tenure={tenure} />
      </div> */}
      <div className='flex h-[100px]'>
        {/* <Widget /> */}
      </div>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
