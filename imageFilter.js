const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".all-animals");
const input = document.querySelector("input");

//filtering using categories button
buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filteredImage = e.target.dataset.filter;
    console.log(filteredImage);

    images.forEach((image) => {
      if (filteredImage == "all") {
        image.style.display = "block";
      } else if (image.classList.contains(filteredImage)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

input.addEventListener("keyup", () => {
  const inputValue = input.value.trim(); //remove white space
  if (inputValue.charAt(0) == "") return; //return if first type letter is whitespace
  images.forEach((image) => {
    if (image.classList.contains(inputValue)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

input.addEventListener("input", (e) => {
  if (input.value.trim() == "") {
    images.forEach((image, index) => {
      images[index].style.display = "block";
    });
  }
});
