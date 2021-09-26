import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Employees.css'
const Employees = () => {
 const [employees,setEmployees] = useState([]);
 const [cart,setCart] = useState([]);
 useEffect(()=>{
  fetch('./employee.json')
  .then(res=>res.json())
  .then(data=>setEmployees(data))
 },[])
 const handleAddToCart = newEmployee =>{
  const checkExists = cart.find(employee=>employee.id===newEmployee.id)
  if(checkExists){
    return
  }
  const newCart = [...cart,newEmployee];
  setCart(newCart);
 
 }
 return (
   <div className="employees">
     <div className="employees-container">
       <h2>Total Employees : {employees.length}</h2>
       <div className="employee-details">
         {employees.map((employee) => (
           <Employee 
           key={employee.id} 
           employee={employee} 
           handleAddToCart={handleAddToCart}>
           </Employee>
         ))}
       </div>
     </div>
     <div className="employee-cart">
       <Cart cart={cart} ></Cart>
     </div>
   </div>
 );
};

export default Employees;