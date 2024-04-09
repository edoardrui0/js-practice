const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p");
redPara.classList.add("redPara");
redPara.textContent = `Hey I'm red!`;

redPara.setAttribute("style", "color:red;");
container.appendChild(redPara);

// add an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = `I'm a blue h3!`;

blueH3.setAttribute("style", "color:blue;");
container.appendChild(blueH3);
