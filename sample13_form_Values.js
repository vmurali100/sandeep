var users = [];
function getData() {
  var user = {
    fname: "",
    lname: "",
    email: "",
    gender: "",
    roles:[]
  };
  user.fname = document.getElementById("fname").value;
  user.lname = document.getElementById("lname").value;
  user.email = document.getElementById("email").value;

  var rbuttons = document.getElementsByName("gender");
  for (i = 0; i < rbuttons.length; i++) {
    if (rbuttons[i].checked) {
      user.gender = rbuttons[i].value;
    }
  }

  console.log(user);
  // for Checkboxes

  var cboxes = document.getElementsByName("role");
  var cboxValue = [];
  for (i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked) {
      cboxValue.push(cboxes[i].value);
    }
  }
  user.roles = cboxValue;

  //Adding the Object to Array
  users.push(user);

  //Calling function to display Latest Values
  displayUsers();
  clearForm(user);
}

function clearForm(obj) {
  for (a in obj) {
    if(a !="roles" && a != "gender"){
      document.getElementById(a).value = "";

    }
  }
}
function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < users.length; i++) {
    var myTr_ = document.createElement("tr");
    myTr_.setAttribute("onclick","editUser("+i+")")
    for (a in users[i]) {

      //Capture all the values except roles
      if (a != "roles") {
        var myTd = document.createElement("td");
        myTd.innerHTML = users[i][a];
        myTr_.appendChild(myTd);
      }else{
 
        var rolesTd = document.createElement("td")
        var results =""
        var arrtoLoop = users[i][a]
        for(j=0;j<arrtoLoop.length;j++){
          results+=arrtoLoop[j]+"<br>"
        }
        rolesTd.innerHTML = results
        myTr_.appendChild(rolesTd)
      }

    }

    // var editTd = document.createElement("td");
    // var deleteTd = document.createElement("td");

    // var editBtn = document.createElement("button");
    // editBtn.innerHTML = "Edit";
    // var deleteBtn = document.createElement("button");
    // deleteBtn.innerHTML = "Delete";

    // editTd.appendChild(editBtn);
    // myTr_.appendChild(editTd);

    // deleteTd.appendChild(deleteBtn);
    // myTr_.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr_);
  }
}


function editUser(i){
  console.log(users[i])
  for(a in users[i]){
    document.getElementById(a).value = users[i][a]
  }
}

function updateUser(){
  console.log("updateUser is called")
}

function getData(){
  var abc = new XMLHttpRequest;
            abc.onreadystatechange = function(){
                if(abc.readyState == 4 && abc.status == 200){
                    var data = JSON.parse(abc.response)
                    console.log(data)
                    users = data
                    displayUsers()
                }
            }

            abc.open("GET","http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true")
            abc.send()

}

getData()