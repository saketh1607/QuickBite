
const menuItems = [
    { id: 1, name: 'Veg Fried Rice', price: 60, img: 'https://tse1.mm.bing.net/th?id=OIP.4wrRVc6j3A9vtrOafulXigHaFM&pid=Api&P=0&h=180', category: 'fastfood' },
    { id: 2, name: 'Juice', price: 50, img: 'https://via.placeholder.com/150', category: 'juices' },
    { id: 3, name: 'Thali', price: 100, img: 'https://via.placeholder.com/150', category: 'annapurna' },
    { id: 4, name: 'Burger', price: 120, img: 'https://via.placeholder.com/150', category: 'fastfood' },
    { id: 5, name: 'Manchurya', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.tXeX-3DTKJ2qatxZCACLbQHaE8&pid=Api&P=0&h=180', category: 'fastfood' },
    { id: 7, name: 'Manchurya Noodles', price: 70, img: 'https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg', category: 'fastfood' },
    { id: 8, name: 'Dry Maggi', price: 50, img: 'https://i.ytimg.com/vi/gFJpjvDT3s4/maxresdefault.jpg', category: 'Maggies' },
    { id: 9, name: 'Soupy Maggi', price: 55, img: 'https://tse1.mm.bing.net/th?id=OIP.Sw6agpuS6dU4nhQD6wjVcQHaEK&pid=Api&P=0&h=180', category: 'Maggies' },
    { id: 10, name: 'Peri-Peri Fries', price: 50, img: 'https://www.themonktravel.com/wp-content/uploads/2023/04/peri-f.jpg', category: 'fries' },
    { id: 10, name: 'Paneer Frankie', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.VzrRoF2FmfsofGYWahJQQAHaEK&pid=Api&P=0&h=180', category: 'frankies' },
    { id: 11, name: 'Manchury Frankie', price: 60, img: 'https://i.ytimg.com/vi/V1cGyZUu8lM/hqdefault.jpg', category: 'frankies' },



];

function repeater(items) {
    const menuItemsContainer = document.getElementById('menuItems');
    menuItemsContainer.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button onclick="orderItem(${item.id})">Order</button>
        `;

        menuItemsContainer.appendChild(menuItem);
    });
}


repeater(menuItems);


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
    const uniqueId = `ORD${Math.floor(Math.random() * 100000)}`;
    alert(`You have ordered ${item.name}. Your order ID is ${uniqueId}.`);
}
