import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = [ '#82ca9d', '#1C414A', '#FFBB28', '#FF8042', '#AF19FF'];

const Graph = ({ loanAmount, interestPayable }) => {
  console.log('Graph', loanAmount, interestPayable);

  const loanAmountVal = loanAmount;
  const interestPay = Math.floor(interestPayable);

  const data = [
    { name: 'Interest Payable', value: interestPay },
    { name: 'Loan Amount', value: loanAmountVal },

  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const dataItem = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`${dataItem.name} : ${dataItem.value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
          minAngle={15} // Adjust this value as needed
          startAngle={90} // Start from the middle (180 degrees)
          endAngle={540}   // Go around in a circle (540 degrees)
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Graph;
