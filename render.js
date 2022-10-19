export const renderList = (list) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  list.forEach((element) => {
    rootElement.appendChild(
      renderComponent({ ...element, isNew: element.new })
    );
  });
};

const renderComponent = ({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  //---Card element---
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  if (featured) {
    cardElement.classList.add("featured");
  }

  //---Logo element---
  const logoElement = document.createElement("img");
  logoElement.classList.add("logo");
  logoElement.alt = `${company}-logo`;
  logoElement.src = logo;

  //---Box Element---
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  boxElement.appendChild(
    renderInfo(company, isNew, featured, position, postedAt, contract, location)
  );
  boxElement.appendChild(renderTags(role, level, languages, tools));

  //---AppendElements---
  cardElement.appendChild(logoElement);
  cardElement.appendChild(boxElement);

  return cardElement;
};

const renderInfo = (
  company,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location
) => {
  //---Info Element---
  const infoElement = document.createElement("div");
  infoElement.classList.add("info");

  //---TopElements--
  const topElements = document.createElement("div");
  topElements.classList.add("top-elements");

  //---Company element
  const companyElement = document.createElement("span");
  companyElement.classList.add("company");
  companyElement.innerText = company;

  //--- append company to top element
  topElements.appendChild(companyElement);

  //--- check if is new
  if (isNew) {
    const newElement = document.createElement("div");
    newElement.classList.add("new-tag");
    newElement.innerText = "NEW!";
    topElements.appendChild(newElement);
  }

  //---check if is featured
  if (featured) {
    const featuredElement = document.createElement("div");
    featuredElement.classList.add("featured-tag");
    featuredElement.innerText = "FEATURED";
    topElements.appendChild(featuredElement);
  }

  //---position element
  const positionElement = document.createElement("h4");
  positionElement.classList.add("position");
  positionElement.innerText = position;

  //---bottom elements box ---
  const bottomElements = document.createElement("div");
  bottomElements.classList.add("bottom-elements-box");

  //---postedat element
  const postedAtElement = document.createElement("span");
  postedAtElement.classList.add("bottom-element");
  postedAtElement.innerText = postedAt;
  bottomElements.appendChild(postedAtElement);

  //---contractElement ---
  const contractElement = document.createElement("span");
  contractElement.classList.add("bottom-element");
  contractElement.innerText = contract;
  bottomElements.appendChild(contractElement);

  //--location element---
  const locationElement = document.createElement("span");
  locationElement.classList.add("bottom-element");
  locationElement.innerText = location;
  bottomElements.appendChild(locationElement);

  //---append Elements--
  infoElement.appendChild(topElements);
  infoElement.appendChild(positionElement);
  infoElement.appendChild(bottomElements);

  return infoElement;
};

const renderTags = (role, level, languages, tools) => {
  //---Tags Element box---
  const tagsElement = document.createElement("div");
  tagsElement.classList.add("tags");

  //---Role element---
  const roleElement = document.createElement("div");
  roleElement.classList.add("tag-element");
  roleElement.classList.add("click-event");
  roleElement.setAttribute("btn-type", "role");
  roleElement.innerText = role;
  tagsElement.appendChild(roleElement);

  //---Level Element
  const levelElement = document.createElement("div");
  levelElement.classList.add("tag-element");
  levelElement.classList.add("click-event");
  levelElement.setAttribute("btn-type", "level");
  levelElement.innerText = level;
  tagsElement.appendChild(levelElement);

  //--languags Element
  languages.forEach((element) => {
    const languageElement = document.createElement("div");
    languageElement.classList.add("tag-element");
    languageElement.classList.add("click-event");
    languageElement.setAttribute("btn-type", "languages");
    languageElement.innerText = element;
    tagsElement.appendChild(languageElement);
  });

  //---tools element
  tools.forEach((element) => {
    const toolsElement = document.createElement("div");
    toolsElement.classList.add("tag-element");
    toolsElement.classList.add("click-event");
    toolsElement.setAttribute("btn-type", "tools");
    toolsElement.innerText = element;
    tagsElement.appendChild(toolsElement);
  });
  return tagsElement;
};

export const renderFilterTab = (currentFilters) => {
  const tabElement = document.querySelector(".filter-tab");
  if (
    currentFilters.role === null &&
    currentFilters.level === null &&
    currentFilters.languages.length === 0 &&
    currentFilters.tools.length === 0
  ) {
    console.log("empty tags");
    tabElement.classList.add("hide");
    // hide tab
  } else {
    tabElement.innerHTML = "";
    tabElement.classList.remove("hide");
    const filtersBoxElement = document.createElement("div");
    filtersBoxElement.classList.add("filters-box");
    const clearFilterElement = document.createElement("button");
    clearFilterElement.classList.add("clear-btn");
    clearFilterElement.innerText = "Clear";
    tabElement.appendChild(filtersBoxElement);
    tabElement.appendChild(clearFilterElement);

    if (currentFilters.role !== null) {
      filtersBoxElement.appendChild(
        renderFilterElement(currentFilters.role, "role")
      );
    }
    if (currentFilters.level !== null) {
      filtersBoxElement.appendChild(
        renderFilterElement(currentFilters.level, "level")
      );
    }
    if (currentFilters.languages.lenght !== 0) {
      currentFilters.languages.forEach((element) => {
        filtersBoxElement.appendChild(
          renderFilterElement(element, "languages")
        );
      });
    }
    if (currentFilters.tools.lenght !== 0) {
      currentFilters.tools.forEach((element) => {
        filtersBoxElement.appendChild(renderFilterElement(element, "tools"));
      });
    }
  }
};

const renderFilterElement = (filterName, key) => {
  const filterElement = document.createElement("div");
  filterElement.classList.add("filter");
  filterElement.setAttribute("filter-type", key);
  const nameElement = document.createElement("span");
  nameElement.classList.add("name-filter");
  nameElement.innerText = filterName;
  const removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("remove-filter-btn");
  filterElement.appendChild(nameElement);
  filterElement.appendChild(removeBtnElement);
  return filterElement;
};
