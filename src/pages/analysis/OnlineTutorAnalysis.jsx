// // src/LpSolver.js
// import React, { useState } from 'react';
// //import solver from 'javascript-lp-solver';

// const LpSolver = () => {
//   // Constants
//   const revenuePerStudent = 40000;
//   const costPerAcquisition = 10000;
//   const weeklyTeachingExpense = 2000;
//   const monthlyPowerSupplyCost = 15000;
//   const monthlyMaintenanceCost = 5000;

//   // Calculate total teaching hours per week
//   const totalTeachingHoursPerWeek = 6; // Maximum 6 hours per week across all groups

//   // State to hold the LP solver results
//   const [results, setResults] = useState(null);

//   // Function to solve the LP problem
//   const solveLpProblem = () => {
//     // Define the linear programming model
//     let model = {
//       optimize: 'profit',
//       opType: 'max',
//       constraints: {
//         totalTeachingHours: { max: totalTeachingHoursPerWeek },
//         powerSupplyCost: { equal: monthlyPowerSupplyCost },
//         maintenanceCost: { equal: monthlyMaintenanceCost }
//       },
//       variables: {
//         G1x1: { min: 5, max: 10 }, G1x2: { min: 5, max: 10 },
//         G2x1: { min: 5, max: 10 }, G2x2: { min: 5, max: 10 },
//         G3x1: { min: 5, max: 10 }, G3x2: { min: 5, max: 10 }
//       }
//     };

//     // Objective function
//     model.optimize = revenuePerStudent * (
//       model.variables.G1x1 + model.variables.G1x2 +
//       model.variables.G2x1 + model.variables.G2x2 +
//       model.variables.G3x1 + model.variables.G3x2
//     ) - 3 * costPerAcquisition - weeklyTeachingExpense - monthlyPowerSupplyCost - monthlyMaintenanceCost;

//     // Additional constraints for each group
//     for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= 2; j++) {
//         model.constraints[`group${i}session${j}`] = {
//           max: 3 * model.variables[`G${i}x${j}`]
//         };
//       }
//     }

//     // Solve the model
//     let lpResults = solver.Solve(model);

//     // Set the results in the state
//     setResults(lpResults);
//   };

//   return (
//     <div>
//       <h1>Linear Programming Solver</h1>
//       <button onClick={solveLpProblem}>Solve LP Problem</button>
//       {results && (
//         <div>
//           <h2>Results</h2>
//           <p>Total Profit: {results.result}</p>
//           <p>Number of groups per week:</p>
//           <ul>
//             <li>Group 1: {results.G1x1 + results.G1x2}</li>
//             <li>Group 2: {results.G2x1 + results.G2x2}</li>
//             <li>Group 3: {results.G3x1 + results.G3x2}</li>
//           </ul>
//           <p>Details:</p>
//           <ul>
//             <li>Total Students: {results.G1x1 + results.G1x2 + results.G2x1 + results.G2x2 + results.G3x1 + results.G3x2}</li>
//             <li>Total Teaching Hours: {totalTeachingHoursPerWeek}</li>
//             <li>Monthly Power Cost: {monthlyPowerSupplyCost}</li>
//             <li>Monthly Maintenance Cost: {monthlyMaintenanceCost}</li>
//           </ul>
//           <pre>{JSON.stringify(results, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LpSolver;
