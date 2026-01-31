import {
  elTemplateInfo,
  elContainerInfo,
  elSkeletonCont,
  elSkeletonTemp,
} from "../js/elements.js";

let animalId = new URLSearchParams(location.search).get("id");
loaderSkeleton(true)
fetch(`https://json-api.uz/api/project/game-over/animals/${animalId}`)
  .then((res) => res.json())
  .then((res) => {
    uiInfo(res);
  })
  .catch(() => {})
  .finally(() => {
    loaderSkeleton(false)
  });

function uiInfo(data) {
  const clone = elTemplateInfo.cloneNode(true).content;
  clone.querySelector(".js-name").innerText = data.name
    ? data.name
    : "Animal name not found!";
  clone.querySelector(".js-category").innerText = data.category
    ? data.category
    : "Animal category not found!";
  clone.querySelector(".js-speed").innerText = data.speed
    ? data.speed
    : "Animal speed not found!";
  clone.querySelector(".js-soundText").innerText = data.soundText
    ? data.soundText
    : "Animal speed not found!";
  clone.querySelector(".js-years").innerText = data.year
    ? data.year
    : "Animal year not found!";
  clone.querySelector(".js-weight").innerText = data.weight
    ? data.weight
    : "Animal weight not found!";
  clone.querySelector(".js-color").innerText = data.color
    ? data.color
    : "Animal color is not found!";
  clone.querySelector(".js-habitat").innerText = data.habitat
    ? data.habitat
    : "Animal habitat is not found!";
  clone.querySelector(".js-isWild").innerText = data.isWild
    ? data.isWild
    : "Animal isWild is not found!";

  elContainerInfo.appendChild(clone);
}

// loader

function loaderSkeleton(bool) {
  if (bool) {
    elSkeletonCont.innerHTML = null;
    Array.from({ length: 1 }, (_, index) => index).forEach(() => {
      elSkeletonCont.appendChild(elSkeletonTemp.cloneNode(true).content);
    });
  } else {
    elSkeletonCont.innerHTML = null;
  }
}
