import React from 'react';

const Preview = ({img,name,setActivePreview,description}) => {

    return (
       <>
           <section  className="products-preview-container">
               <div className="product-preview" data-target="product-1">
                   <div onClick={() =>setActivePreview(null) } className="fas fa-times"/>
                   <div className="image">
                       <img src={img} alt=""/>
                   </div>
                   <div className="content">
                       <h3>{name}</h3>
                       <p>{description}</p>
                       <div className="stars">
                           <i className="fas fa-star"/>
                           <i className="fas fa-star"/>
                           <i className="fas fa-star"/>
                           <i className="fas fa-star"/>
                           <i className="fas fa-star-half-alt"/>
                           <span>( 250 )</span>
                       </div>
                       <div className="price">$49.99</div>
                       <a href="#" className="btn">buy now</a>
                   </div>
               </div>
           </section>
           </>
    );
};

export default Preview;
