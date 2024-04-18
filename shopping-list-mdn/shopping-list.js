const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const currentInputValue = input.value;
  input.value = "";
  console.log(currentInputValue);

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);

  span.textContent = currentInputValue;
  deleteBtn.textContent = "Delete";

  list.appendChild(listItem);

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  input.focus();
});
