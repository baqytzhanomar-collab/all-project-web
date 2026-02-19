
let cart = [];


const cartCountEl = document.querySelector('.cart-count');
const emptyCartEl = document.querySelector('.empty-cart');
const cartItemsEl = document.querySelector('.cart-items');
const cartFooterEl = document.querySelector('.cart-footer');
const totalAmountEl = document.querySelector('.total-amount');
const modalOverlay = document.querySelector('.modal-overlay');
const orderSummaryEl = document.querySelector('.order-summary');
const modalTotalEl = document.querySelector('.modal-total');


document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', handleDecreaseQty);
    });
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', handleIncreaseQty);
    });
    document.querySelector('.confirm-order-btn').addEventListener('click', showOrderConfirmation);
    document.querySelector('.new-order-btn').addEventListener('click', resetOrder);
}

function handleAddToCart(e) {
    const menuItem = e.currentTarget.closest('.menu-item');
    const id = menuItem.dataset.id;
    const name = menuItem.dataset.name;
    const price = parseFloat(menuItem.dataset.price);
    const img = menuItem.querySelector('.dessert-img').src;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1, img });
    }

    updateMenuItemUI(menuItem, 1);
    updateCartUI();
}

function handleDecreaseQty(e) {
    const menuItem = e.currentTarget.closest('.menu-item');
    const id = menuItem.dataset.id;
    
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
            updateMenuItemUI(menuItem, 0);
        } else {
            updateMenuItemUI(menuItem, cartItem.quantity);
        }
        updateCartUI();
    }
}

function handleIncreaseQty(e) {
    const menuItem = e.currentTarget.closest('.menu-item');
    const id = menuItem.dataset.id;
    
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity++;
        updateMenuItemUI(menuItem, cartItem.quantity);
        updateCartUI();
    }
}

function updateMenuItemUI(menuItem, quantity) {
    const addBtn = menuItem.querySelector('.add-to-cart-btn');
    const qtyControls = menuItem.querySelector('.quantity-controls');
    const qtyValue = menuItem.querySelector('.qty-value');
    const img = menuItem.querySelector('.dessert-img');

    if (quantity > 0) {
        addBtn.classList.add('hidden');
        qtyControls.classList.remove('hidden');
        qtyValue.textContent = quantity;
        img.classList.add('in-cart');
    } else {
        addBtn.classList.remove('hidden');
        qtyControls.classList.add('hidden');
        img.classList.remove('in-cart');
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCountEl.textContent = `(${totalItems})`;

    if (cart.length === 0) {
        emptyCartEl.classList.remove('hidden');
        cartItemsEl.classList.add('hidden');
        cartFooterEl.classList.add('hidden');
    } else {
        emptyCartEl.classList.add('hidden');
        cartItemsEl.classList.remove('hidden');
        cartFooterEl.classList.remove('hidden');

        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-details">
                        <span class="item-qty">${item.quantity}x</span>
                        <span class="item-unit-price">@ $${item.price.toFixed(2)}</span>
                        <span class="item-total-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        totalAmountEl.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    
   
    const menuItem = document.querySelector(`.menu-item[data-id="${id}"]`);
    if (menuItem) {
        updateMenuItemUI(menuItem, 0);
    }
    
    updateCartUI();
}

function showOrderConfirmation() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    orderSummaryEl.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-info">
                <img src="${item.img}" alt="${item.name}" class="order-item-img">
                <div class="order-item-details">
                    <h4>${item.name}</h4>
                    <div class="order-item-meta">
                        <span class="order-item-qty">${item.quantity}x</span>
                        <span>@ $${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <span class="order-item-total">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    modalTotalEl.textContent = `$${totalPrice.toFixed(2)}`;
    modalOverlay.classList.remove('hidden');
}

function resetOrder() {
    cart = [];
    
    document.querySelectorAll('.menu-item').forEach(item => {
        updateMenuItemUI(item, 0);
    });
    
    updateCartUI();
    modalOverlay.classList.add('hidden');
}


window.removeFromCart = removeFromCart;