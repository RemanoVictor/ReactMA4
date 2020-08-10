import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import { RICK_API } from "./../constants/constant";

import Cardspecific from "./../components/card-specific";

export default function CardSpecific() {
  const [rmcharacters, setrmCharacters] = useState(undefined);
  let { id } = useParams();
  useEffect(() => {
    axios.get(RICK_API + id).then((rmData) => {
      setrmCharacters(rmData.data);
      console.log(rmData.data);
    });
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        {rmcharacters !== undefined ? (
          <Cardspecific
            id={rmcharacters.id}
            name={rmcharacters.name}
            img={`${rmcharacters.image}`}
            location={rmcharacters.location.name}
            created={rmcharacters.created}
          />
        ) : (
          <div> No data </div>
        )}
      </div>
    </div>
  );
}
