function createMenuDom(title, id, parentElement) {
  const menu = document.createElement("div");
  menu.classList.add("dropdown-menu");
  menu.id = `${id}`;
  menu.dataset.hidden = "true";

  const p = document.createElement("p");
  p.textContent = `${title}`;
  p.classList.add("dropdown-menu-title");
  p.addEventListener("click", () => {
    ul.classList.toggle("hide");
    menu.dataset.hidden === "true"
      ? (menu.dataset.hidden = "false")
      : (menu.dataset.hidden = "true");
  });

  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu-list", "hide");

  const firstElement = document.createElement("li");
  firstElement.id = "firstElement";
  const pFirst = document.createElement("p");
  pFirst.textContent = "First Element";
  firstElement.appendChild(pFirst);

  menu.appendChild(p);
  menu.appendChild(ul);

  parentElement.appendChild(menu);
}

function createMenuElementDom(title, id, parentMenuId, link) {
  const parentMenu = document.getElementById(parentMenuId);
  const ul = parentMenu.querySelector("ul");

  const element = document.createElement("li");
  element.id = `${id}`;
  element.addEventListener("click", (e) => {
    if (parentMenu.dataset.hidden === "true") {
      return e.preventDefault();
    } else {
      return (window.location.href = pElement.href);
    }
  });
  const pElement = document.createElement("a");
  pElement.textContent = `${title}`;
  pElement.href = `${link}`;
  element.appendChild(pElement);

  return ul.appendChild(element);
}

export { createMenuDom, createMenuElementDom };
