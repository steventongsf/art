function PageFilters() {
  function filterGallery(category) {
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      const isVisible = category === "all" || photo.classList.contains(category);
      photo.style.display = isVisible ? "" : "none";
      console.log(photo);
    });
  }
  console.log("PageFilters")
  
    return (
    <nav>
    <button className="filter" onClick={() => filterGallery('all')}>All</button>
    <button className="filter" onClick={() => filterGallery('landscapes')}>Landscapes</button>
    <button className="filter" onClick={() => filterGallery('people')}>People</button>
    <button className="filter" onClick={() => filterGallery('flowers')}>Flowers</button>
    <button className="filter" onClick={() => filterGallery('birds')}>Birds</button>
    <button className="filter" onClick={() => filterGallery('calligraphy')}>Calligraphy</button>
  </nav>
    );

}
export default PageFilters