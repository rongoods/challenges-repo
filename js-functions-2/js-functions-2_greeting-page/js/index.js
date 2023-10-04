console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const current = new Date();
  const timeOfDay = current.getHours();
  if (timeOfDay >= 6 || timeOfDay <= 12) {
    return "Good Morning";
  } else if (timeOfDay >= 13 || timeOfDay <= 18) {
    return "Good Afternoon";
  } else if (timeOfDay >= 19 || timeOfDay <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const today = new Date();
  const dayOfWeek = today.getDay();
  if (dayOfWeek === 1) {
    return "darkgray";
  } else if (dayOfWeek === 2 || 3 || 4 || 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
