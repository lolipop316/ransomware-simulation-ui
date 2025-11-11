// get and create elements from page
const restoreBtn = document.getElementById("restoreBtn");
const authInput = document.getElementById("authcode");
const keyInput = document.getElementById("name");
const messageBox = document.createElement("p");
document.querySelector("main").appendChild(messageBox);

// fake data for testing
const validKeys = ["justin123", "kid456", "charlie789"]; // decrypt id
const expectedAuthCode = "unlock"; // auth code

// verification function
function simulateRestore() {
  const key = keyInput.value.trim();
  const auth = authInput.value.trim();
  // main check logic compare values
  if (validKeys.includes(key) && auth === expectedAuthCode) {
    messageBox.textContent = "✅ data successfully restored";
    messageBox.style.color = "limegreen";
  } else {
    messageBox.textContent = "❌ invalid credentials, try again";
    messageBox.style.color = "red";
  }
}

// run when button clicked
restoreBtn.addEventListener("click", (event) => {
  event.preventDefault(); // stop form reload
  simulateRestore(); // call function
});
