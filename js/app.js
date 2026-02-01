import {
  elContainer,
  elFormName,
  elTemplate,
  elCardBody,
  elInfo,
  elLoader,
  elLoaderTemp,
  elEditBtn,
  elDeleteBtn,
  elAddModalBtn,
  elAddFrom,
  elToastTemp,
  eltoastCont,
  elLogIn,
  elAddBtn,
  elTostTemp,
  elSearch,
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
    elContainer.innerHTML = `
<div class="flex flex-col items-center ml-150 mt-20">

  <span >
    <svg
      fill="#000000"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.00 512.00"
      xml:space="preserve"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <g>
              <path
                d="M21.333,21.333h213.333v96c0,5.867,4.8,10.667,10.667,10.667h96v74.667h21.333v-85.333c0-2.88-1.173-5.547-3.093-7.573 L252.907,3.093C250.88,1.173,248.213,0,245.333,0H10.667C4.8,0,0,4.8,0,10.667v448c0,5.867,4.8,10.667,10.667,10.667H224V448 H21.333V21.333z M256,36.373l70.293,70.293H256V36.373z"
              ></path>
              <path
                d="M510.827,496.533l-128-256c-3.627-7.253-15.467-7.253-19.093,0l-128,256c-2.667,5.227-0.533,11.627,4.8,14.293 c1.493,0.747,3.093,1.173,4.8,1.173h256C507.2,512,512,507.2,512,501.333C512,499.733,511.573,498.027,510.827,496.533z M262.613,490.667l110.72-221.44l110.72,221.44H262.613z"
              ></path>
              <path
                d="M362.667,350.08v69.44c0,5.333,3.84,10.133,9.067,10.88c6.613,0.96,12.267-4.16,12.267-10.56V350.4 c0-5.333-3.84-10.133-9.067-10.88C368.32,338.56,362.667,343.68,362.667,350.08z"
              ></path>
              <path
                d="M373.333,444.16c-5.867,0-10.667,4.8-10.667,10.667c0,5.867,4.8,10.667,10.667,10.667c5.867,0,10.667-4.8,10.667-10.667 C384,448.96,379.2,444.16,373.333,444.16z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
   <span class="text-heading text-4xl ">Not found</span></div>
    </span>
</div>
  

   `;
  })
  .finally(() => {
    loader(false);
  });

function ui(data) {
  const elBtnHover = document.querySelector(".group");
  elContainer.innerHTML = "";
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
    clone.querySelector("button").id = element.id;
    clone.querySelector(".js-delete-btn").id = element.id;
    clone.querySelector("a").href = `/info/information.html?id=${element.id}`;
    elContainer.appendChild(clone, elBtnHover);
  });
}
// Skeleton
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
// delete addevenlisener
elContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("js-delete-btn")) {
    evt.target.disabled = true;
    evt.target.innerHTML = `
    <div class="justify-center flex">
       <svg aria-hidden="true" class="w-4 h-4 text-neutral-tertiary animate-spin fill-brand me-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
       </svg>Deleted...
    </div>
    `;

    if (login()) {
      deleteCard(evt.target.id, evt.target);
    } else {
      location.href = "./login/login.html";
    }
  }
});

// Delete function
function deleteCard(id, buttonElement) {
  const token = localStorage.getItem("token");

  fetch("https://json-api.uz/api/project/game-over/animals/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      const cardElement = buttonElement.closest(".js-cards, [data-id]");
      //

      if (cardElement) {
        cardElement.style.opacity = "0.5";

        setTimeout(() => {
          cardElement.remove();
        }, 300);
      }
    })
    .catch(() => {})
    .finally(() => {});
}
// login
elLogIn.addEventListener("click", (evt) => {
  if (localStorage.getItem("token")) {
    elLogIn.style.display = "none";
  } else {
    elLogIn.style.display = "flex";
    window.location.href = "/login/login.html";
  }
});
window.onload = function () {
  if (localStorage.getItem("token")) {
    elLogIn.style.display = "hidden";
  } else {
    elLogIn.style.display = "flex";
  }
};
setInterval(() => {
  if (localStorage.getItem("token")) {
  } else {
    elLogIn.style.display = "flex";
  }
}, 10000);
// add
elAddBtn.addEventListener("click", (evt) => {
  const check = login();
  if (check) {
    document.getElementById(`[data-modal-toggle="crud-modal"]`);
  } else {
    location.href = "./login/login.html";
  }
});

function login() {
  if (localStorage.getItem("token") === null) {
    return false;
  } else {
    return true;
  }
}

elAddFrom.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(elAddFrom);
  const result = {};

  formData.forEach((value, key) => {
    result[key] = value;
  });

  if (result.isWild === "true") result.isWild = true;
  if (result.isWild === "false") result.isWild = false;

  fetch("https://json-api.uz/api/project/game-over/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(result),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then((data) => {
      console.log("Added:", data);
      location.href = "./index.html";
    })
    .catch((err) => console.error(err));
  console.log(localStorage.getItem("token"));
});

// search
elSearch.addEventListener("input", (evt) => {
  console.log(evt.target.value);

  let nameAnimal = evt.target.value.trim();
  if (nameAnimal === "") {
    ui(res.data);
    return;
  }
  searchAnimal(nameAnimal);
});
// search function
function searchAnimal(nameAnimal) {
  fetch(`https://json-api.uz/api/project/game-over/animals/?name=${nameAnimal}`)
    .then((res) => res.json())
    .then((res) => {
      ui(res.data);
    })
    .catch(() => {
      elContainer.innerHTML = `<svg class="flex   ml-130 mt-10" width="254px" height="254px" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M38.155 140.475L48.988 62.1108L92.869 67.0568L111.437 91.0118L103.396 148.121L38.155 140.475ZM84.013 94.0018L88.827 71.8068L54.046 68.3068L44.192 135.457L98.335 142.084L104.877 96.8088L84.013 94.0018ZM59.771 123.595C59.394 123.099 56.05 120.299 55.421 119.433C64.32 109.522 86.05 109.645 92.085 122.757C91.08 123.128 86.59 125.072 85.71 125.567C83.192 118.25 68.445 115.942 59.771 123.595ZM76.503 96.4988L72.837 99.2588L67.322 92.6168L59.815 96.6468L56.786 91.5778L63.615 88.1508L59.089 82.6988L64.589 79.0188L68.979 85.4578L76.798 81.5328L79.154 86.2638L72.107 90.0468L76.503 96.4988Z" fill="#000000"></path> </g></svg>`;
    })
    .finally(() => {});
}
