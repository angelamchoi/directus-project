import React from "react";

const Card = ({ firstName, lastName, email, body }) => {
  return (
    <>
      <div className="container">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Message: {body}</p>
      </div>
    </>
  );
};

export default Card;
