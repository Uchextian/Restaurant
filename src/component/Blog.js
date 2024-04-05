import React from "react";
import { blog } from "../Data";


export const Blog = () => {
    return(
        <section className="blog" id="blog" >
        <h1 className="heading">
            Our <span> Blog</span>
        </h1>
        <div className="box-container">
            {
                blog.map((item,index)=>(
                    <div className="box">
                        <div className="image">
                            <img src={item.img} alt=""/>
                        </div>  
                        <div className="content">
                            <a href="#" className="title">
                                Tasty And Refreshing
                            </a>
                            
                            <span>By Admin/09 Jan, 2024</span>
                            <p>
                                X4 resturant is the best resturant in african 
                                X4 resturant is the best resturant in african
                                X4 resturant is the best resturant in african
                            </p>
                            <a href="#" className="btn">Read More</a>
                        </div>      
                    </div>
                ))
            }
        </div>
    </section>
    )
}