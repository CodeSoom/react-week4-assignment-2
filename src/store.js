import { createStore } from "redux";

const initialState = {
  name: "nameTest",
  category: "categoryTest",
  address: "addressTest"
}

function reducer(state = initialState) {
  //reduce name

  //reduce category

  //reduce address

  return state
}

const store = createStore(reducer)

export default store;