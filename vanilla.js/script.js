let cart = [];
let totalPrice = 0;

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; 

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('totalPrices').innerText = '$0.00';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="card mb-3 p-4 shadow-sm">
                <div class="d-flex">
                    <img src="${item.img}" alt="${item.name}" style="width: 90px; height: 90px; object-fit: cover;" class="me-3 rounded">
                    <div class="">
                        <h5 class="mb-1">${item.name}</h5>
                        <p class="text-muted mb-0">$${item.price} x ${item.quantity}</p>
                        <button class="btn btn-sm btn-success mt-4" onclick="removeItem(${index})">Remove</button>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-danger me-2" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="px-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-success ms-2" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    updateTotalPrice(); 
    updateCartQuantityBadge(); 
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const productImg = this.getAttribute('data-img');

        const listitem = cart.find(item => item.name === productName);

        if (listitem) {
            listitem.quantity += 1; 
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }

        updateCartDisplay(); 
    });
});

function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); 
    }

    updateCartDisplay(); 
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();    
}

function updateCartQuantityBadge() {
    const cartQuantityBadge = document.getElementById('cartQuantityBadge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartQuantityBadge.innerText = totalItems; 
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPricesFooter = document.getElementById('totalPrices');
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

    totalPriceElement.innerText = `$${totalPrice}`;
    totalPricesFooter.innerText = `$${totalPrice}`;
}
