export default function dosomething(state = { users: [] }, action) {
  switch (action.type) {
    case "CREATE":
      console.log("You Have clicked on Create", action);
      return {};
      break;

    case "GET":
      console.log("You Have clicked on GET", action);
      let users = [...action.payLoad];
      return { users };
      break;

    default:
      return state;
      break;
  }
}
