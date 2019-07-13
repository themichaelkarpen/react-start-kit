
export default function reducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_PAGE":
      return {
        ...state,
        selectedPage: action.payload,
      };
    default:
      return state;
  }
}
