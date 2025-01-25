import { useEffect } from "react";

function MyModal() {
    useEffect(() => {
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
    return (    
    <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />
        <div id="caption"></div>
    </div>
    )
}
export default MyModal