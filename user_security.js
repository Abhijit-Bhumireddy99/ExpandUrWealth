// This function is used to validate a security pin input
function validateForm() {
    // Get the security pin input field and error message element
    var pinInput = document.getElementById("security-pin");
    var errorMessage = document.getElementById("error-message");

    // Check if the length of the security pin is not 6 digits
    if (pinInput.value.length != 6) {
      // If the length is incorrect, display an error message and return false
      errorMessage.innerText = "Your security pin should be 6 digits";
      errorMessage.style.display = "block";
      return false;
    }

    // Check if the security pin input is not a number
    else if (isNaN(pinInput.value)) {
      // If the input is not a number, display an error message and return false
      errorMessage.innerText = "Entered pin is incorrect";
      errorMessage.style.display = "block";
      return false;
    }

    else {
      // If the input is valid, hide the error message and return true
      errorMessage.style.display = "none";
      return true;
    }
}

// This function is used to clear the security pin input field
function clearFields() {
    // Get the security pin input field and set its value to an empty string
    document.getElementById("security-pin").value = "";
}
