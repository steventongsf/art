import { useEffect } from "react";
import json from "../data/fans-book2.json"
import "./gallery.css"
import PageFilters from "../components/PageFilters"
import MyModal from "../components/MyModal"
import Header from "../components/Header"

function FansBook2() {
  useEffect(() => {
    document.title = "Chinese Fans Book 2";
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
    <header>
      <h1>Chinese Fans - Book 2</h1>
      <p>
      Collection of 22 chinese fan paintings from the mid-18th to early 20th centuries.
      </p>
    </header>
    <PageFilters/>
    <section id="gallery">
    {json.map(item=> (
    <div className={'photo '+item.category}>
      <img src={item.filename.replace(".jpg","_thumbnail.jpg")}/>
      <p className="caption">{item.title}</p>
      <a href="#">Details</a>
      <ul className="details">
        <li key="created">created: {item.created}</li>
        <li key="artist">artist: {item.artist}</li>
        <li key="seal">seal: {item.seal}</li>
        <li key="translation">translation: {item.translation}</li>
        <li key="notes">translation: {item.notes}</li>
      </ul>
    </div>
    
    ))
    }
    </section>
    <div id="myModal" className="modal">
      <span className="close">&times;</span>
      <img className="modal-content" id="img01" />
      <div id="caption"></div>
    </div>

    </>
  );
}
export default FansBook2;
