import React from 'react';

const Contacts = () => {
    return (
        <>
            <section className="contact" id="contact">

                <h1 className="heading"><span>contact</span> us </h1>

                <div className="row">

                    <form action="">
                        <input type="text" placeholder="name" className="box"/>
                            <input type="email" placeholder="email" className="box"/>
                                <input type="number" placeholder="phone" className="box"/>
                                    <textarea name="" className="box" placeholder="message" id="" cols="30"
                                              rows="10"/>
                                    <input type="submit" value="send message" className="btn"/>
                    </form>

                    <div className="contact-info">
                        <h3>do you have any questions?</h3>
                        <p className="grapgh">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nobis
                            aperiam in numquam blanditiis delectus, repudiandae aliquam voluptate vel fuga.</p>
                        <div className="icons">
                            <i className="fas fa-map"/>
                            <div className="info">
                                <p>mumbai, india - 400104</p>
                            </div>
                        </div>
                        <div className="icons">
                            <i className="fas fa-envelope"/>
                            <div className="info">
                                <p>shaikhanas@gmail.com</p>
                                <p>anasbhai@gmail.com</p>
                            </div>
                        </div>
                        <div className="icons">
                            <i className="fas fa-phone"/>
                            <div className="info">
                                <p>+123-456-7890</p>
                                <p>+111-222-3333</p>
                            </div>
                        </div>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"/>
                            <a href="#" className="fab fa-twitter"/>
                            <a href="#" className="fab fa-instagram"/>
                            <a href="#" className="fab fa-linkedin"/>
                        </div>
                    </div>

                </div>

            </section>
            </>
    );
};

export default Contacts;
