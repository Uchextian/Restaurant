import React from "react";


export const Contact = () =>{
    return(
            <section className="contact" id="contact">
            <h1 className="heading">
                <span>Contact</span> Us
            </h1>
                <div className="row">
                    <iframe className="map">hhhh</iframe>
                    <form>
                        <h3>Get IN TOUCH</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-phone"></span>
                            <input type="number" placeholder="Number"/>
                        </div>
                        <input type="submit" value="Contact now" className="btn"/>
                    </form>
                </div>
            </section>
    )
}