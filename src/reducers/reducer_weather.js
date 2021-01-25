import { act } from "react-dom/test-utils";
import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    console.log('action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }
    return state
}