function bgImages() {
    setTimeout(() => {
        document.querySelector('.background-image').classList.remove('background-image');
       
    }, 20);
  
   
    const menuItems = [
        { id: 1, name: 'Veg Fried Rice', price: 60, img: 'https://tse1.mm.bing.net/th?id=OIP.4wrRVc6j3A9vtrOafulXigHaFM&pid=Api&P=0&h=180', category: 'fastfood' },
        { id: 2, name: 'Juice', price: 50, img: 'https://img.freepik.com/premium-photo/closeup-mango-juice-dripping-from-juicer_198067-285454.jpg', category: 'juices' },
        { id: 3, name: 'Plain Dosa', price: 40, img: 'https://oventales.com/wp-content/uploads/2017/05/Plain-Dosa002.jpg', category: 'annapurna' },
        { id: 4, name: 'Chapati', price: 50, img: 'https://media.istockphoto.com/id/526846282/photo/traditional-indian-roti-ready-to-serve.jpg?s=612x612&w=0&k=20&c=o3yyyZ4yjfwsgcZf1JIu0rice8cB2nLflh6EgF6c6pk=', category: 'annapurna' },
        { id: 5, name: 'Manchurya', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.tXeX-3DTKJ2qatxZCACLbQHaE8&pid=Api&P=0&h=180', category: 'fastfood' },
        { id: 7, name: 'Manchurya Noodles', price: 70, img: 'https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg', category: 'fastfood' },
        { id: 8, name: 'Dry Maggi', price: 50, img: 'https://i.ytimg.com/vi/gFJpjvDT3s4/maxresdefault.jpg', category: 'maggies' },
        { id: 9, name: 'Soupy Maggi', price: 55, img: 'https://tse1.mm.bing.net/th?id=OIP.Sw6agpuS6dU4nhQD6wjVcQHaEK&pid=Api&P=0&h=180', category: 'maggies' },
        { id: 10, name: 'Peri-Peri Fries', price: 50, img: 'https://www.themonktravel.com/wp-content/uploads/2023/04/peri-f.jpg', category: 'fries' },
        { id: 11, name: 'Paneer Frankie', price: 60, img: 'https://tse3.mm.bing.net/th?id=OIP.VzrRoF2FmfsofGYWahJQQAHaEK&pid=Api&P=0&h=180', category: 'frankies' },
        { id: 12, name: 'Manchury Frankie', price: 60, img: 'https://i.ytimg.com/vi/V1cGyZUu8lM/hqdefault.jpg', category: 'frankies' },
        { id: 13, name: 'Paneer Schezwan', price: 65, img: 'https://i.ytimg.com/vi/9UlRvBhI398/maxresdefault.jpg', category: 'frankies' },
        { id: 14, name: 'Egg Maggi', price: 55, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7x0Dn2SCKs2aJ4brEGgb4oabViOGkeE5GKzYkABoGCRmclgla9HlQM0F1RhplUfAZyY&usqp=CAU', category: 'maggies' },
        { id: 15, name: 'Masala Dosa', price: 45, img: 'https://media.istockphoto.com/photos/south-indian-breakfast-dosa-in-golden-brown-color-picture-id177266405?k=6&m=177266405&s=612x612&w=0&h=xjxOoDLbocEYTxSh_FIlnQR4bDQ89egLhaJN0UWkr6s=', category: 'annapurna' },
        { id: 16, name: 'Onion Dosa', price: 45, img: 'https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid', category: 'annapurna' }
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
   
}
function orderItem(itemId) {
    console.log('pressed');
    //const item = menuItems.find(item => item.id === itemId);
    const uniqueId = `ORD${Math.floor(Math.random() * 100000)}`;
    alert(`Your order ID is ${uniqueId}.`);
    console.log(uniqueId);
}
