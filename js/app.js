// HAMBURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");

menuIcon.addEventListener("click", () => menuNavbar.classList.toggle("change"));

// WALLET FEATURES
const security = document.querySelector(".security");
const securityLink = document.querySelector(".security-link");

const sendAndReceive = document.querySelector(".send-receive");
const sendAndReceiveLink = document.querySelector(".send-receive-link");

const buyAndSell = document.querySelector(".buy-sell");
const buyAndSellLink = document.querySelector(".buy-sell-link");

const access = document.querySelector(".access");
const accessLink = document.querySelector(".access-link");

securityLink.addEventListener("click", () => {
  security.classList.add("active");
  securityLink.classList.add("active");

  sendAndReceive.classList.remove("active");
  sendAndReceiveLink.classList.remove("active");

  buyAndSell.classList.remove("active");
  buyAndSellLink.classList.remove("active");

  access.classList.remove("active");
  accessLink.classList.remove("active");
});

sendAndReceiveLink.addEventListener("click", () => {
  sendAndReceive.classList.add("active");
  sendAndReceiveLink.classList.add("active");

  security.classList.remove("active");
  securityLink.classList.remove("active");

  buyAndSell.classList.remove("active");
  buyAndSellLink.classList.remove("active");

  access.classList.remove("active");
  accessLink.classList.remove("active");
});

buyAndSellLink.addEventListener("click", () => {
  buyAndSell.classList.add("active");
  buyAndSellLink.classList.add("active");

  security.classList.remove("active");
  securityLink.classList.remove("active");

  sendAndReceive.classList.remove("active");
  sendAndReceiveLink.classList.remove("active");

  access.classList.remove("active");
  accessLink.classList.remove("active");
});

accessLink.addEventListener("click", () => {
  access.classList.add("active");
  accessLink.classList.add("active");

  security.classList.remove("active");
  securityLink.classList.remove("active");

  sendAndReceive.classList.remove("active");
  sendAndReceiveLink.classList.remove("active");

  buyAndSell.classList.remove("active");
  buyAndSellLink.classList.remove("active");
});

function displayElement() {
  const el = document.querySelector(".wallet-features-info-content");

  if (el.style.display === "none") {
    el.style.display = "block";
  } else if (el.style.display === "block") {
    el.style.display = "none";
  }
}
displayElement();
