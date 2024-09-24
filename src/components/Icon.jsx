import React, { useState } from 'react';
import { FaHome, FaPhone, FaUser, FaEye, FaEyeSlash, FaRobot   } from 'react-icons/fa'; // Import icons from react-icons
import "./Icon.css";

const Icon = () => {
  const [selectedIcon, setSelectedIcon] = useState('call'); // State to track which icon is selected
  const [showPassword, setShowPassword] = useState(true); // State to toggle password visibility
  const [showTextField, setShowTextField] = useState(false); // State to toggle extra field visibility

  // Function to handle the eye icon click
  const handleToggleClick = () => {
    setShowPassword(!showPassword);
    setShowTextField(!showTextField); // Show the text field when the eye is clicked
  };

  // Function to handle icon click
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };
   const Cotent = ()=>{
        return(
            <div className="content">
        {<div className='border-class'> <div className="transcription">
      <h3>Resume of Transcription</h3>
      <p>
        The customer said his <span className="highlight">signal was lost</span>{" "}
        this afternoon and requested technical support. The customer confirmed
        that he had <span className="highlight">reset the equipment</span> but
        the problem persisted.
      </p>
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        
        <span
          onClick={handleToggleClick}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </span>
      </div>

      {/* Conditionally render additional text field */}
      {showTextField && (
       <div className="chat-container">
       {/* Left Section */}
       <div className="chat-left">
         <div className="chat-message">
           <FaRobot className="icon" />
           <div className="message">
             <p>Hi, I'm Good Rob! Choose your option so we can help you:</p>
           </div>
         </div>
         <div className="chat-message">
           <FaUser className="icon" />
           <div className="message user">
             <p>Option 1</p>
           </div>
         </div>
       </div>
 
       {/* Right Section */}
       <div className="chat-right">
         <button className="option-button">1. Technical Problem</button>
         <button className="option-button">2. Change your plan</button>
         <button className="option-button">3. Other Issue</button>
       </div>
     </div>
      )}
    </div>


    </div></div>}
        {/* {selectedIcon === 'call' && <div className='border-class'>You selected Call</div>}
        {selectedIcon === 'user' && <div className='border-class'>You selected User</div>} */}
      </div>
        )
  }

  return (
    <div className="app-container">
      {/* Icons with labels and click handlers */}
      <div className="icon-container">
        <div onClick={() => handleIconClick('home')} className={`icon-item ${selectedIcon === 'home' ? 'active' : ''}`}>
          <FaHome size={30} />
          <p>Home</p>
        </div>
        <div onClick={() => handleIconClick('call')} className={`icon-item ${selectedIcon === 'call' ? 'active' : ''}`}>
          <FaPhone size={30} />
          <p>8 mins</p>
        </div>
        <div onClick={() => handleIconClick('user')} className={`icon-item ${selectedIcon === 'user' ? 'active' : ''}`}>
          <FaUser size={30} />
          {/* <p>12 mins</p> */}
        </div>
      </div>
      {selectedIcon === 'home' && <div className='border-class'><Cotent/> </div>}
      {selectedIcon === 'call' && <div className='border-class'><Cotent/></div>}
      {selectedIcon === 'user' && <div className='border-class'><Cotent/></div>}      
    </div>
  );
};

export default Icon;
