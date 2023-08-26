// Select all elements with the class "faq" and assign them to the constant variable "faqs"
const faqs = document.querySelectorAll(".faq");

// Iterate over each FAQ element and add a click event listener to each one
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
         // When the FAQ element is clicked, toggle the "active" class on the element
        faq.classList.toggle("active");
    })
})

// This function is called when the "show more" button is clicked
function showMore() {
    // Hide the "show more" button by setting its display property to "none"
    document.getElementById("more-btn").style.display = "none";
    // Show the additional feedback by setting its display property to "block"
    document.getElementById("more-feedback").style.display = "block";
}