let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PALOMITAS',
        image: '1.png',
        price: 6+","+0+0+" €"
    },
    {
        id: 2,
        name: 'PALOMITAS CON REFRESCO',
        image: '2.png',
        price: 9+","+0+0+" €"
    },
    {
        id: 3,
        name: 'CHUCHES',
        image: '3.png',
        price: 3+","+5+0+" €"
    },
    {
        id: 4,
        name: 'REFRESCOS',
        image: '4.png',
        price: 4+","+0+0+" €"
    },
    {
        id: 5,
        name: 'PIZZA',
        image: '5.png',
        price: 7+","+5+0+" €"
    },
    {
        id: 6,
        name: 'PIZZA CON REFRESCO',
        image: '6.png',
        price: 12+","+0+0+" €"
    },
    {
        id: 7,
        name: 'HELADOS',
        image: '7.png',
        price: 10+","+0+0+" €"
    },
    {
        id: 8,
        name: 'MENU INFANTIL',
        image: '8.png',
        price: 12+","+0+0+" €"
    },
    {
        id: 9,
        name: 'MENU FAMILIAR',
        image: '9.png',
        price: 17+","+5+0+" €"
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button class="botoncito" onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}