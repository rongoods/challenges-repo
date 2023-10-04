// const current = new Date();
// const timeOfDay = current.getHours();

// console.log("the time is: ", timeOfDay);

// function getGreeting() {
//   // Code here
//   const current = new Date();
//   const timeOfDay = current.getHours();
//   if (timeOfDay >= 6 || timeOfDay <= 12) {
//     return "Good Morning";
//   } else if (timeOfDay >= 13 || timeOfDay <= 18) {
//     return "Good Afternoon";
//   } else if (timeOfDay >= 19 || timeOfDay <= 22) {
//     return "Good Evening";
//   } else {
//     return "Good Night";
//   }
// }

// console.log(getGreeting());

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
console.log(getDayColor());
