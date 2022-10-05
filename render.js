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
  id,
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

  //---Logo element---
  const logoElement = document.createElement("img");
  logoElement.classList.add("logo");
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
  companyElement.classList.add("position");
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
  const roleElement = document.createElement("button");
  roleElement.classList.add("tag-element");
  roleElement.classList.add("click-event");
  roleElement.setAttribute("button-type", "role");
  roleElement.innerText = role;
  tagsElement.appendChild(roleElement);

  //---Level Element
  const levelElement = document.createElement("button");
  levelElement.classList.add("tag-element");
  levelElement.classList.add("click-event");
  levelElement.setAttribute("button-type", "level");
  levelElement.innerText = level;
  tagsElement.appendChild(levelElement);

  //--languags Element
  languages.forEach((element) => {
    const languageElement = document.createElement("button");
    languageElement.classList.add("tag-element");
    languageElement.classList.add("click-event");
    languageElement.setAttribute("button-type", "language");
    languageElement.innerText = element;
    tagsElement.appendChild(languageElement);
  });

  //---tools element
  tools.forEach((element) => {
    const toolsElement = document.createElement("button");
    toolsElement.classList.add("tag-element");
    toolsElement.classList.add("click-event");
    toolsElement.setAttribute("button-type", "tools");
    toolsElement.innerText = element;
    tagsElement.appendChild(toolsElement);
  });
  return tagsElement;
};
