;(function(){
    var catalogueSection=document.querySelector('.section-catalogue');

    var closestItemByClass=function(item, className){
        var node = item;
        
        while(node) {
          if (node.classList.contains(className)){
            return node;
          }
          node = node.parentElement;
        }
        return null;
      };

    if (catalogueSection===null){
        return;
    }

    var removeChildren = function(item){
        while(item.firstChild){
            item.removeChild(item.firstChild);
        }
    };

    var updateChildren = function(item, children){
        console.log(children);
        removeChildren(item);
        for(var i=0; i<children.length; i+=1){
            item.appendChild(children[i]);
        }
    };

    var catalogue=catalogueSection.querySelector('.catalogue');
    var catalogueNav=catalogueSection.querySelector('.catalogue-nav');
    var catalogueItems=catalogueSection.querySelectorAll('.catalogue-item');

    catalogueNav.addEventListener('click', function(e){
        var target=e.target;
        var item=closestItemByClass(target, 'catalogue-nav-btn');

        if (item===null || item.classList.contains('is-active')){
            return;
        }

        e.preventDefault();
        var filterValue=item.getAttribute('data-filter');
        var previousBtnActive=catalogueNav.querySelector('.catalogue-nav-btn.is-active');

        previousBtnActive.classList.remove('is-active');
        item.classList.add('is-active');

        if (filterValue==='all'){
            updateChildren(catalogue, catalogueItems);
            return;
        }

        var filteredItems=[];
        for (var i=0; i<catalogueItems.length; i+=1){
            var current=catalogueItems[i];
            if (current.getAttribute('data-category')===filterValue){
                filteredItems.push(current);
            }
        }
        updateChildren(catalogue, filteredItems);
    });
})();