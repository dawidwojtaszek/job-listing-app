import data from "./data.json" assert { type: "json" };
import { renderList } from "./render.js";

const app = () => {
  let currentList = data;

  renderList(currentList);

  const tagsTest = document.querySelector("#root");

  tagsTest.addEventListener("click", (e) => {
    if (e.target.classList.contains("click-check")) {
      console.log("click");
    }
    e.preventDefault();
  });
};

// app init

app();
