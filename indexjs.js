document.getElementById("submit-btn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form refresh

  const email = document.getElementById("email").value;

  if (email && validateEmail(email)) {
    fetch("https://formspree.io/f/xvgravza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("email").value = ""; // Clear form
      } else {
        response.json().then(data => {
          alert(data.error || "There was an error submitting your email.");
        });
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
