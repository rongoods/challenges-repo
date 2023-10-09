console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function newPost() {
  const newSection = document.createElement(".post");
  const secondPost = document.createTextNode("Here's a new post.");

  // newSection.appendChild(secondPost);
}

document.body.append(newPost);
