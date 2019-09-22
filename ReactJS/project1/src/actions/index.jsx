export function create(user) {
  var action = {
    type: "CREATE",
    payload: user
  };
  return action;
}

export function edit() {
  var action = {
    type: "EDIT"
  };
  return action;
}

export function deleteUser() {
  var action = {
    type: "DELETE"
  };
  return action;
}
export function getUsers(users) {
  var action = {
    type: "GET",
    payLoad: users
  };
  return action;
}
