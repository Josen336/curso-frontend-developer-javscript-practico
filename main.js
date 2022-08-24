// INACTIVE DESKTOP MENU
const DesktopMenu = document.querySelector('.desktop-menu');
const Click  = document.querySelector('.navbar-email');
document.querySelector('.navbar-email').addEventListener("click", function(e) {
    console.log({e})
    DesktopMenu.classList.toggle('inactive-desktop__menu');
    const ClasAnimation=DesktopMenu.classList.toggle("animation");
    const isShoppingClosed= shoppindCartContainer.classList.contains('inactive-movil__menu');
    const isProductDetail = productDetail.classList.contains('inactive-desktop__menu');
    const Capa=document.querySelector('#ActiveCapa');
    Capa.classList.remove('capa');
    
    if (!isShoppingClosed){
        shoppindCartContainer.classList.add('inactive-movil__menu');
    }
    if(!isProductDetail){
        productDetail.classList.add('inactive-desktop__menu'); 
        
    }

});





// /INACTIVE DESKTOP MENU




 







// INACTIVE MOVIL MENU
const MovilMenu = document.querySelector('.mobile-menu');

document.querySelector('.burger-movil__menu').addEventListener("click",function() {
    MovilMenu.classList.toggle('inactive-movil__menu');
    const isShoppingClosed= shoppindCartContainer.classList.toggle('inactive-movil__menu');
    const isProductDetail = productDetail.classList.toggle('inactive-desktop__menu');
    const Capa=document.querySelector('#ActiveCapa');
    Capa.classList.remove('capa');
    if (!isShoppingClosed){
        shoppindCartContainer.classList.add('inactive-movil__menu');
    }

    if (!isProductDetail){
        productDetail.classList.add('inactive-desktop__menu');
        
    }
})

// /INACTIVE MOVIL MENU












//INACTIVE SHOPPINGDETAILPRODUCT
const shoppindCartContainer=document.querySelector('#shoppindCartContainer');

document.querySelector('.navbar-shopping-cart').addEventListener("click", function(){
    const isMobilMenuClosed= MovilMenu.classList.contains('inactive-movil__menu');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive-desktop__menu');
    const isProductDetail = productDetail.classList.toggle('inactive-desktop__menu');
    const Capa=document.querySelector('#ActiveCapa');
    Capa.classList.remove('capa');

    if (!isMobilMenuClosed){
         MovilMenu.classList.add('inactive-movil__menu');    
    };
    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive-desktop__menu');
        DesktopMenu.classList.remove('animation')
    };

    if(!isProductDetail){
        productDetail.classList.add('inactive-desktop__menu');
       
    }
    

    shoppindCartContainer.classList.toggle('inactive-movil__menu');
    
});
// /INACTIVE ASIDE SHOPPINGDETAILPRODUCT




// ACTIVE PRODUCT DETAIL
const productDetail = document.querySelector('#productDetail');
function openProductDetailAside(){
    productDetail.classList.remove('inactive-desktop__menu');
    const isProductDEtailClosedShoppping = shoppindCartContainer.classList.contains('inactive-desktop__menu');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive-desktop__menu');
    const Capa=document.querySelector('#ActiveCapa');
    if (!isProductDEtailClosedShoppping){
        shoppindCartContainer.classList.add('inactive-movil__menu');
        DesktopMenu.classList.add('inactive-desktop__menu');
        Capa.classList.add('capa');
        document.querySelector('.product-detail-close').addEventListener("click", function(){
            productDetail.classList.add('inactive-desktop__menu');
            Capa.classList.remove('capa');
            
        });
    }
    

    
}


// INACTIVE PRODUCT DETAIL
// /INACTIVE PRODUCT DETAIL
// /ACTIVE PRODUCT DETAIL


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
        ProductImg.addEventListener('click',openProductDetailAside);

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
        productImgCart.setAttribute('src','./icons/bt_added_to_cart_estruct.png');
       
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



const ImgLigthGreen= document.querySelector('#ImgGreenLigth');
const ImgDarkGreen = document.querySelector('#ImgGreenDark');

document.querySelector('.Secondary-button').onmouseover = function(){
    ImgLigthGreen.classList.add("DisplayNone");
    ImgDarkGreen.classList.remove("DisplayNone");
};

document.querySelector('.Secondary-button').onmouseout =function(){
    ImgLigthGreen.classList.remove("DisplayNone");
    ImgDarkGreen.classList.add("DisplayNone");
}








    







// / CARDS


