"use client";

const Button = ({ handleAccept }) => {
  return (
    <button onClick={handleAccept} className="button">
      I like Cookies
    </button>
  );
};

export default Button;
