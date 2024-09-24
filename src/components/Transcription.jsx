import React from "react";
import "./Transcription.css";
import  { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

const Transcription = () => {
  const [showPassword, setShowPassword] = useState(true); // State to toggle password visibility
  const [showTextField, setShowTextField] = useState(false); // State to toggle extra field visibility

  // Function to handle the eye icon click
  const handleToggleClick = () => {
    setShowPassword(!showPassword);
    setShowTextField(!showTextField); // Show the text field when the eye is clicked
  };

  // return (
  //   // <div className="transcription">
  //   //   <h3>Resume of Transcription</h3>
  //   //   <p>
  //   //     The customer said his <span className="highlight">signal was lost</span>{" "}
  //   //     this afternoon and requested technical support. The customer confirmed
  //   //     that he had <span className="highlight">reset the equipment</span> but
  //   //     the problem persisted.
  //   //   </p>
  //   //   <div style={{ textAlign: 'center', padding: '20px' }}>
  //   //   <div style={{ position: 'relative', display: 'inline-block' }}>
        
  //   //     <span
  //   //       onClick={handleToggleClick}
  //   //       style={{
  //   //         position: 'absolute',
  //   //         right: '10px',
  //   //         top: '50%',
  //   //         transform: 'translateY(-50%)',
  //   //         cursor: 'pointer',
  //   //       }}
  //   //     >
  //   //       {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
  //   //     </span>
  //   //   </div>

  //   //   {/* Conditionally render additional text field */}
  //   //   {showTextField && (
  //   //     <div style={{ marginTop: '20px' }}>
  //   //       <input type="text" placeholder="Additional text field" style={{ padding: '10px', fontSize: '16px', width: '250px' }} />
  //   //     </div>
  //   //   )}
  //   // </div>


  //   // </div>
  // );
};

export default Transcription;
