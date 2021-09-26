import React from 'react';
import Names from '../Names/Names';
import './Cart.css'
const Cart = (props) => {
 const {cart} = props;
 let total = 0;
 for(const employee of cart){
 total += employee.employee_salary; 
 }
 return (
   <div className="cart">
     <h2>Employee Details</h2>
     <div className="cart-details">
       <h3>Employee Selected : {cart.length}</h3>
       <h3>Total Cost : $ {total}</h3>
       <h3>Names Of Selected Employee:</h3>
     </div>
     <div>
       {cart.map((employee) => (
         <Names key={employee.id} employee={employee}></Names>
       ))}
     </div>
   </div>
 );
};

export default Cart;