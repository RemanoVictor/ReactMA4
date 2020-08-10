import { GET_CARD_DATA } from "../actions/actionsTypes";

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_CARD_DATA:
      return { ...state, CardData: payload };
    default:
      return state;
  }
}
