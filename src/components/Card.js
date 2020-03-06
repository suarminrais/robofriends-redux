import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc dib pa3 ma2 grow br3 bg-light-blue shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
