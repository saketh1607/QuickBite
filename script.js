const menuItems = [
    { id: 1, name: 'Veg Fried Rice', price: 60, img: 'https://tse1.mm.bing.net/th?id=OIP.4wrRVc6j3A9vtrOafulXigHaFM&pid=Api&P=0&h=180', category: 'fastfood', nutrition: { calories: 250, fat: 10, protein: 6, carbs: 35 } },
    { id: 2, name: 'Juice', price: 50, img: 'https://img.freepik.com/premium-photo/closeup-mango-juice-dripping-from-juicer_198067-285454.jpg', category: 'juices', nutrition: { calories: 150, fat: 1, protein: 2, carbs: 35 } },
    { id: 3, name: 'Plain Dosa', price: 40, img: 'https://oventales.com/wp-content/uploads/2017/05/Plain-Dosa002.jpg', category: 'annapurna', nutrition: { calories: 200, fat: 8, protein: 4, carbs: 30 } },
    { id: 4, name: 'Chapati', price: 50, img: 'https://media.istockphoto.com/id/526846282/photo/traditional-indian-roti-ready-to-serve.jpg?s=612x612&w=0&k=20&c=o3yyyZ4yjfwsgcZf1JIu0rice8cB2nLflh6EgF6c6pk=', category: 'annapurna', nutrition: { calories: 150, fat: 4, protein: 5, carbs: 30 } },
    { id: 5, name: 'Manchurya', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.tXeX-3DTKJ2qatxZCACLbQHaE8&pid=Api&P=0&h=180', category: 'fastfood', nutrition: { calories: 350, fat: 18, protein: 7, carbs: 40 } },
    { id: 7, name: 'Manchurya Noodles', price: 70, img: 'https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg', category: 'fastfood', nutrition: { calories: 400, fat: 20, protein: 8, carbs: 50 } },
    { id: 8, name: 'Dry Maggi', price: 50, img: 'https://i.ytimg.com/vi/gFJpjvDT3s4/maxresdefault.jpg', category: 'maggies', nutrition: { calories: 300, fat: 15, protein: 6, carbs: 40 } },
    { id: 9, name: 'Soupy Maggi', price: 55, img: 'https://tse1.mm.bing.net/th?id=OIP.Sw6agpuS6dU4nhQD6wjVcQHaEK&pid=Api&P=0&h=180', category: 'maggies', nutrition: { calories: 320, fat: 16, protein: 7, carbs: 42 } },
    { id: 10, name: 'Peri-Peri Fries', price: 50, img: 'https://tse3.mm.bing.net/th?id=OIP.7I78DZ3TcPF2E0BPUREqCgHaH4&pid=Api&P=0&h=180', category: 'fries', nutrition: { calories: 250, fat: 15, protein: 3, carbs: 30 } },
    { id: 11, name: 'Paneer Frankie', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.VzrRoF2FmfsofGYWahJQQAHaEK&pid=Api&P=0&h=180', category: 'frankies', nutrition: { calories: 350, fat: 18, protein: 15, carbs: 35 } },
    { id: 12, name: 'Manchury Frankie', price: 60, img: 'https://i.ytimg.com/vi/V1cGyZUu8lM/hqdefault.jpg', category: 'frankies', nutrition: { calories: 380, fat: 20, protein: 14, carbs: 45 } },
    { id: 13, name: 'Paneer Schezwan', price: 65, img: 'https://i.ytimg.com/vi/9UlRvBhI398/maxresdefault.jpg', category: 'frankies', nutrition: { calories: 370, fat: 18, protein: 16, carbs: 40 } },
    { id: 14, name: 'Egg Maggi', price: 55, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7x0Dn2SCKs2aJ4brEGgb4oabViOGkeE5GKzYkABoGCRmclgla9HlQM0F1RhplUfAZyY&usqp=CAU', category: 'maggies', nutrition: { calories: 330, fat: 18, protein: 14, carbs: 40 } },
    { id: 15, name: 'Masala Dosa', price: 45, img: 'https://media.istockphoto.com/photos/south-indian-breakfast-dosa-in-golden-brown-color-picture-id177266405?k=6&m=177266405&s=612x612&w=0&h=xjxOoDLbocEYTxSh_FIlnQR4bDQ89egLhaJN0UWkr6s=', category: 'annapurna', nutrition: { calories: 250, fat: 10, protein: 6, carbs: 35 } },
    { id: 16, name: 'Onion Dosa', price: 45, img: 'https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid', category: 'annapurna', nutrition: { calories: 260, fat: 11, protein: 5, carbs: 38 } }
];

function showNutritionInfo(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        alert(`Nutritional Information for ${item.name}:\nCalories: ${item.nutrition.calories} kcal\nFat: ${item.nutrition.fat}g\nProtein: ${item.nutrition.protein}g\nCarbs: ${item.nutrition.carbs}g`);
    }
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const toggleButton = document.getElementById('chatbot-toggle');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        toggleButton.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        toggleButton.style.display = 'block';
    }
}

function sendQuery() {
    const query = document.getElementById('chatbot-query').value.trim();
    const messages = document.getElementById('chatbot-messages');
    if (query) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${query}`;
        userMessage.style.textAlign = 'right';
        messages.appendChild(userMessage);
        document.getElementById('chatbot-query').value = '';

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = `Bot: ${getResponse(query)}`;
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    }
}

function getResponse(query) {
    query = query.toLowerCase();
    
    const responses = {
        'menu': 'You can browse the menu by scrolling up or search for your favorite dish in the search bar.',
        'order': 'Click "Order Now" to place an order for your selected item.',
        'payment': 'We accept payments through UPI. After selecting your items, proceed to checkout.',
        'cart': 'Your cart contains the items you have selected. You can add or remove items from here.',
        'empty cart': 'Your cart is empty. Please add some items to your cart before placing an order.',
        'fries': 'We serve delicious fries, including Peri-Peri Fries. Find them under the "Fries" category.',
        'dosa': 'We have Plain Dosa, Masala Dosa, and Onion Dosa under the "Annapurna" category.',
        'noodles': 'Manchurian Noodles and Dry Maggi are available in the "Fastfood" and "Maggies" categories.',
        'juice': 'We offer fresh juices such as Mango Juice under the "Juices" category.',
        'order status': 'You can track your order after it is placed. Once dispatched, you will receive a notification.',
        'how to order': 'To place an order, select items from the menu, click "Order Now" and proceed to checkout.',
        'delivery time': 'Delivery times depend on your location, but we strive to deliver as fast as possible.',
        'location': 'Our service is available within the campus. Please enter your address during checkout.',
        'contact us': 'You can contact us via email at support@canteen.com or call 123-456-7890.',
        'special offers': 'Check our website regularly for exciting offers and discounts on your favorite meals.',
        'spicy food': 'If you prefer spicy dishes, try our Manchurian or Peri-Peri Fries.',
        'vegetarian options': 'We have a wide variety of vegetarian dishes including Paneer Frankie, Veg Fried Rice, and Dosa.',
        'non-veg options': 'We currently do not offer non-vegetarian options on our menu.',
        'popular dishes': 'Our most popular dishes include Veg Fried Rice, Manchurian, and Paneer Frankie.',
        'allergic food': 'If you have food allergies, please contact us for more details on ingredient information.',
        'feedback': 'We value your feedback! Please share your experience with us to help improve our services.',
        'rating': 'You can rate your experience after placing an order. Your feedback helps us serve you better.',
        'food delivery': 'Food delivery is available for orders placed through the website or app.',
        'cancel order': 'To cancel an order, please contact customer support as soon as possible.',
        'menu categories': 'Our menu is divided into categories such as Fastfood, Juices, Annapurna, Fries, and more.',
        'order help': 'For help with placing an order, feel free to reach out to our customer support.',
        'opening hours': 'We are open from 8 AM to 10 PM every day.',
        'discounts': 'Discounts are available for first-time customers and bulk orders.',
        'payment failure': 'If you face a payment failure, please try again or contact customer support.',
        'how to use the search bar': 'Use the search bar to find specific dishes or categories from the menu.',
        'cancellation policy': 'Orders can be canceled within 15 minutes of placing them.',
        'track order': 'You can track your order by logging into your account and going to the "My Orders" section.',
        'order confirmation': 'You will receive an order confirmation with your unique ID once your payment is successful.',
        'privacy policy': 'Your personal details are kept safe and secure as per our privacy policy.',
        'terms and conditions': 'Please read our terms and conditions before using our services.',
        'user account': 'You can create a user account to save your order history and preferences.',
        'forgot password': 'Click on "Forgot Password" at the login page to reset your password.',
        'new user': 'Welcome! Create an account to enjoy a seamless food ordering experience.',
        'repeat order': 'You can repeat previous orders from your order history section.',
        'delivery status': 'Check the delivery status in your account after placing the order.',
        'minimum order': 'The minimum order value is ₹100. Please add more items if the total is less.',
        'order amount': 'The total order amount will be shown during the checkout process.',
        'discount code': 'Apply discount codes at checkout to avail special offers and discounts.',
        'order review': 'After your order is delivered, you can leave a review based on your experience.',
        'help with cart': 'To add or remove items, visit your cart and make the necessary changes.',
        'change address': 'You can change your delivery address at checkout before confirming the order.',
        'add to cart': 'Click "Add to Cart" to add items to your cart and proceed to checkout.',
        'select payment method': 'Choose UPI as your payment method at the checkout page.',
        'apply coupon': 'Apply your coupon code during checkout to get discounts on your order.',
        'how to place order': 'Select your items, add them to the cart, and click "Place Order" to complete the checkout process.',
        'order not received': 'If you haven’t received your order yet, please contact customer support.',
        'restaurant location': 'We are located on the campus premises for easy access.',
        'can i change my order': 'Once an order is placed, it cannot be changed, but you can contact customer support to help.',
        'how long does it take to cook': 'Cooking times vary depending on the dish. On average, it takes 15-20 minutes.',
        'fastest dish': 'Our fast food items, such as Manchurian Noodles, are the quickest to prepare.',
        'sides available': 'We offer sides like fries, juices, and different varieties of bread.',
        'full menu': 'You can view the full menu by clicking on the "Menu" tab at the top.',
        'can i order for someone else': 'Yes, you can order food for someone else by entering their delivery address during checkout.'
    };
    
    return responses[query] || 'Sorry, I didn’t understand that. Can you ask differently?';
}


function rateItem(itemId) {
    selectedItem = menuItems.find(item => item.id === itemId);
    if (selectedItem) {
        document.getElementById('ratingModal').style.display = 'flex';
    }
}

function closeRatingModal() {
    document.getElementById('ratingModal').style.display = 'none';
}

function submitFeedback() {
    const rating = document.getElementById('ratingStars').value;
    const feedback = document.getElementById('feedback').value;

    if (selectedItem) {
        alert(`Thank you for rating ${selectedItem.name}!\nRating: ${rating}\nFeedback: ${feedback}`);
        selectedItem = null;
        closeRatingModal();
    }
}
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

        menuItem.innerHTML = 
            `<img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="nutrition-btn" onclick="showNutritionInfo(${item.id})">Nutrition Info</button>
            <div class="buttons">
                <button class="order-btn" onclick="orderItem(${item.id})">Order Now</button>
                <button class="cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>`;

        menuItemsContainer.appendChild(menuItem);
    });
    
  
    }
document.addEventListener('DOMContentLoaded', () => {
    repeater(menuItems);
});
    
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
