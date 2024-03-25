import { createMenu } from "./menu";
import { createMenuElementDom } from "./menu-dom";
import "./styles.css";

const body = document.querySelector("body");
createMenu("Test", "testMenu", body);
createMenuElementDom("Home", "homeElement", "testMenu", "https://google.com");
createMenuElementDom(
  "About",
  "aboutElement",
  "testMenu",
  "https://youtube.com",
);
