import React from "react";
import { review } from "../Data";
import quoteImg from '../assets/images/quote-img.png' 


export const Review = () =>{
    return (
        <section className="review" id="review">
            <h1 className="heading">
                Customers <span>Review</span>
            </h1>
            <div className="box-container">
                {
                    review.map((item,index)=>(
                        <div className="box">
                            <img src={quoteImg} alt="" className="quote"/>
                                <p>
                                    ydufewbdvkjkjvbcxbvknvkxn kxnkxnkx
                                    jhcbjsbcx nkvx jx jzj, nkk
                                    jhvsjsfjdbskvdsvkkvdkvnxk
                                    hmbcjhvshjbxjcbxjcxkxkmbck
                                </p>
                                <img src={item.img} alt="" className="user"/>
                                <h3>Xtian</h3>
                                <div className="stars">
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star-half-alt"/>
                                </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}