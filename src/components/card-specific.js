import React from "react";

const Cardspecific = (props) => {
  const [name, img, location, created] = props;
  return (
    <div className="[ col-sm-8 ] [ card ]">
      <h3> Name: {name} </h3>
      <img src={img} alt="just random" className="[ CardImg ]" />
      <p> Location: {location} </p>
      <p>Created: {created}</p>
    </div>
  );
};

export default Cardspecific;
