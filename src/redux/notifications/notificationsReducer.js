import {
  REQUEST_AUTH_START,
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAIL
} from "../auth/constants";
import { REMOVE_OLD_NOTIFICATION } from "./constants";
import { indexOf } from "benchmark";

const initialState = {
  messages: [],
  counter: 0
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH_SUCCESS:
    case REQUEST_AUTH_FAIL:
      return {
        ...state,
        messages: [
          ...state.messages,
          Object.assign({}, action.payload.message, { id: state.counter })
        ],
        counter: state.counter++
      };
    case REMOVE_OLD_NOTIFICATION:
      return {
        ...state,
        messages: state.messages.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};

// const notificationsReducer = reducer => {
//   return function(state, action) {
//     switch (action.type) {
//       case REQUEST_AUTH_SUCCESS:
//         console.log(action.payload.message);
//         break;
//       case REQUEST_AUTH_FAIL:
//         console.log(action.payload.message);
//         break;
//       default:
//         console.log("defaulted");
//     }

//     console.log("fromNotificatinsReducer", state, action);
//     return reducer(state, action);
//   };
// };

export default notificationsReducer;
