const button = document.getElementById("button");
const label = document.getElementById("label");
const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("icon-error");

button.addEventListener("click", function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  button.style.backgroundColor = "hsl(0, 36%, 70%)";

  // Get the email input value
  var emailValue = email.value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is valid
  if (!emailRegex.test(emailValue)) {
    label.textContent = "Please provide a valid email";
    label.style.color = "hsl(354, 100%, 66%)";
    form.style.borderColor = "hsl(0, 93%, 68%)";
    error.style.display = "block";
    return;
  } else {
    label.textContent = "Thank you! Your email address has been added";
    label.style.color = "hsl(0, 36%, 70%)";
    form.style.borderColor = "hsl(0, 36%, 70%)";
    error.style.display = "none";

    // Reset the email input value
    email.value = "";
    return;
  }
});
