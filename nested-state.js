const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Vikalp",
  address: {
    city: "Udaipur",
    state: "Rajasthan",
    country: "india",
  },
};

const CITY_UPDATED = "CITY_UPDATED";

function updateCity(city) {
  return {
    type: CITY_UPDATED,
    payload: city,
  };
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       city: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(cityReducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(updateCity("Bhilwara"));
unsubscribe();
