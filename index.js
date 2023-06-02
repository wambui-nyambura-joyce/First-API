// let button = document.getElementById('button')
// button.addEventListener('click',function(){
//     // button.innerHTML = 'Clicked!!'
//     button.style.backgroundColor = '#F0E032'
//     button.style.padding = '10px'
//     button.style.borderRadius = '5px'
//     button.style.border= 'none'
// })

// // const getProducts=()=>{
// //     return fetch('https://dummyjson.com/products')
// //     .then(response=>response.json())
// //     .then(response=>response)
// //     .catch(error=>error)

// // }
// // getProducts();

// // const displayProducts = async()=>{
// //     const products = await getProducts();
// //     console.log(products);
// //     products.products.map(item=>{
// //         let div = document.createElement('div');
// //         let
// //     })
// // }

// const productContainer = document.getElementById('product-container');

// const getProducts = () => {
//     return fetch('https://dummyjson.com/products?limit=8')
//       .then(response => response.json())
//       .then(response => response)
//       .catch(error => error);
//   };
  
//   getProducts();
  
//   const displayProducts = async () => {
//     const products = await getProducts();
//     // const productContainer = document.getElementById('product-container'); // Assuming you have a container element with the id 'product-container'
//     productContainer.innerHTML = ''
  
//     products.products.forEach(item => {
//       let div = document.createElement('div');
//       div.classList.add('product');
  
//       let image = document.createElement('img');
//       image.src = item.thumbnail; // Assuming the API response contains the image URL
  
//       let name = document.createElement('p');
//       name.innerText = item.name; // Assuming the API response contains the product name
  
//       let price = document.createElement('p');
//       price.innerText = `$${item.price}`; // Assuming the API response contains the product price
  
//       let addToCartBtn = document.createElement('button');
//       addToCartBtn.innerText = 'Add to Cart';
//       addToCartBtn.addEventListener('click', () => {
//         // Add your logic for adding the product to the cart here
//         console.log(`Product ${item.name} added to cart`);
//       });
  
//       div.appendChild(image);
//       div.appendChild(name);
//       div.appendChild(price);
//       div.appendChild(addToCartBtn);

  
//       productContainer.appendChild(div);
//     });
//   };
  
//   displayProducts();

const productContainer = document.getElementById('product-container');

let cart = {
  items: [],
  addItem: function(product) {
    this.items.push(product);
    console.log(`Product ${product.name} added to cart`);
    console.log('Current cart:', this.items);
  },
};

const getProducts = () => {
  return fetch('https://dummyjson.com/products?limit=8')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

const displayProducts = async () => {
  const products = await getProducts();
  productContainer.innerHTML = '';

  products.products.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('product');

    let image = document.createElement('img');
    image.src = item.thumbnail;

    let name = document.createElement('p');
    name.innerText = item.name;

    let price = document.createElement('p');
    price.innerText = `$${item.price}`;

    let addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => {
      cart.addItem(item);
    });

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(addToCartBtn);

    productContainer.appendChild(div);
  });
};

displayProducts();