document.getElementById("submit-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;

  if (email && validateEmail(email)) {
    fetch("https://script.google.com/macros/s/AKfycbwmrWJITf6V4-rEZQ2HjUw4nJLGhRegem6xzLaXihW8m4QPH1-ySGsoSagdxXskQggYag/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("confirmation").style.display = "block";
      } else {
        alert("There was an error submitting your email.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Network error.");
    });
  } else {
    alert("Please enter a valid email address.");
  }
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
