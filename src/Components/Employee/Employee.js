import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './Employee.css'
import Rating from 'react-rating';
const Employee = (props) => {
 const {
   employee_name,
   employee_salary,
   employee_email,
   employee_age,
   employee_position,
   profile_image,
   rating
 } = props.employee;
 const selectedIcon = <FontAwesomeIcon icon={faCheckCircle} />;
 return (
   <div className="employee">
     <div className="employee-card">
       <div className="employee-img">
         <img src={profile_image} alt="" />
       </div>
       <div className="employee-text">
         <h4>{employee_name}</h4>
         <p>~{employee_position}</p>
         <Rating
           initialRating={rating}
           readonly
           emptySymbol="far fa-star star-icon"
           fullSymbol="fas fa-star star-icon"
         />
         <p>Email : {employee_email}</p>
         <p>Age : {employee_age}</p>
         <p>Salary : $ {employee_salary}</p>
         <button
           className="primary-btn"
           onClick={() => props.handleAddToCart(props.employee)}>{selectedIcon}Add To Cart</button>
       </div>
     </div>
   </div>
 );
};

export default Employee;