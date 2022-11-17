const BTNpurplee = document.querySelectorAll(".theme-purple");
const BTNredd = document.querySelectorAll(".theme-red");
const filterOP = document.querySelectorAll(".option-filter"); // done
const filter_invOP = document.querySelectorAll(".option-filter-inv"); // ?
const backOP = document.querySelectorAll(".option-bg"); // done
const textOP = document.querySelectorAll(".option-txt"); // done
const borderOP = document.querySelectorAll(".option-border"); // done
const border_dashedOP = document.querySelectorAll(".option-border_dashed");
const back_darkOP = document.querySelectorAll(".option-bg__dark");
//##########################################################################################################
const navBOX = document.querySelector(".nav-box");
const navICON = document.querySelector(".menu-icon");
const navSIGN = document.querySelectorAll(".nav-sign, .mobile-span");
const navITEM = document.querySelectorAll(".mobile-nav__item, .nav-sign");

navICON.addEventListener("click", function () {
  navBOX.classList.toggle("navigation-mobile");

  document.body.classList.toggle("hidden");
  for (const navSIGNN of navSIGN) {
    navSIGNN.classList.toggle("display-hide--unhide");
  }
});
for (const navITEMM of navITEM) {
  navITEMM.addEventListener("click", function () {
    navBOX.classList.remove("navigation-mobile");
    document.body.classList.remove("hidden");
    for (const navSIGNN of navSIGN) {
      navSIGNN.classList.remove("display-hide--unhide");
    }
  });
}
const textCAROUSEL = document.querySelector(".paragraph.main.js");
const example = ["Build a partner portal - in one sitting.", "Build a GDPR-comp - in one sitting.", "Build a website - in one sitting.", "Build a MVP | in one sitting."];

textSequence(0);
function textSequence(i) {
  if (example.length > i) {
    setTimeout(function () {
      textCAROUSEL.innerHTML = example[i];
      textSequence(++i);
    }, 5000);
  } else if (example.length == i) {
    textSequence(0);
  }
}
// new
const root = document.querySelector(":root");
const themeSelBox = document.querySelectorAll(`.theme-boxicle`);
const switchThemeFilter = document.querySelectorAll(`.theme-switch`);
const allThemeBtns = document.querySelectorAll(`.theme-boxicle .btn`);

const changeColor = function (...array) {
  for (const [color, selector] of array.values()) {
    root.style.setProperty(`${selector}`, `${color}`);
  }
};
const switchFilter = function (hueDeg, hueDegProperty) {
  //  --filter-color: 0deg;
  switchThemeFilter.forEach((el) => (el.style.filter = `hue-rotate(${hueDeg}deg)`));
  root.style.setProperty(`${hueDegProperty[1]}`, `${hueDegProperty[0]}deg`);
};

const changeTheme = function (color) {
  if (color === `red`) {
    switchFilter(-250, [-250, `--filter-color`]);
    changeColor([`#ed4b3c`, `--main-color`], [`#f16f63`, `--secondary-color`], [`#f4938a`, `--secondary-color__light`], [`#77261e`, `--thirdiary-color__dark`]);
  }
  if (color === `purple`) {
    switchFilter(0, [0, `--filter-color`]);
    changeColor([`#4c4acf`, `--main-color`], [`#3e3cc5`, `--secondary-color`], [`#7f7dd3`, `--secondary-color__light`], [`#4d4bcc56`, `--thirdiary-color__dark`]);
  }
};
if (localStorage.getItem(`theme`) === `red`) {
  changeTheme(`red`);
  allThemeBtns.forEach((el) => el.classList.remove(`outline-theme`));
  document.querySelectorAll(`.theme-red`).forEach((el) => el.classList.add(`outline-theme`));
}
if (localStorage.getItem(`theme`) === `purple`) {
  changeTheme(`purple`);
  allThemeBtns.forEach((el) => el.classList.remove(`outline-theme`));
  document.querySelectorAll(`.theme-purple`).forEach((el) => el.classList.add(`outline-theme`));
}

themeSelBox.forEach((box) => {
  box.addEventListener(`click`, function (e) {
    const colorPicker = e.target.closest(`.btn`);
    if (!colorPicker) return;
    history.go(0); // refresh page
    document.querySelectorAll(`.theme-boxicle .btn`).forEach((el) => el.classList.remove(`outline-theme`));
    colorPicker.classList.toggle(`outline-theme`);
    if (colorPicker.dataset.color === `red`) {
      localStorage.setItem(`theme`, `red`);
      changeTheme(`red`);
    }
    if (colorPicker.dataset.color === `purple`) {
      localStorage.setItem(`theme`, `purple`);
      changeTheme(`purple`);
    }
  });
});
