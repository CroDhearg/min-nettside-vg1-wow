let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg"); // Make sure this is an <img> tag
let close = document.querySelector(".close-btn"); // Ensure this is the correct <span>

if (!wrapper || !imgWrapper || !close) {
  console.error("Required elements are missing in the DOM.");
} else {
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      openModal(`images/img${index}.jpg`);
    });
  });

  close.addEventListener("click", () => {
    wrapper.style.display = "none";
  });

  function openModal(pic) {
    wrapper.style.display = "flex";
    imgWrapper.src = pic; // Ensure imgWrapper is an <img>
  }
}
