import React from 'react';

const ProductsItem = ({index, currentActiveItem, name, img,setActivePreview}) => {

    return (
       <>
           <div
               className={`swiper-slide slide 
               ${index === currentActiveItem   ? 'swiper-slide-active':''}
                ${index === 0 && currentActiveItem === 6 || currentActiveItem < 0 && index === 5   
                   ? 'swiper-slide-active':''}
            `}>
               <img src={img} alt=""/>
               <h3>{name}</h3>
               <div
                    onClick={() => {
                        setActivePreview(index)}}
                   className="btn" data-product="product-1">see details</div>
           </div>
           </>
    );
};

export default ProductsItem;
