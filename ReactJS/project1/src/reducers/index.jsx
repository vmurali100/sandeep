export default function dosomething(state = { num: 0 }, action) {
  switch (action.type) {
    case "CREATE":
      console.log("You Have clicked on Create");
      var num = state.num + 1;
      return { num };
      break;

    case "EDIT":
      console.log("You Have clicked on Edit");
      return state;
      break;

    case "UPDATE":
      return state;
      break;

    case "DELETE":
      return state;
      break;

    default:
      return {};
      break;
  }
}
