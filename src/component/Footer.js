import React from "react";


export const Footer = () =>{
    return(
        <section className="footer" >
            <div className="share">
                <a href="#" className="fas fa-facebook-f"></a>
                <a href="#" className="fas fa-twitter"></a>
                <a href="#" className="fas fa-instagram"></a>
                <a href="#" className="fas fa-linkedin"></a>
            </div>
            <div className="links">
            <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <a href='#products'>Products</a>
                <a href='#review'>Review</a>
                <a href='#contact'>Contact</a>
                <a href='#blog'>Blog</a>
            </div>
            <div className="credit">
                Develope by <span>X4</span> 2024
            </div>
        </section>
    )
}