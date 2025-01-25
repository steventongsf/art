import { useEffect } from "react";
import "./gallery.css"
import PageFilters from "../components/PageFilters"
import Heading from "../components/Heading"
import MyModal from "../components/MyModal"
import ArtItem from "../components/ArtItem";

function PhotoGallery({title,description,json}) {
  useEffect(() => {
    document.title = title;
    document.querySelectorAll(".photo img").forEach((img) => {
      img.addEventListener("click", function () {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = this.src.replace("_thumbnail", "");
        captionText.innerHTML = this.nextElementSibling.innerHTML;
      });
      document.querySelectorAll(".photo a").forEach((img) => {
        img.addEventListener("click", function () {
          const modal = document.getElementById("myDetails");
          const captionText = document.getElementById("artdetails");
          modal.style.display = "block";
          captionText.innerHTML = this.nextElementSibling.innerHTML;
        });
      });
    });
  });

  return (
    <>
    <Heading title={title} description={description}/>
    <PageFilters/>
    <section id="gallery">
    {json.map(item=> (
      <ArtItem item={item}/>
    ))
    }
    </section>
    <MyModal/>
    </>
  );
}
export default PhotoGallery;
