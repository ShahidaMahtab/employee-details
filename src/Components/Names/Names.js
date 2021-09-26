import React from 'react';
import './Names.css'
const Names = (props) => {
 const {employee_name,profile_image} = props.employee;
  return (
    <div className="names">
      <div className="names-img">
        <img src={profile_image} alt="" />
      </div>
      <h3>{employee_name}</h3>
    </div>
  );

};

export default Names;