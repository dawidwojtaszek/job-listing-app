import data from "./data.json" assert { type: "json" };
import { renderList } from "./render.js";

const app = () => {
  let currentList = data.map((element) => element);
  let currentTags = {
    role: null,
    level: null,
    languages: [],
    tools: [],
  };

  renderList(currentList);

  const rootElement = document.querySelector("#root");
  console.log(currentList);
  rootElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("click-event")) {
      const name = e.target.getAttribute("button-type");
      addFilter(name, e.target.innerText);
      renderList(currentList);
      console.log(currentTags);
      // -> check if is clicked before
      // -> add to current tags if non exist
      // -> filter currentList and rerender
      // -> remove if exist
    }
    e.preventDefault();
  });

  const addFilter = (key, newFilter) => {
    if (key === "languages" || key === "tools") {
      if (!currentTags[key].includes(newFilter)) {
        currentTags[key].push(newFilter);
      }
      const newList = [];
      currentList.forEach((element) => {
        if (element[key].includes(newFilter)) {
          newList.push(element);
        }
      });
      currentList = newList;
    } else {
      currentTags[key] = newFilter;
      const newList = [];
      currentList.forEach((element) => {
        if (element[key] === newFilter) {
          newList.push(element);
        }
      });
      currentList = newList;
    }
  };
  const removeFilter = (key, filterToRemove) => {
    if (key === "languages" || key === "tools") {
      currentTags[key] = [];
    } else {
      currentTags[key] = currentTags[key].filter((element) => {
        element != filterToRemove;
      });
    }
  };
};

// app init
app();
