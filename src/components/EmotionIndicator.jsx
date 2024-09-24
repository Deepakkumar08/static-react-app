import React from "react";
import "./EmotionIndicator.css";
import LikeDislikeButtons from "./like&dislike";
import { FaUser } from 'react-icons/fa';

const EmotionIndicator = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
  {/* Left Section: Client's Emotion */}
  <div style={styles.container}>
      {/* Client's emotion label */}
      <div style={styles.label}>Client's emotion</div>

      {/* Emotion scale */}
      <div style={styles.emotionScale}>
        {/* Emotion circles with different colors */}
        <div style={{ ...styles.emotionCircle, backgroundColor: '#E57373' }} /> {/* Very Unhappy */}
        <div style={{ ...styles.emotionCircle, backgroundColor: '#FFB74D' }} /> {/* Unhappy */}
        <div style={{ ...styles.emotionCircle, backgroundColor: '#FFEB3B' }} /> {/* Neutral */}
        <div style={{ ...styles.emotionCircle, backgroundColor: '#AED581' }} /> {/* Happy */}
        <div style={{ ...styles.emotionCircle, backgroundColor: '#81C784' }} /> {/* Very Happy */}
      </div>

      {/* Profile section */}
      <div style={styles.container}>
      {/* User Icon */}
      <div style={styles.iconContainer}>
        <FaUser size={50} style={styles.icon} /> {/* You can adjust size as needed */}
      </div>
      
      {/* User Name */}
      <div style={styles.username}>Augusto Coimbra</div>
    </div>
    </div>

  {/* Right Section: Tips from GreAI */}
  <div className="tips" style={{ flex: 1 }}>
    <h3>Tips from GreAI</h3>
    <p>
      <strong>Show confidence</strong>: Maybe telling the client that you'll
      resolve the issue soon would be helpful.
    </p>
    <LikeDislikeButtons></LikeDislikeButtons>
  </div>
</div>

    
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f0f4f7',
    width: '300px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: '14px',
    color: '#757575',
    marginBottom: '10px',
  },
  emotionScale: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  emotionCircle: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    margin: '0 4px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileText: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#424242',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f0f4f7',
    width: '200px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    marginBottom: '10px',
  },
  icon: {
    color: '#757575', // You can change the color as needed
  },
  username: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#424242',
  },
};



export default EmotionIndicator;
