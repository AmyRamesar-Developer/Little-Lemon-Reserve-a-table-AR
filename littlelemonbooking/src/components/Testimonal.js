import React from "react";
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';


const Testimonal = ({rating, name, img, comment}) => {
    const stars = Array(5).fill(false).map((_, i) => i < rating);

    return(
        <article className="testimonal-card">
            <img src={img} alt="User" className="reviewerImg"></img>
            <p className="reviewer">{name}</p>
            <div className="stars">
                {stars.map((star) => (
                    <i className={`fa ${star ? 'fa-star' : 'fa-star-o'}`}></i>
                ))}
            </div>
            <p className="review">{comment}</p>
        </article>
    )
}

export default Testimonal;