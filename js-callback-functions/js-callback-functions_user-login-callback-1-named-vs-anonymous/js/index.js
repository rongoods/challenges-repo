console.clear();

function handleUserLogin(onSuccess) {
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}
// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
