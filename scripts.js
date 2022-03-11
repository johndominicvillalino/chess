const loopInit = [1, 0, 1, 0, 1, 0, 1, 0];

const doc = document;
const local = window.localStorage;

const getIdOfChild = (index) => {
  const id = doc.querySelector("#parent").children[index].id;

  return id;
};

window.addEventListener("load", () => {



    // default color

  const totalChildren = doc.querySelector("#parent").children.length;

  for (i = 0; i < totalChildren; i++) {
    const parentId = getIdOfChild(i);

    let idNum = parentId.replace(/\D/g, "");

    const root = doc.getElementById(parentId);

    const width = document.getElementById("parent").offsetHeight;

    loopInit.forEach((num, index) => {
      const innerDiv = document.createElement("div");
      const innerSpan = document.createElement("span");

      const arr = [];
      arr.push(parentId);
      arr.push(index + 1);
      arr.push(num);

      const id = arr.join("");
      const color = ["black", "white"];

      if (idNum % 2 === 1) {
        innerSpan.setAttribute("id", id);
        innerSpan.setAttribute("draggable", true);
        innerSpan.setAttribute(
          "ondragstart",
          "event.dataTransfer.setData('text/plain',null)"
        );
        innerDiv.setAttribute("class", color[num]);
        innerDiv.appendChild(innerSpan);

        root.appendChild(innerDiv);
      } else {
        const num2 = [num === 1 ? 0 : 1];
        innerSpan.setAttribute("id", id);
        innerDiv.setAttribute("class", color[num2]);
        innerDiv.appendChild(innerSpan);
        innerSpan.setAttribute("draggable", true);
        innerSpan.setAttribute(
          "ondragstart",
          "event.dataTransfer.setData('text/plain',null)"
        );
        root.appendChild(innerDiv);
      }
    });

    // light theme

    doc.getElementById("changeColor").addEventListener("click", (e) => {
      doc.querySelectorAll(".white").forEach((el) => {
        el.classList.add("green");
        el.classList.remove("white");
      });

      doc.querySelectorAll(".black").forEach((el) => {
        el.classList.add("light");
        el.classList.remove("black");
      });

      doc.getElementById("parent").style.borderColor = "#2a6628";

    });

    
    //default theme

    doc.getElementById("changeColorToDefault").addEventListener("click", (e) => {

        doc.querySelectorAll(".green").forEach((el) => {
          el.classList.add("white");
          el.classList.remove("green");
        });

        doc.querySelectorAll(".light").forEach((el) => {
          el.classList.add("black");
          el.classList.remove("light");
        });
        doc.getElementById("parent").style.borderColor = "#694f47";
      });

  }

  //flip

  doc.getElementById('flip').addEventListener('click', e => {
    

  doc.querySelectorAll("span").forEach((e) => {
    //id
    const spanIds = e.id;

    //get row
    const getRow = [...spanIds];
    const row = getRow[3];

    //get col
    const col = getRow[4];

    if (row == 2) {
      doc.getElementById(spanIds).className = "w-pawn";
    }

    if (row == 7) {

      doc.getElementById(spanIds).className = "b-pawn";
    }

    if (row == 1) {
      switch (col) {
        case "1":
          doc.getElementById(spanIds).className = "w-tower";
          break;
        case "8":
          doc.getElementById(spanIds).className = "w-tower";
          break;
        case "2":
          doc.getElementById(spanIds).className = "w-horse";
          break;
        case "7":
          doc.getElementById(spanIds).className = "w-horse";
          break;
        case "3":
          doc.getElementById(spanIds).className = "w-bishop";
          break;
        case "6":
          doc.getElementById(spanIds).className = "w-bishop";
          break;
        case "4":
          doc.getElementById(spanIds).className = "w-king";
          break;
        case "5":
          doc.getElementById(spanIds).className = "w-queen";
          break;

        default:
          break;
      }
    }

    if (row == 8) {
      switch (col) {
        case "1":
          doc.getElementById(spanIds).className = "b-tower";
          break;
        case "8":
          doc.getElementById(spanIds).className = "b-tower";
          break;
        case "2":
          doc.getElementById(spanIds).className = "b-horse";
          break;
        case "7":
          doc.getElementById(spanIds).className = "b-horse";
          break;
        case "3":
          doc.getElementById(spanIds).className = "b-bishop";
          break;
        case "6":
          doc.getElementById(spanIds).className = "b-bishop";
          break;
        case "4":
          doc.getElementById(spanIds).className = "b-king";
          break;
        case "5":
          doc.getElementById(spanIds).className = "b-queen";
          break;

        default:
          break;
      }
    }

    doc.getElementById('flip').style.display = 'none'


  });



  })
 

  

  //@ init pieces

  doc.querySelectorAll("span").forEach((e) => {
    //id
    const spanIds = e.id;

    //get row
    const getRow = [...spanIds];
    const row = getRow[3];

    //get col
    const col = getRow[4];

    if (row == 2) {
      doc.getElementById(spanIds).className = "b-pawn";
    }

    if (row == 7) {

      doc.getElementById(spanIds).className = "w-pawn";
    }

    if (row == 1) {
      switch (col) {
        case "1":
          doc.getElementById(spanIds).className = "b-tower";
          break;
        case "8":
          doc.getElementById(spanIds).className = "b-tower";
          break;
        case "2":
          doc.getElementById(spanIds).className = "b-horse";
          break;
        case "7":
          doc.getElementById(spanIds).className = "b-horse";
          break;
        case "3":
          doc.getElementById(spanIds).className = "b-bishop";
          break;
        case "6":
          doc.getElementById(spanIds).className = "b-bishop";
          break;
        case "4":
          doc.getElementById(spanIds).className = "b-king";
          break;
        case "5":
          doc.getElementById(spanIds).className = "b-queen";
          break;

        default:
          break;
      }
    }

    if (row == 8) {
      switch (col) {
        case "1":
          doc.getElementById(spanIds).className = "w-tower";
          break;
        case "8":
          doc.getElementById(spanIds).className = "w-tower";
          break;
        case "2":
          doc.getElementById(spanIds).className = "w-horse";
          break;
        case "7":
          doc.getElementById(spanIds).className = "w-horse";
          break;
        case "3":
          doc.getElementById(spanIds).className = "w-bishop";
          break;
        case "6":
          doc.getElementById(spanIds).className = "w-bishop";
          break;
        case "4":
          doc.getElementById(spanIds).className = "w-king";
          break;
        case "5":
          doc.getElementById(spanIds).className = "w-queen";
          break;

        default:
          break;
      }
    }


  });
});

let dragInput;

/* events fired on the draggable target */
document.addEventListener("drag", (event) => {});

document.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragInput = event.target;
  // make it half transparent
  event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.style.opacity = "";
});

document.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("dragenter", (event) => {});

document.addEventListener("dragleave", (event) => {});

doc.addEventListener("drop", (e) => {
  const piece = dragInput.className;
  dragInput.className = "";
  e.target.className = piece;
});

