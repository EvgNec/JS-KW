Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@EvgNec 
simakol
/
GoIT74
Public
Fork your own copy of simakol/GoIT74
Code
Issues
Pull requests
Actions
Projects
Security
Insights
GoIT74/script.js
@simakol
simakol lesson-11
Latest commit 3cc6d6f 1 hour ago
 History
 1 contributor
94 lines (71 sloc)  2.47 KB

// const container = document.querySelector("#container")
// const container = document.getElementById("container")

// console.log(container.childNodes)

//! ====================================================

//* 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Показати як це робиться через **map** та **reduce**

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

/*
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
*/

// const listEl = document.createElement("ul");

// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   //   liEl.textContent = technology;
//   const text = document.createTextNode(technology);
//   liEl.appendChild(text);
//   listEl.appendChild(liEl);
// }
// console.dir(listEl);
// document.body.appendChild(listEl);

//* ===== map =====

// const markup = `<ul>${technologies.map(technology => `<li>${technology}</li>`).join("")}</ul>`

// document.body.insertAdjacentHTML("afterbegin", markup)

//* ===== reduce =====

// const markup = `<ul>${technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// )}</ul>`;

// document.body.innerHTML = markup;
// document.body.insertAdjacentHTML("afterbegin", markup)

//! ====================================================

//* 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const fragment = document.createDocumentFragment();

// colors.forEach(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = label;
//   buttonEl.style.backgroundColor = color;
//   buttonEl.type = "button";
//   buttonEl.className = "button";

//   fragment.appendChild(buttonEl);
//   //   document.body.appendChild(buttonEl);
// });

// document.body.appendChild(fragment);

//! ====================================================

const liItem = document.querySelectorAll(".item")

liItem.forEach(el => {
    console.log(el.firstElementChild.textContent)
    console.log(el.lastElementChild.children.length)
})
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
GoIT74/script.js at lesson-11 · simakol/GoIT74