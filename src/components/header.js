import React,{useState,useEffect} from 'react';
import { Link} from "react-scroll";
import _ from "lodash"

const Header = () => {


   const [isActiveMenu,setIsActiveMenu] = useState(false);
    const [isActiveHeader,setIsActiveHeader] = useState(false);

    const menuClassName = isActiveMenu?'fa-times' : '';
    const headerClassName = isActiveMenu?'active' : '';

   const onClick =   () => {
       setIsActiveMenu(!isActiveMenu);
       setIsActiveHeader(!isActiveHeader)
    };


    useEffect(() => {
        const throttledCount = _.throttle(() => {
            if (window.innerWidth <= 1200) {
                setIsActiveHeader(false);
                setIsActiveMenu(false);
            }
        }, 100);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);
    });

    return (
       <>
           <div onClick={onClick} id="menu-btn" className={`fas fa-bars ${menuClassName}`}/>

           <header className={`header  ${headerClassName}`}>

               <a onClick={onClick} href="#" className="logo">NIKE</a>

               <nav className="navbar">
                   <Link to="banner">banner</Link>
                   <Link to="products">products</Link>
                   <Link to="reviews">reviews</Link>
                   <Link to="contact">contact</Link>
               </nav>

               <div className="share">
                   <a href="#" className="fab fa-facebook-f"/>
                   <a href="#" className="fab fa-twitter"/>
                   <a href="#" className="fab fa-instagram"/>
                   <a href="#" className="fab fa-linkedin"/>
               </div>

               <p className="credit"> &copy; copyright @ 2022 by mr. web designer </p>

           </header>
           </>
    );
};

export default Header;
