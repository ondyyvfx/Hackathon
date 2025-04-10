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

// Корзина
// попытка сделать корзину не успел из за дедлайна(
// let cart = []

// const cartItemsContainer = document.querySelector(".list2-item")
// const addToCartButtons = document.querySelector(".add-to-cart")
// const cartList = {
//   0: {
//     title: "Полет в Невесомости",
//     price: "2.400.000",
//     image: "./img/utilities/gravity.jpeg",
//     id: 0,
//   }
// };
// const listHtml = document.querySelector(".container")

// function createCartHtml(obj){
//   const div = document.createElement("div")

//   div.className = "list2-item"
//   div.innerHTML = `
//               <div class="list2-item-img">
//                 <img src="${obj.image}" alt="" />
//               </div>
//               <div class="list2-item-desc">
//                 <h4>${obj.title}</h4>
//                 <p>${obj.price} тг</p>
//               </div>
//               <div class="list2-item-btn">
//                 <button id="${obj.id}" class="add-to-cart" >В корзину</button>
//               </div>
//   `
//   return(div);
// }

// console.log(createCartHtml(cartList[0]))

// function addToCart(productId, productName, productPrice) {  
//   listHtml.append(createCartHtml(cartList[0]))
// }

// addToCart();