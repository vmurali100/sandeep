const defaultState = {
  count: 20
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
      break;
    case "DECREMENT":
      return { count: state.count - 1 };
      break;
    default:
      return state;
  }
  return state;
}
