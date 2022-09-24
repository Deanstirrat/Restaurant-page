import { buildHomepage } from "./homepage.js";
import {buildMenuPage} from "./menuPage.js"

const content = document.createElement('div')
content.setAttribute("id", "content")
document.body.appendChild(content)

buildHomepage();
const deleteContent = function(){
    content.innerHTML = ''
}

document.getElementById("menuTabButton").addEventListener("click", deleteContent);
document.getElementById("menuTabButton").addEventListener("click", buildMenuPage);

document.getElementById("homeTabButton").addEventListener("click", deleteContent);
document.getElementById("homeTabButton").addEventListener("click", buildHomepage);