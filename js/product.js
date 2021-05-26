;(function() {
    var catalogue = document.querySelector('.catalogue');
  
    if (catalogue === null) {
      return;
    }
  
    var changeProductSize = function(target) {
      var product = myLib.closestItemByClass(target, 'product');
      var previousBtnActive = product.querySelector('.product-size.is-active');
      
      previousBtnActive.classList.remove('is-active');
      target.classList.add('is-active');
    };
  
    var changeProductOrderInfo = function(target) {
      var product = myLib.closestItemByClass(target, 'product');
      var order = document.querySelector('.popup-order');
  
      var productTitle = product.querySelector('.product-title').textContent;
      var productSize = product.querySelector('.product-size.is-active').textContent;
      var productPrice = product.querySelector('.product-price-value').textContent;
      var productImgSrc = product.querySelector('.product-img').getAttribute('src');
  
      order.querySelector('.order-info-title').setAttribute('value', productTitle);
      order.querySelector('.order-info-price').setAttribute('value', productPrice);
      order.querySelector('.order-info-size').setAttribute('value', productSize);
  
      order.querySelector('.order-img').setAttribute('src', productImgSrc);
      order.querySelector('.order-product-title').textContent = productTitle;
      order.querySelector('.order-product-price').textContent = productPrice;
      order.querySelector('.order-size').textContent = productSize;
    };
  
    catalogue.addEventListener('click', function(e) {
      var target = e.target;
      console.log(target)
  
      if (target.classList.contains('product-size')) {
        e.preventDefault();
        changeProductSize(target);
      }
  
      if (target.classList.contains('product-btn')) {
        e.preventDefault();
        changeProductOrderInfo(target);
      }
    });
  })();