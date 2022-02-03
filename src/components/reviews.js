import React, {useState} from 'react';
import pic1 from "../images/pic-1.png";
import pic2 from "../images/pic-2.png";
import pic3 from "../images/pic-3.png";
import pic4 from "../images/pic-4.png";
import pic5 from "../images/pic-5.png";
import pic6 from "../images/pic-6.png";
import SimpleCarousel from "./simpleCarousel";


const Reviews = () => {
    const [currentActiveItem,setCurrentActiveItem] = useState(0);
    return (
       <>
           <section className="reviews" id="reviews">

               <h1 className="heading"> clients <span>reviews</span></h1>

               <div className="swiper reviews-slider">

                   <div className="swiper-wrapper">
                       <SimpleCarousel
                           show={3}
                            infiniteLoop
                             setCurrentActiveItem={setCurrentActiveItem}
                       >
                       <div className="swiper-slide slide">
                           <i className="fas fa-quote-right"/>
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                               eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                           <img src={pic1} alt=""/>
                               <h3>john deo</h3>
                       </div>

                           <div className="swiper-slide slide">
                               <i className="fas fa-quote-right"/>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                                   eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                               <img src={pic2} alt=""/>
                               <h3>john deo</h3>
                           </div>

                           <div className="swiper-slide slide">
                               <i className="fas fa-quote-right"/>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                                   eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                               <img src={pic3} alt=""/>
                               <h3>john deo</h3>
                           </div>

                           <div className="swiper-slide slide">
                               <i className="fas fa-quote-right"/>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                                   eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                               <img src={pic4} alt=""/>
                               <h3>john deo</h3>
                           </div>

                           <div className="swiper-slide slide">
                               <i className="fas fa-quote-right"/>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                                   eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                               <img src={pic5} alt=""/>
                               <h3>john deo</h3>
                           </div>

                       <div className="swiper-slide slide">
                           <i className="fas fa-quote-right"/>
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laudantium est quam
                               eveniet perferendis cum reprehenderit aperiam nesciunt soluta optio?</p>
                           <img src={pic6} alt=""/>
                               <h3>john deo</h3>
                       </div>


                       </SimpleCarousel>
                   </div>


               </div>

           </section>
           </>
    );
};

export default Reviews;
