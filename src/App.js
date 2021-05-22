import React, {useState} from 'react';
import "./styles.css";

export default function App() {
  return (
   <div className="App">
     <h1>Hello CodeSandbox</h1>
     <h2>Start editing to see some magic hapen!</h2>
   </div>
  );
}



















// import logo from './logo.svg';
// import './App.css';
// // import Documentation from "./Documentation"
// // import Counter from "./Counter";
// import Employee from './Emloyee';

// //this is the second way to set all the employees data/ here or right in the beggining of the function
// const employeeInfo = [
//   {
//     firstName: "Alina",
//     lastName: "Samoteev",
//     age: "39"
//   },
//   {
//     firstName: "Dinu",
//     lastName: "Samoteev",
//     age: "37"
//   }
// ];



// function App() {
   
//   return (
//     <div className="App">
//       <header className="App-header">
//       {/* we used it in the previous lesson to make a counter !!
//       <h2>Welcome to counter </h2>
//       <Counter/> */}
//       <h1> Company Directory</h1>
//       {employeeInfo.map((employee) => {
//         // we can delite this and use spread instead
//         // const { firstName, lastName, age} = employee;
//         return (
//           <Employee 
//           //and we spread instead below
//           {...employee}
//           // and delite this
//           // firstName={firstName} lastName={lastName} age={age}
//           />
//         );
//       })}


//       {/* this is the first way how to do it */}

//       {/* <Employee firstName="Alina" lastName="Samoteev" age="39"/>
//       <Employee firstName="Dinu" lastName="Samoteev" age="36"/>
//       <Employee firstName="Gabi" lastName="Samoteev" age="2"/>
//       <Employee firstName="Mika" lastName="Samoteev" age="1"/> */}


//        </header>
//     </div>
//   );
// }

// export default App;