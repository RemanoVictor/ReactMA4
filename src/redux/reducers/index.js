import { combineReducers } from "redux";

import CardData from "./cardData";

const rootReducer = combineReducers({
  cardData: CardData,
});

export default rootReducer;
