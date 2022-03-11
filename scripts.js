const loopInit = [1, 0, 1, 0, 1, 0, 1, 0];

const doc = document;

const pieces = {
  k: "K",
  p: "P",
  b: "B",
  r: "R",
  q: "Q",
  h: "H",
};

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
      const innerSpan = document.createElement('span');

      const arr = [];
      arr.push(parentId);
      arr.push(index + 1);
      arr.push(num);

      const id = arr.join("");
      const color = ["black", "white"];

      if (idNum % 2 === 1) {
        innerDiv.setAttribute("id", id);
        innerDiv.setAttribute("class", color[num]);
        
        // innerDiv.style.width = `${width / 8}px`;
        // innerDiv.style.height = `${width / 8}px`;
        innerDiv.appendChild(innerSpan)
    
        root.appendChild(innerDiv);
      } else {
        const num2 = [num === 1 ? 0 : 1];
        innerDiv.setAttribute("id", id);
        innerDiv.setAttribute("class", color[num2]);
        innerDiv.appendChild(innerSpan)

        // innerDiv.style.width = `${width / 8}px`;
        // innerDiv.style.height = `${width / 8}px`;
        root.appendChild(innerDiv);
      }
    });

    const local = window.localStorage;



    // doc.getElementById("changeColor").addEventListener("click", (e) => {
     
    //     doc.querySelectorAll(".white").forEach((el) => {
    //       el.classList.add("green");
    //       el.classList.remove("white");
    //     });

    //     doc.querySelectorAll(".black").forEach((el) => {
    //       el.classList.add("light");
    //       el.classList.remove("black");
    //     });
     
    // });

    // doc.getElementById("changeColorToDefault").addEventListener("click", (e) => {
     
    //     doc.querySelectorAll(".green").forEach((el) => {
    //       el.classList.add("white");
    //       el.classList.remove("green");
    //     });

    //     doc.querySelectorAll(".light").forEach((el) => {
    //       el.classList.add("black");
    //       el.classList.remove("light");
    //     });
     
    // });
    
   
  }
});

document.addEventListener("click", (e) => {
  try {
    const id = e.target.attributes.id.nodeValue;
    console.log(id);
  } catch (err) {}
});
