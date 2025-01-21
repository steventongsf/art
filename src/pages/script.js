document.querySelectorAll(".photo img").forEach((img) => {
    img.addEventListener("click", function () {
      const modal = document.getElementById("myModal");
      const modalImg = document.getElementById("img01");
      const captionText = document.getElementById("caption");
      modal.style.display = "block";
      console.log(this.src.replace("_thumbnail", ""));
      modalImg.src = this.src.replace("_thumbnail", "");
      captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
  });
  document.querySelectorAll(".photo a").forEach((img) => {
    img.addEventListener("click", function () {
      const modal = document.getElementById("myDetails");
      const captionText = document.getElementById("artdetails");
      modal.style.display = "block";
      captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
  });
  
  function filterGallery(category) {
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      const isVisible = category === "all" || photo.classList.contains(category);
      photo.style.display = isVisible ? "" : "none";
    });
  }
  
  const closeButton = document.querySelector(".close");
  closeButton.onClick = function () {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  const detailsCloseButton = document.querySelector(".detailsclose");
  detailsCloseButton.onClick = function () {
    const modal = document.getElementById("myDetails");
    modal.style.display = "none";
  };
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const modal = document.getElementById("myModal");
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
      const modalDetails = document.getElementById("myDetails");
      if (modalDetails.style.display === "block") {
        modalDetails.style.display = "none";
      }
    }
  });
  
  