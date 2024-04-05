import React from "react";
import AboutImg from '../assets/images/about-img.png' 

export const About = () => {
    return(
        <div>
            <section className="about" id="about">
                <h1 className="heading">
                <span>about</span> us
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt=""></img>
                    </div>
                    <div className="content">
                        <h3>
                            What Makes Our Food Special?
                        </h3>
                        <p>
                        X4 resturant is the best resturant in african 
                        X4 resturant is the best resturant in african
                        X4 resturant is the best resturant in african
                        </p>
                        <p>
                        X4 resturant is the best resturant in african 
                        X4 resturant is the best resturant in african
                        X4 resturant is the best resturant in african
                        </p>
                        <a className="btn" href="#">Learn More</a>
                    </div>
                </div>
            </section>
        </div>
    )
};