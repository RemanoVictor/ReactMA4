import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./../components/cards";
import { CardData } from "../redux/actions/cardData";

export default function RickAndMorty() {
  const dispatch = useDispatch();
  const [filteredResults, setFilteredResults] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [isResultsFiltered, setisResultsFiltered] = useState(false);

  useEffect(() => {
    dispatch(CardData());
  }, [dispatch]);

  const cardData = useSelector((state) => state.cardData.cardData);
  console.log(cardData);

  function handleFiltering(input) {
    let filteredCards = cardData.filter((value) => {
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
                placeholder={searchPhrase}
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
              {cardData !== undefined ? (
                cardData.map((value, index) => {
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
                <div> No data</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
