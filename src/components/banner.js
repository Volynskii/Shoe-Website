import React from 'react';
import bannerImg from '../images/banner-product.png'

const Banner = () => {
    return (
       <>
           <section className="banner" id="banner">

               <div className="content">
                   <span>upto 50% off</span>
                   <h3>nike airmax shoes</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim quas doloribus sed vero eum
                       corporis iste atque rem similique.</p>
                   <a href="#" className="btn">shop now</a>
               </div>

               <div className="image">
                   <img src={bannerImg} alt=""/>
               </div>

           </section>
           </>
    );
};

export default Banner;
