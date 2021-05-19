import React from 'react';

const Employee = ({firstName, lastName, age}) => {
   
    
 // The longest way of props he showed first and he likes it the most  
// const Employee = (props) => {
    //     const {firstName, lastName, age:employeeAge} = props;    
    return (
     <div>
     <h6>
        Employee Name: {firstName} {lastName} Who is age: {age}

        {/* the second way to write the same!!

        {`Employee Name: ${props.firstName} ${props.lastName}`} */}

     </h6>   
     </div>
    )

}

export default Employee;