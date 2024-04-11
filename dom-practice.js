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

/*
    add a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pinkDiv");

pinkDiv.setAttribute(
  "style",
  "background-color: pink; border: 5px solid black"
);
container.appendChild(pinkDiv);

const pinkDivH1 = document.createElement("h1");
pinkDivH1.classList.add("pinkDivH1");
pinkDivH1.textContent = `I'm in a div`;

const pinkDivP = document.createElement("p");
pinkDivP.classList.add("pinkDivP");
pinkDivP.textContent = `ME TOO!`;

pinkDiv.appendChild(pinkDivH1);
pinkDiv.appendChild(pinkDivP);

const btn = document.querySelector("#btn");

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

console.log(container);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

// console.log(buttons);
