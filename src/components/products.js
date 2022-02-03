import React,{useState} from 'react';
import SimpleCarousel from "./simpleCarousel";
import ProductsItem from "./productsItem";
import Preview from "./preview";
import shoesList from "../mocks/shoesList";

const Products = () => {

    const [activePreview,setActivePreview] = useState(null);
    const [currentActiveItem,setCurrentActiveItem] = useState(0);

    return (
       <>
           <section className="products" id="products">
               <h1 className="heading"> our <span>products</span></h1>
               <div className="swiper products-slider">
                   <div  className="swiper-wrapper">
<SimpleCarousel
    show={3}
    infiniteLoop
    setCurrentActiveItem={setCurrentActiveItem}
>
    {shoesList.map((shoesItem,index) => {
        return (
            <ProductsItem
                key={index}
                index={index}
                currentActiveItem={currentActiveItem}
                name={shoesItem.name}
                img={shoesItem.img}
                setActivePreview={setActivePreview}/>
        )})}
</SimpleCarousel>
                   </div>
               </div>
               {activePreview !== null && (
                   <Preview
                   img={shoesList[activePreview].img}
                   name={shoesList[activePreview].name}
                   setActivePreview={setActivePreview}
                   description={shoesList[activePreview].description}
                   />)}
           </section>
           </>
    );
};

export default Products;
