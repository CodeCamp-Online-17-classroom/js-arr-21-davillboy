// write code here
function checkPermission(role, isAdminAction, isNotAdminAction) {
  if (role === "ADMIN") {
    isAdminAction();
  } else {
    isNotAdminAction();
  }
}

function isAdminAction() {
  alert("ACCESS GRANTED");
  console.log("ACCESS GRANTED");
}

function isNotAdminAction() {
  alert("ACCESS DENIED");
  console.log("ACCESS DENIED");
}

let role = prompt("Enter role (ADMIN or USER):");

checkPermission(role, isAdminAction, isNotAdminAction);
