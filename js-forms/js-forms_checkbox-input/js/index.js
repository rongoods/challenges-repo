console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const submitSuccess = document.querySelector(".success");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    return;
  }
  // --^-- write your code here --^--
  submitSuccess.removeAttribute("hidden");
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (event) => {
  if (!tosCheckbox.checked) {
    return showTosError();
  } else {
    return hideTosError();
  }
});
