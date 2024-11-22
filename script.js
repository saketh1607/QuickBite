 const menuItems = [
        { id: 1, name: 'Veg Fried Rice', price: 60, img: 'https://tse1.mm.bing.net/th?id=OIP.4wrRVc6j3A9vtrOafulXigHaFM&pid=Api&P=0&h=180', category: 'fastfood' },
        { id: 2, name: 'Juice', price: 50, img: 'https://img.freepik.com/premium-photo/closeup-mango-juice-dripping-from-juicer_198067-285454.jpg', category: 'juices' },
        { id: 3, name: 'Plain Dosa', price: 40, img: 'https://oventales.com/wp-content/uploads/2017/05/Plain-Dosa002.jpg', category: 'annapurna' },
        { id: 4, name: 'Chapati', price: 50, img: 'https://media.istockphoto.com/id/526846282/photo/traditional-indian-roti-ready-to-serve.jpg?s=612x612&w=0&k=20&c=o3yyyZ4yjfwsgcZf1JIu0rice8cB2nLflh6EgF6c6pk=', category: 'annapurna' },
        { id: 5, name: 'Manchurya', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.tXeX-3DTKJ2qatxZCACLbQHaE8&pid=Api&P=0&h=180', category: 'fastfood' },
        { id: 7, name: 'Manchurya Noodles', price: 70, img: 'https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg', category: 'fastfood' },
        { id: 8, name: 'Dry Maggi', price: 50, img: 'https://i.ytimg.com/vi/gFJpjvDT3s4/maxresdefault.jpg', category: 'maggies' },
        { id: 9, name: 'Soupy Maggi', price: 55, img: 'https://tse1.mm.bing.net/th?id=OIP.Sw6agpuS6dU4nhQD6wjVcQHaEK&pid=Api&P=0&h=180', category: 'maggies' },
        { id: 10, name: 'Peri-Peri Fries', price: 50, img: 'https://tse3.mm.bing.net/th?id=OIP.7I78DZ3TcPF2E0BPUREqCgHaH4&pid=Api&P=0&h=180', category: 'fries' },
        { id: 11, name: 'Paneer Frankie', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.VzrRoF2FmfsofGYWahJQQAHaEK&pid=Api&P=0&h=180', category: 'frankies' },
        { id: 12, name: 'Manchury Frankie', price: 60, img: 'https://i.ytimg.com/vi/V1cGyZUu8lM/hqdefault.jpg', category: 'frankies' },
        { id: 13, name: 'Paneer Schezwan', price: 65, img: 'https://i.ytimg.com/vi/9UlRvBhI398/maxresdefault.jpg', category: 'frankies' },
        { id: 14, name: 'Egg Maggi', price: 55, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7x0Dn2SCKs2aJ4brEGgb4oabViOGkeE5GKzYkABoGCRmclgla9HlQM0F1RhplUfAZyY&usqp=CAU', category: 'maggies' },
        { id: 15, name: 'Masala Dosa', price: 45, img: 'https://media.istockphoto.com/photos/south-indian-breakfast-dosa-in-golden-brown-color-picture-id177266405?k=6&m=177266405&s=612x612&w=0&h=xjxOoDLbocEYTxSh_FIlnQR4bDQ89egLhaJN0UWkr6s=', category: 'annapurna' },
        { id: 16, name: 'Onion Dosa', price: 45, img: 'https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid', category: 'annapurna' }
    ];
    let cartItems = [];

    document.addEventListener('DOMContentLoaded', () => {
        repeater(menuItems);
    });
    
    function scrollToMenu() {
        document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });
    }
    function scrolltochefs() {
        document.getElementById('chef').scrollIntoView({ behavior: 'smooth' });
    }
    function canteen(){
        document.getElementById('cann').scrollIntoView({ behavior: 'smooth' });
    }
    
    
    function repeater(items) {
        const menuItemsContainer = document.getElementById('menuItems');
        menuItemsContainer.innerHTML = '';
    
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <div class="buttons">
                    <button class="order-btn" onclick="orderItem(${item.id})">Order Now</button>
                    <button class="cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            `;
    
            menuItemsContainer.appendChild(menuItem);
        });
    }
    
    document.getElementById('searchBar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query));
        repeater(filteredItems);
    });
    
    document.getElementById('filter').addEventListener('change', function() {
        const filterValue = this.value;
        let filteredItems = menuItems;
    
        if (filterValue !== 'all') {
            if (filterValue === 'lowtohigh') {
                filteredItems = menuItems.slice().sort((a, b) => a.price - b.price);
            } else {
                filteredItems = menuItems.filter(item => item.category === filterValue);
            }
        }
    
        repeater(filteredItems);
    });
    
    function orderItem(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        if (item) {
            showUPIScanner()
            const uniqueId = `ORD${Math.floor(Math.random() * 100000)}`;
            alert(`Your order for ${item.name} has been placed successfully!\nOrder ID: ${uniqueId}`);
           
        }
    }
    
    function addToCart(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        if (item) {
            const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({ ...item, quantity: 1 });
            }
            updateCartCount();
            alert(`${item.name} has been added to your cart.`);
        }
    }
    
    function updateCartCount() {
        const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.inner').textContent = cartCount + ' ';
        document.querySelector('.inner').innerHTML += '<i class="fa-solid fa-cart-shopping fa-xl"></i>';
    }
    
    function showcart() {
        const menuItemsContainer = document.getElementById('menuItems');
        menuItemsContainer.innerHTML = '<button onclick="showUPIScanner()">Place Order</button>';
    
        if (cartItems.length === 0) {
            menuItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
    
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('menu-item');
            
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                
            `;
            
            menuItemsContainer.appendChild(cartItem);
        });
       
    }
    
    function removeFromCart(itemId) {
        cartItems = cartItems.filter(item => item.id !== itemId);
        updateCartCount();
        showcart();
    }
    
    function showUPIScanner() {
        const modal = document.getElementById('upiModal');
        modal.style.display = 'flex';
    }
    
    function closeModal() {
        const modal = document.getElementById('upiModal');
        modal.style.display = 'none';
        cartItems = [];
        updateCartCount();
        alert('Thank you for your order! Your food will be delivered soon.');
    }
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('upiModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
function paginate(items) {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
}

function renderPagination(items) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(items.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) button.classList.add('active');
        button.onclick = () => {
            currentPage = i;
            displayMenu(menuItems);
        };
        pagination.appendChild(button);
    }
}

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    alert(`${item.name} added to cart.`);
}

function addToWishlist(id) {
    const item = menuItems.find(i => i.id === id);
    wishlist.push(item);
    alert(`${item.name} added to wishlist.`);
}

function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(i => `<p>${i.name} - ₹${i.price}</p>`).join('');
    cartModal.style.display = 'flex';
}

function showWishlist() {
    const wishlistModal = document.getElementById('wishlistModal');
    const wishlistItems = document.getElementById('wishlistItems');
    wishlistItems.innerHTML = wishlist.map(i => `<p>${i.name}</p>`).join('');
    wishlistModal.style.display = 'flex';
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}

function checkout() {
    alert('Proceeding to payment...');
}
