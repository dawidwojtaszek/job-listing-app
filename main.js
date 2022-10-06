import data from "./data.json" assert { type: "json" };
import { renderList, renderFilterTab } from "./render.js";

const app = () => {
  let currentList = data;
  let currentTags = {
    role: null,
    level: null,
    languages: [],
    tools: [],
  };

  renderList(currentList);

  const rootElement = document.querySelector("#root");

  rootElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("click-event")) {
      const name = e.target.getAttribute("button-type");
      addFilter(name, e.target.innerText);
      console.log(currentList);
      renderList(currentList);
      renderFilterTab(currentTags);
    }
    e.preventDefault();
  });

  const addFilter = (key, newFilter) => {
    if (key === "languages" || key === "tools") {
      if (!currentTags[key].includes(newFilter)) {
        currentTags[key].push(newFilter);
      }
      filterData(currentTags);
      //   const newList = [];
      //   currentList.forEach((element) => {
      //     if (element[key].includes(newFilter)) {
      //       newList.push(element);
      //     }
      //   });
      //   currentList = newList;
    } else {
      currentTags[key] = newFilter;
      filterData(currentTags);
      //   const newList = [];
      //   currentList.forEach((element) => {
      //     if (element[key] === newFilter) {
      //       newList.push(element);
      //     }
      //   });
      //   currentList = newList;
    }
  };

  const filterData = (filters) => {
    if (filters.role !== null) {
      let tempList = [];
      currentList.forEach((element) => {
        if (element.role === filters.role) {
          tempList.push(element);

          currentList = tempList;
          console.log(currentList);
          console.log(filters);
        }
      });
    }
    if (filters.level !== null) {
      let tempList = [];
      currentList.forEach((element) => {
        if (element.level === filters.level) {
          tempList.push(element);
          currentList = tempList;
          console.log(currentList);
        }
      });
    }
    if (filters.languages.length !== 0) {
      let tempList = [];
      filters.languages.forEach((lang) => {
        tempList = [];
        currentList.forEach((element) => {
          if (element.languages.includes(lang)) {
            tempList.push(element);
          }
          currentList = tempList;
        });
      });
    }
    if (filters.tools.length !== 0) {
      let tempList = [];
      filters.tools.forEach((tool) => {
        tempList = [];
        currentList.forEach((element) => {
          if (element.tools.includes(tool)) {
            tempList.push(element);
          }
          currentList = tempList;
        });
      });
    }
  };

  const filterTab = document.querySelector("#filter-tab");
  filterTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-filter-btn")) {
      console.log("usun to kurwa");
    }
  });
};

// app init
app();
