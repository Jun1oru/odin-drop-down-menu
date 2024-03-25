import { createMenu, createMenuElement } from "./menu";
import "./styles.css";

const body = document.querySelector("body");
createMenu("Test", "testMenu", body);
const menu = document.getElementById("testMenu");
createMenuElement("test2", "test3", menu);
