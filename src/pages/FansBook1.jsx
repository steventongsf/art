import { useEffect } from "react";
import json from "../data/fans-book1.json"
import "./gallery.css"
import PageFilters from "../components/PageFilters"
import Heading from "../components/Heading"
import MyModal from "../components/MyModal"
import ArtItem from "../components/ArtItem";

function FansBook1() {
  useEffect(() => {
    document.title = "Chinese Fans Book 1";
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
      
      const closeButton = document.querySelector(".close");
      closeButton.onclick = function () {
        console.log("myModal close clicked")
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
      };

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          const modal = document.getElementById("myModal");
          if (modal.style.display === "block") {
            modal.style.display = "none";
          }
        }
      });
    
    });
  });

  return (
    <>
    <Heading title="Chinese Fans - Book 1" description="Collection of 42 chinese fan paintings from the early 19th to early 20th centuries."/>
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
export default FansBook1;
