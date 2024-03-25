import { createMenuDom } from "./menu-dom";

export function firstFunction() {
  console.log("First");
}

export function secondFunction() {
  console.log("Second");
}

export function thirdFunction() {
  console.log("Third");
}

class Menu {
  constructor(title, id, parentElement) {
    this.title = title;
    this.id = id;
    this.parentElement = parentElement;
    this.elements = [];
  }

  get title() {
    return super.title;
  }

  get id() {
    return super.id;
  }

  get parentElement() {
    return super.parentElement;
  }

  set title(title) {
    super.title = title;
  }

  set id(id) {
    super.id = id;
  }

  set parentElement(parentElement) {
    super.parentElement = parentElement;
  }
}

export function createMenu(title, id, parentElement) {
  const newMenu = new Menu(title, id, parentElement);
  return createMenuDom(
    newMenu.title,
    newMenu.id,
    newMenu.parentElement,
    newMenu,
  );
}

export function createMenuElement(title, id, parentMenuId) {
  const parentMenu = document.getElementById(parentMenuId);
  console.log(title);
  console.log(id);
  console.log(parentMenu);
}
