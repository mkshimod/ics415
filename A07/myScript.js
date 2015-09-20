/**
 * Created by Michele on 9/18/15.
 */
function getClasses(element) {
  var classes = element.classList;
  return classes;
};

function addClass(elem, classname) {
  var classes = getClasses(elem);
  if(classes.indexOf(classname) === -1) {
    elem.className = elem.className + classname;
  }
};

function validateForm() {
  var n = document.forms["myForm"]["name"].value;
  var pwd1 = document.forms["myForm"]["password"].value;
  var pwd2 = document.forms["myForm"]["confirm"].value;
  console.log(n);
  console.log(pwd1);
  console.log(pwd2);
  if (n == null || n == "") {
    alert("Please input a name.");
    return false;
  }
  if( pwd1 === null || pwd1 === "") {
    alert("Please enter a password");
    return false;
  }
  if( pwd2 === null || pwd2 === "") {
    alert("Please confirm your password");
    return false;
  }
  if (pwd1 != pwd2) {
    alert("Passwords do not match.");
    return false;
  }
};