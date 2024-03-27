# odin-drop-down-menu

### You can import this menu with `npm install odin-drop-down-menu-junioru` and then use `import createMenu, { createMenuElementDom } from 'odin-drop-down-menu-junioru';`

### createMenu syntax: createMenu(title, id, parentElement);
### createMenuElementDom syntax: createMenuElementDom(title, id, menuId, link);

### Example:
`const body = document.querySelector("body");`

`createMenu("Test Menu", "testMenu", body);`

`createMenuElementDom("Google", "googleElement", "testMenu", "https://google.com");`

`createMenuElementDom("Youtube", "youtubeElement", "testMenu", "https://youtube.com");`

`createMenuElementDom("Test Very Long Name To See", "testElement", "testMenu", "https://test.com");`
