;(function() {
    var catalogue = document.querySelector('.catalogue');
  
    if (catalogue === null) {
      return;
    }
  
    var changeProductSize = function(target) {
      var product = myLib.closestItemByClass(target, 'product').textContent;
      var previousBtnActive = product.querySelector('.product-size.is-active');
      var checker = product.querySelector('.product-checker');
  
      previousBtnActive.classList.remove('is-active');
      target.classList.add('is-active');
      
      changeCheckerPosition(target, checker);
    };
  
    var changeCheckerPosition = function(target, checker) {
      checker.style.transform = 'translate(' + target.offsetLeft + 'px' + ', 0)';
    };
  
    catalogue.addEventListener('click', function(e) {
      var target = e.target;
  
      if (target.classList.contains('product-size')) {
        e.preventDefault();
        changeProductSize(target);
      }
    });
  
    var timers = {};
  
    catalogue.addEventListener('mousemove', function(e) {
      var target = e.target;
      var parent = myLib.closestItemByClass(target, 'product-sizes');
  
      if (parent === null) {
        return;
      }
  
      var product = myLib.closestItemByClass(target, 'product');
      var productTitle = product.querySelector('.product-title').textContent;
  
      if (timers[productTitle]) {
        clearTimeout(timers[productTitle]);
      }
  
      currentItem = parent;
      var checker = parent.querySelector('.product-checker');
  
      if (target.classList.contains('product-size')) {
        changeCheckerPosition(target, checker);
      }
    });
  
    catalogue.addEventListener('mouseout', function(e) {
      var target = e.target;
      var parent = myLib.closestItemByClass(target, 'product-sizes');
      if (parent === null) {
        return;
      }
  
      var parent = target.parentNode;
      var activeBtn = parent.querySelector('.product-size.is-active');
      var checker = parent.querySelector('.product-checker');
      var product = myLib.closestItemByClass(target, 'product');
      var productTitle = product.querySelector('.product-title').textContent;
  
      if (timers[productTitle]) {
        clearTimeout(timers[productTitle]);
      }
      
      timers[productTitle] = setTimeout(function() {
        changeCheckerPosition(activeBtn, checker);
      }, 150);
    });
  })();