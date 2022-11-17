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

// navICON.addEventListener("click", function () {
//   navBOX.classList.toggle("navigation-mobile");

//   document.body.classList.toggle("hidden");
//   for (const navSIGNN of navSIGN) {
//     navSIGNN.classList.toggle("display-hide--unhide");
//   }
// });
// for (const navITEMM of navITEM) {
//   navITEMM.addEventListener("click", function () {
//     navBOX.classList.remove("navigation-mobile");
//     document.body.classList.remove("hidden");
//     for (const navSIGNN of navSIGN) {
//       navSIGNN.classList.remove("display-hide--unhide");
//     }
//   });
// }
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
const themeSelBox = document.querySelector(`.theme-boxicle`);
const switchThemeFilter = document.querySelectorAll(`.theme-switch`);

const changeColor = function (...array) {
  for (const [color, selector] of array.values()) {
    root.style.setProperty(`${selector}`, `${color}`);
  }
};
const switchFilter = function (hueDeg) {
  switchThemeFilter.forEach((el) => (el.style.filter = `hue-rotate(${hueDeg}deg)`));
};
themeSelBox.addEventListener(`click`, function (e) {
  console.log(e.target);
  const colorPicker = e.target.closest(`.btn`);
  console.log(colorPicker);
  if (!colorPicker) return;
  document.querySelectorAll(`.theme-boxicle .btn`).forEach((el) => el.classList.remove(`outline-theme`));
  colorPicker.classList.toggle(`outline-theme`);
  if (colorPicker.dataset.color === `red`) {
    switchFilter(-250);
    changeColor([`#ed4b3c`, `--main-color`], [`#f16f63`, `--secondary-color`], [`#f4938a`, `--secondary-color__light`], [`#77261e`, `--thirdiary-color__dark`]);
  }
  if (colorPicker.dataset.color === `purple`) {
    switchFilter(0);
    changeColor([`#4c4acf`, `--main-color`], [`#3e3cc5`, `--secondary-color`], [`#7f7dd3`, `--secondary-color__light`], [`#4d4bcc56`, `--thirdiary-color__dark`]);
  }
});
