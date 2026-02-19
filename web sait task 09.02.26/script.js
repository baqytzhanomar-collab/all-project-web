const promoClose = document.querySelector(".promo-close");
const promoBanner = document.querySelector(".promo-banner");

if (promoClose) {
    promoClose.onclick = function () {
        promoBanner.style.display = "none";
    };
}


const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");

if (searchBtn) {
    searchBtn.onclick = function () {
        if (searchInput.value === "") {
            alert("Введите текст для поиска");
        } else {
            alert("Вы искали: " + searchInput.value);
        }
    };
}
const loginBtn = document.querySelector(".icon-btn i.fa-user")?.parentElement;
const cartBtn = document.querySelector(".icon-btn i.fa-shopping-bag")?.parentElement;
const favBtn = document.querySelector(".icon-btn i.fa-heart")?.parentElement;

if (loginBtn) {
    loginBtn.onclick = function () {
        alert("Вход в аккаунт (заглушка)");
    };
}

if (cartBtn) {
    cartBtn.onclick = function () {
        alert("Корзина пока пустая 🛍️");
    };
}

if (favBtn) {
    favBtn.onclick = function () {
        alert("Избранное (пока ничего нет)");
    };
}
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.onclick = function () {
        const name = card.querySelector(".product-name");
        if (name) {
            alert("Открыть товар:\n" + name.innerText);
        } else {
            alert("Открыть товар");
        }
    };
});
const brandCards = document.querySelectorAll(".brand-card");

brandCards.forEach(card => {
    card.onclick = function () {
        alert("Переход в бренд (заглушка)");
    };
});
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
    card.onclick = function () {
        const title = card.querySelector(".category-name");
        if (title) {
            alert("Категория: " + title.innerText);
        }
    };
});
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const productsGrid = document.querySelector(".products-grid");

if (prevBtn && nextBtn && productsGrid) {

    nextBtn.onclick = function () {
        productsGrid.scrollLeft += 300;
    };

    prevBtn.onclick = function () {
        productsGrid.scrollLeft -= 300;
    };
}
const allLinks = document.querySelectorAll("a");

allLinks.forEach(link => {
    link.onclick = function (e) {
        if (link.getAttribute("href") === "#") {
            e.preventDefault();
            alert("Переход временно отключен");
        }
    };
});
