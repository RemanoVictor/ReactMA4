import { combineReducers } from "redux";

import CardData from "./cardData";

const rootReducer = combineReducers({
  CardData: CardData,
});

export default rootReducer;
