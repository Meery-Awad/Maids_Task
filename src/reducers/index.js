import { combineReducers } from "redux";
import reminders from "./reducers";

const stor= combineReducers({
    data:reminders,
    
})

export default stor;