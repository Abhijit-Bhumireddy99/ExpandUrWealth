// This function clearFields() is used to clear the values of various form fields. 
// It sets the value of each field to an empty string, effectively clearing the field.
// document.getElementById("email").value = ""; - This line gets the element with the ID of "email" 
// and sets its value to an empty string.
// document.getElementById("password").value = ""; - This line gets the element with the ID of "password" 
// and sets its value to an empty string.
// and so on similar for other input fields
function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("identity").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("number").value = "";
    document.getElementById("country").value = "";
}