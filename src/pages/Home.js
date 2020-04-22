import React, { useState, useEffect } from "react";
import axios from "axios";

import { RICK_API } from "../constants/constant";
import Cards from "./../components/cards";

export default function RickAndMorty() {
  const [rmcharacters, setrmcharacters] = useState(undefined);
  const [filteredResults, setFilteredResults] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [isResultsFiltered, setisResultsFiltered] = useState(false);

  useEffect(() => {
    axios.get(RICK_API).then(rmData => {
      setrmcharacters(rmData.data.results);
    });
  }, []);

  function handleFiltering(input) {
    let filteredCards = rmcharacters.filter(value => {
      return value.name
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    setFilteredResults(filteredCards);
    setisResultsFiltered(true);
    setsearchPhrase(input.target.value);
  }
  return (
    <div>
      <div className="[ container-fluid ][ landingPage ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 className="[ welcomeHeading ]">RICK AND MORTY</h1>
          </div>
        </div>
      </div>

      <div className="[ container ][ blogPage ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <form>
              <p>Like, Pick a card Morty</p>
              <input
                type="text"
                name="username"
                onChange={handleFiltering}
                className="form-control"
              />
              <br />
              <br />
            </form>
          </div>
        </div>

        <div className="row">
          {isResultsFiltered ? (
            <div>
              {filteredResults.length > 0 ? (
                filteredResults.map((value, index) => {
                  return (
                    <Cards
                      key={index}
                      id={value.id}
                      name={value.name}
                      img={`${value.image}`}
                      gender={value.gender}
                      species={value.species}
                      status={value.status}
                    />
                  );
                })
              ) : (
                <div>No Results</div>
              )}
            </div>
          ) : (
            <>
              {rmcharacters !== undefined ? (
                rmcharacters.map((value, index) => {
                  return (
                    <Cards
                      key={index}
                      id={value.id}
                      name={value.name}
                      img={`${value.image}`}
                      gender={value.gender}
                      species={value.species}
                      status={value.status}
                    />
                  );
                })
              ) : (
                <div></div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
