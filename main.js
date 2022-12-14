import { data } from "./data.js";
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
      const name = e.target.getAttribute("data-btn");
      addFilter(name, e.target.innerText);
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
    } else {
      currentTags[key] = newFilter;
      filterData(currentTags);
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

  const filterTab = document.querySelector(".filter-tab");
  filterTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-filter-btn")) {
      console.log(e.target.previousElementSibling.innerText);
      console.log(e.target.parentElement.getAttribute("filter-type"));

      removeFilter(
        e.target.previousElementSibling.innerText,
        e.target.parentElement.getAttribute("filter-type")
      );
      currentList = data;
      filterData(currentTags);
      renderList(currentList);
      renderFilterTab(currentTags);
    }
    if (e.target.classList.contains("clear-btn")) {
      clearFilters();
    }
  });

  const removeFilter = (name, type) => {
    if (type === "role" || type === "level") {
      currentTags[type] = null;
    } else {
      if (currentTags[type].length === 1) {
        currentTags[type] = [];
      } else {
        let tempList = [];
        currentTags[type].forEach((element) => {
          if (element != name) {
            tempList.push(element);
          }
        });
        currentTags[type] = tempList;
      }
    }
  };
  const clearFilters = () => {
    currentTags = {
      role: null,
      level: null,
      languages: [],
      tools: [],
    };
    currentList = data;
    renderList(data);
    renderFilterTab(currentTags);
  };
};

// app init
app();
