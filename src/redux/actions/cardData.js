import axios from "axios";

import { GET_CARD_DATA, GET_CARD_DATA_ERROR } from "./actionsTypes";

export const CardData = () => async (dispatch) => {
  try {
    const cardResults = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    console.log(cardResults.data.results);
    dispatch({
      type: GET_CARD_DATA,
      payload: cardResults.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_CARD_DATA_ERROR,
      payload: error,
    });
    console.log("computer says no");
  }
};
