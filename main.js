// INACTIVE DESKTOP MENU
const DesktopMenu = document.querySelector('.desktop-menu');

document.querySelector('.navbar-email').addEventListener("click", function() {
    DesktopMenu.classList.toggle('inactive-desktop__menu');
    
    const isProductDetailClosed= ProdectDetail.classList.contains('inactive-movil__menu');

    if (!isProductDetailClosed){
        ProdectDetail.classList.add('inactive-movil__menu');
    }
})
// /INACTIVE DESKTOP MENU












// INACTIVE MOVIL MENU
const MovilMenu = document.querySelector('.mobile-menu');

document.querySelector('.burger-movil__menu').addEventListener("click",function() {
    MovilMenu.classList.toggle('inactive-movil__menu');
    const isProductDEtailClosed= ProdectDetail.classList.toggle('inactive-movil__menu');

    if (!isProductDEtailClosed){
        ProdectDetail.classList.add('inactive-movil__men');
    }
})

// /INACTIVE MOVIL MENU












//INACTIVE ASIDE PRODUCT DETAIL
const ProdectDetail=document.querySelector('.product-detail');

document.querySelector('.navbar-shopping-cart').addEventListener("click", function(){
    const isMobilMenuClosed= MovilMenu.classList.contains('inactive-movil__menu');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive-desktop__menu');
    


    if (!isMobilMenuClosed){
         MovilMenu.classList.add('inactive-movil__menu');    
    }
    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive-desktop__menu');
    }
    

    ProdectDetail.classList.toggle('inactive-movil__menu');
    
})
// /INACTIVE ASIDE PRODUCT DETAIL





// CARDS
const productList=[];

productList.push({
    name: 'Bike',
    price: '120',
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: '220',
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: '500',
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



const cardsConteiner=document.querySelector('.cards-container')

function renderProducts(ArrayProducts){
    for (product of ArrayProducts){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
    
        // productList= {name,price,img} -> product.img
        const ProductImg=document.createElement('img');
        ProductImg.setAttribute('src',product.Image);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
    
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$' + product.price;
    
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
    
        const productInfoFigure=document.createElement('Figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCart);
      
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
     
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
     
    
        cardsConteiner.appendChild(productCard);
    // NOTARIO MAQUETACION CARDS...
    }
};

renderProducts(productList);
// / CARDS


