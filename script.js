// Place your JavaScript code inside a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Function to open the modal and display the clicked image
  function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
  }

  // Function to close the modal
  function closeModalFunction() {
    modal.style.display = "none";
  }

  // Close modal when clicking the close button (X)
  closeModal.addEventListener("click", closeModalFunction);

  // Close modal when pressing the "Esc" key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModalFunction();
    }
  });

  // Add click event listeners to all the images inside .menu-category elements
  const menuCategories = document.querySelectorAll(".menu-category");
  menuCategories.forEach((category) => {
    const image = category.querySelector("img");
    if (image) {
      image.addEventListener("click", function () {
        openModal(this.src);
      });
    }
  });
});
