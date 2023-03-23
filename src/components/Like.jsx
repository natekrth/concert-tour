import React, { useState } from 'react';


const LikeButton = () => {
    const [likes, setLikes] = useState("none");
    const [isClicked, setIsClicked] = useState(false);

    const likeHandler = () => {
        if (isClicked) {
            setLikes("none")
        }
        else {
            setLikes("red");
        }
        setIsClicked(!isClicked);
    }

  return (
    <button className="items-center" onClick={likeHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={likes} strokeWidth={2} stroke="red" className="w-8 h-8">
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
    </button>
  );
};

export default LikeButton;