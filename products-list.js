document.addEventListener('DOMContentLoaded', function() {
    const productListElement = document.getElementById('productList');
  
    // Generate mocked product data
    const products = generateMockedProducts(20);
  
    // Generate product cards
    products.forEach(function(product) {
      const card = createProductCard(product);
      productListElement.appendChild(card);
    });
  
    function generateMockedProducts(quantity) {
      const products = [];
      const priceRange = { min: 14900, max: 120000 };
  
      for (let i = 0; i < quantity; i++) {
        const name = generateRandomName();
        const id = generateSequentialID(i + 1);
        const price = generateRandomPrice(priceRange.min, priceRange.max);
        const photo = `prodPhotos/stable-diffusion-xl (${i + 1}).jpeg`;
  
        products.push({ name, id, price, photo });
      }
  
      return products;
    }
  
    function generateRandomName() {
      const fictionalVillains = ['Scorch', 'Nyx', 'Draven', 'Vexis', 'Maelstrom'];
      const fictionalHeroes = ['Valkyr', 'Aether', 'Solstice', 'Nimbus', 'Spectra'];
      const names = fictionalVillains.concat(fictionalHeroes);
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    }
    
  
    function generateSequentialID(index) {
      return `AF${index.toString().padStart(3, '0')}`;
    }
  
    function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'product-card';
  
      const image = document.createElement('img');
      image.src = product.photo;
      image.alt = product.name;
      card.appendChild(image);
  
      const title = document.createElement('h3');
      title.textContent = product.name;
      card.appendChild(title);
  
      const id = document.createElement('p');
      id.textContent = `ID: ${product.id}`;
      card.appendChild(id);
  
      const price = document.createElement('p');
      price.textContent = `Price: R$ ${formatPrice(product.price)}`;
      card.appendChild(price);
  
      const unitsLabel = document.createElement('label');
      unitsLabel.textContent = 'Units:';
      const unitsInput = document.createElement('input');
      unitsInput.type = 'number';
      unitsInput.min = '1';
      unitsInput.max = '5';
      unitsInput.value = '1';
      unitsLabel.appendChild(unitsInput);
      card.appendChild(unitsLabel);
  
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', function() {
        const units = parseInt(unitsInput.value);
        addToCart(product, units);
      });
      card.appendChild(addButton);
  
      return card;
    }
  
    function addToCart(product, units) {
      // Add logic for adding product to cart here
      // You can display a toast/confirmation message as well
      const confirmationMessage = `Added ${units} unit(s) of ${product.name} to cart`;
      showToast(confirmationMessage);
    }
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(function() {
        toast.remove();
      }, 3000);
    }
  
    function generateRandomPrice(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function formatPrice(price) {
      return (price / 100).toFixed(2);
    }
  });
  