import { firstFunction, secondFunction, thirdFunction } from "./menu";

export function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("dropdown-menu");

  let menuHidden = true;

  const p = document.createElement("p");
  p.textContent = "Menu";
  p.classList.add("dropdown-menu-title");
  p.addEventListener("click", () => {
    const liElements = menu.querySelectorAll("li");
    const fElement = document.getElementById("firstElement");
    const sElement = document.getElementById("secondElement");
    const tElement = document.getElementById("thirdElement");
    if (menuHidden) {
      fElement.addEventListener("click", () => firstFunction());
      sElement.addEventListener("click", () => secondFunction());
      tElement.addEventListener("click", () => thirdFunction());
    } else {
      liElements.forEach((element) => {
        const cloneElement = element.cloneNode(true);
        element.parentNode.replaceChild(cloneElement, element);
      });
    }
    ul.classList.toggle("hide");
    menuHidden = !menuHidden;
  });

  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu-list", "hide");

  const firstElement = document.createElement("li");
  firstElement.id = "firstElement";
  const pFirst = document.createElement("p");
  pFirst.textContent = "First Element";
  firstElement.appendChild(pFirst);

  const secondElement = document.createElement("li");
  secondElement.id = "secondElement";
  const pSecond = document.createElement("p");
  pSecond.textContent = "Second Element";
  secondElement.appendChild(pSecond);

  const thirdElement = document.createElement("li");
  thirdElement.id = "thirdElement";
  const pThird = document.createElement("p");
  pThird.textContent = "Third Element";
  thirdElement.appendChild(pThird);

  ul.appendChild(firstElement);
  ul.appendChild(secondElement);
  ul.appendChild(thirdElement);

  menu.appendChild(p);
  menu.appendChild(ul);

  return menu;
}
