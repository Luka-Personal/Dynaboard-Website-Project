// without this it executes before dom load so returns null error
window.onload = function () {
  const BTNpurplee = document.querySelectorAll(".theme-purple");
  const BTNredd = document.querySelectorAll(".theme-red");
  const filterOP = document.querySelectorAll(".option-filter");
  const filter_invOP = document.querySelectorAll(".option-filter-inv");
  const backOP = document.querySelectorAll(".option-bg");
  const textOP = document.querySelectorAll(".option-txt");
  const borderOP = document.querySelectorAll(".option-border");
  const border_dashedOP = document.querySelectorAll(".option-border_dashed");
  const back_darkOP = document.querySelectorAll(".option-bg__dark");
  const ilst_photoBOX = document.querySelectorAll(".bg1, .bg2, .bg3, .bg4");
  const featuresBG = document.querySelectorAll(
    " .code-widget, .users-widget, .share-widget, .deploy-widget"
  );
  for (const BTNred of BTNredd) {
    BTNred.addEventListener("click", function () {
      filterOP.forEach(function (filterOP) {
        filterOP.style.filter = "hue-rotate(-250deg) saturate(80%)";
      });
      filter_invOP.forEach(function (filter_invOP) {
        filter_invOP.style.filter = "hue-rotate(0)";
      });
      backOP.forEach(function (backOP) {
        backOP.style.backgroundColor = "#ed4b3c";
      });
      textOP.forEach(function (textOP) {
        textOP.style.color = "#ed4b3c";
      });
      borderOP.forEach(function (borderOP) {
        borderOP.style.border = "1px solid #ed4b3c";
      });
      border_dashedOP.forEach(function (border_dashedOP) {
        border_dashedOP.style.border = "2px dashed #ed4b3c";
      });
      ilst_photoBOX.forEach(function (ilst) {
        ilst.style.background =
          "linear-gradient(90deg, rgb(270, 75, 60) 0%, rgb(230, 100, 95) 100%)";
      });
      featuresBG.forEach(function (featuresBG) {
        featuresBG.style.border = "1rem solid #98362dd4";
      });
      back_darkOP.forEach(function (back_darkOP) {
        back_darkOP.style.backgroundColor = "#a6352a";
      });

      BTNred.classList.add("outline-theme");
      for (const BTNpurple of BTNpurplee) {
        BTNpurple.classList.remove("outline-theme");
      }
    });
  }
  for (const BTNpurple of BTNpurplee) {
    BTNpurple.addEventListener("click", function () {
      filterOP.forEach(function (filterOP) {
        filterOP.style.filter = "hue-rotate(0)";
      });
      filter_invOP.forEach(function (filter_invOP) {
        filter_invOP.style.filter = "hue-rotate(250deg)";
      });
      backOP.forEach(function (backOP) {
        backOP.style.backgroundColor = "#4c4acf";
      });
      textOP.forEach(function (textOP) {
        textOP.style.color = "#4c4acf";
      });
      borderOP.forEach(function (borderOP) {
        borderOP.style.border = "1px solid #4c4acf";
      });
      border_dashedOP.forEach(function (border_dashedOP) {
        border_dashedOP.style.border = "2px dashed #4c4acf";
      });
      ilst_photoBOX.forEach(function (ilst) {
        ilst.style.background =
          "linear-gradient( 90deg, rgb(56, 3, 170) 0%, rgb(105, 103, 226) 100% )";
      });
      featuresBG.forEach(function (featuresBG) {
        featuresBG.style.border = "1rem solid #4d4bcc56";
      });
      BTNpurple.classList.add("outline-theme");
      for (const BTNred of BTNredd) {
        BTNred.classList.remove("outline-theme");
      }
    });
  }
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
  var example = [
    "Build a partner portal - in one sitting.",
    "Build a GDPR-comp - in one sitting.",
    "Build a website - in one sitting.",
    "Build a MVP | in one sitting.",
  ];

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
};
