document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
  }

  function closeModalFunction() {
    modal.style.display = "none";
  }

  closeModal.addEventListener("click", closeModalFunction);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModalFunction();
    }
  });

  const menuCategories = document.querySelectorAll(".menu-category");
  menuCategories.forEach((category) => {
    const image = category.querySelector("img");
    if (image) {
      image.addEventListener("click", function () {
        openModal(this.src);
      });

      image.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          openModal(this.src);
        }
      });

      image.setAttribute("tabindex", "0");
    }
  });
});
