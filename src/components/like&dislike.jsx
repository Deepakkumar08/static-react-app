import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeDislikeIcons = () => {
  // State to keep track of like and dislike status
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(false);

  // Function to handle the like button click
  const handleLike = () => {
    setLike(!like); // Toggle like state
    if (dislike) setDislike(false); // Reset dislike if like is clicked
  };

  // Function to handle the dislike button click
  const handleDislike = () => {
    setDislike(!dislike); // Toggle dislike state
    if (like) setLike(false); // Reset like if dislike is clicked
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Like Icon Button */}
      <button
        onClick={handleLike}
        style={{
          padding: '10px',
          marginRight: '10px',
          background: like
            ? 'linear-gradient(90deg, rgba(255,200,55,1) 0%, rgba(255,155,55,1) 50%, rgba(255,105,55,1) 100%)'
            : '#f0f0f0', // Apply gradient if liked
          color: like ? 'white' : 'black',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaThumbsUp size={24} />
      </button>

      {/* Dislike Icon Button */}
      <button
        onClick={handleDislike}
        style={{
          padding: '10px',
          background: dislike ? '#e57373' : '#f0f0f0', // Apply red color if disliked
          color: dislike ? 'white' : 'black',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaThumbsDown size={24} />
      </button>
    </div>
  );
};

export default LikeDislikeIcons;
