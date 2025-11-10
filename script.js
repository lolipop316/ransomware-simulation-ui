// get elements from page
const restoreBtn = document.getElementById("restoreBtn");
const authInput = document.getElementById("authcode");
const keyInput = document.getElementById("name");
const messageBox = document.createElement("p");
document.querySelector("main").appendChild(messageBox);

// fake data for testing
const validKeys = ["alpha123", "bravo456", "charlie789"];
const expectedAuthCode = "unlock";

// check inputs and show result
function simulateRestore() {
  const key = keyInput.value.trim();
  const auth = authInput.value.trim();

  // compare values
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
  simulateRestore();
});
