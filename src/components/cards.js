import React from "react";
import { Link } from "react-router-dom";

const Cards = props => {
  const { name, img, gender, species, status, id } = props;
  return (
    <div className="[ col-sm-3 ] [ card ]">
      <h3>Name: {name} </h3>
      <img src={img} alt="just random" className="[ CardImg ]" />
      <p>Gender {gender} </p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <Link to={`/CardSpecific/${id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
};

export default Cards;
