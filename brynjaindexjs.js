document.getElementById("submit-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;

  if (email && validateEmail(email)) {
    // Placeholder: Replace with your own POST or mailing list logic
    console.log("Email submitted:", email);
    document.getElementById("confirmation").style.display = "block";
  } else {
    alert("Please enter a valid email address.");
  }
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
