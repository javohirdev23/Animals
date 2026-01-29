import {
  elContainer,
  elTemplate,
  elCardBody,
  elInfo,
  elLoader,
  elLoaderTemp,
} from "./elements.js";

// ui fetch main
loader(true);
fetch("https://json-api.uz/api/project/game-over/animals")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ui(res.data);
  })
  .catch((err) => {
    // console.log(err);
  })
  .finally(() => {
    loader(false);
  });

function ui(data) {
  const elBtnHover = document.querySelector(".group");
  data.forEach((element) => {
    const clone = elTemplate.cloneNode(true).content;

    clone.querySelector(".js-name").innerText = element.name
      ? element.name
      : "Animal name not found!";
    clone.querySelector(".js-category").innerText = element.category
      ? element.category
      : "Animal category not found!";
    clone.querySelector(".js-year").innerText = element.year
      ? element.year
      : "Animal category not found!";

    elContainer.appendChild(clone, elBtnHover);
  });
}

elContainer.addEventListener("click", (evt) => {
  window.location.href = "./info/information.html";
});

function loader(bool) {
  if (bool) {
    elLoader.innerHTML = null;
    Array.from({ length: 10 }, (_, index) => index).forEach(() => {
      elLoader.appendChild(elLoaderTemp.cloneNode(true).content);
    });
  } else {
    elLoader.innerHTML = null;
  }
}
