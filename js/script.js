// Меню Регистрации и Входа
const reg = document.querySelector("#reg");
const log = document.querySelector("#log");
const regMenu = document.querySelector(".reg-menu");
const logMenu = document.querySelector(".log-menu");
const regClose = document.querySelector(".reg-btn");
const logClose = document.querySelector(".log-btn");
const diona = document.querySelector(".reg-img");
const hutao = document.querySelector(".log-img");

reg.addEventListener("click", function () {
  regMenu.classList.add("active");
  logMenu.classList.remove("active");
  diona.classList.add("active");
  hutao.classList.remove("active");
});

regClose.addEventListener("click", function () {
  regMenu.classList.remove("active");
  diona.classList.remove("active");
});

log.addEventListener("click", function () {
  logMenu.classList.add("active");
  regMenu.classList.remove("active");
  diona.classList.remove("active");
  hutao.classList.add("active");
});

logClose.addEventListener("click", function () {
  logMenu.classList.remove("active");
  hutao.classList.remove("active");
});

// Меню каталога
const headButton = document.querySelector(".head-button");
const headMenu = document.querySelector(".catalog");

headButton.addEventListener("click", function () {
  headButton.classList.toggle("active");
  headMenu.classList.toggle("active");
});

// Остановка планет во время наведения курсором

let theCSSprop;

const venus = document.querySelector(".venus");

const planets = {
  earth: {
    elem: document.querySelector(".earth"),
    info: {
      title: "Земля",
    },
  },
  venus: {
    elem: document.querySelector(".venus"),
    info: {
      title: "Венера",
    },
  },
  mars: {
    elem: document.querySelector(".mars"),
    info: {
      title: "Марс",
    },
  },
  mercury: {
    elem: document.querySelector(".mercury"),
    info: {
      title: "Меркурий",
    },
  },
  neptune: {
    elem: document.querySelector(".neptune"),
    info: {
      title: "Нептун",
    },
  },
  uranus: {
    elem: document.querySelector(".uranus"),
    info: {
      title: "Уран",
    },
  },
  saturn: {
    elem: document.querySelector(".saturn"),
    info: {
      title: "Сатурн",
    },
  },
  jupiter: {
    elem: document.querySelector(".jupiter"),
    info: {
      title: "Юпитер",
    },
  },
};

addEvents(planets.earth, 150);
addEvents(planets.venus, 105);
addEvents(planets.mars, 200);
addEvents(planets.mercury, 75);
addEvents(planets.neptune, 421);
addEvents(planets.uranus, 375);
addEvents(planets.saturn, 315);
addEvents(planets.jupiter, 250);

function stopAnim(e, translateX) {
  let theCSSprop = window.getComputedStyle(e).getPropertyValue("rotate");
  let currentRotation = parseFloat(theCSSprop);

  e.style.animationPlayState = "paused";

  e.style.transform = `translateX(${translateX}px) rotate(${currentRotation}deg)`;
}

function startAnim(e) {
  e.style.animationPlayState = "running";
}

function addEvents(target, t) {
  target.elem.addEventListener("mouseover", () => {
    stopAnim(target.elem, t);
    openModule(target);
  });
  target.elem.addEventListener("mouseout", () => {
    startAnim(target.elem);
    closeModule(target);
  });
}

// Infoblock

function openModule(target) {
  const info = target.elem.querySelector(".info");

  console.log(target);

  info.innerHTML = `
      <h2>${target.info.title}</h2>
    `;

  info.setAttribute(`open`, ``);

  let theCSSprop = window
    .getComputedStyle(target.elem)
    .getPropertyValue("rotate");
  let rotationValue = parseFloat(theCSSprop);

  info.style.transform = `rotate(${-rotationValue}deg)`;
}

function closeModule(target) {
  const info = target.elem.querySelector(".info");
  info.removeAttribute(`open`);
}
