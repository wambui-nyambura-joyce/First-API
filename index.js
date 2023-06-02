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