/*
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Hamburger button listener
btn.addEventListener('click', navToggle)

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'))

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}
*/
tailwind.config = {
  theme: {
    fontFamily: {
      sans: [
        "Rubik",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
};
// menu
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
var menuLink = document.getElementById("menu-link");
var menuContainer = document.getElementById("menu-container");
var logoCon = document.getElementById("logo-con");

function menuFun() {
  menuIcon.classList.toggle("open");
  menu.classList.toggle("fixed");
  menu.classList.toggle("static");
  menu.classList.toggle("bg-[#252b46]");
  menu.classList.toggle("pt-12");

  menuLink.classList.toggle("flex");
  menuLink.classList.toggle("hidden");

  menuContainer.classList.toggle("container");
  menuContainer.classList.toggle("px-6");

  logoCon.classList.toggle("open");
}
// ffeature
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      //"border-softRed",
      "border-b-4"
      // "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-b-4");
  const classString = e.target.getAttribute("data-target");
  console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
