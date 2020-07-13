import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "../axios";


function Rating(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const token = localStorage.getItem('usertoken');
    const tutorid = localStorage.getItem('userid');
    const loggedinuser = localStorage.getItem('loggedinuser');
    console.log("tutorid: " + tutorid);
    console.log("loggedinuser: " + loggedinuser);
    console.log("rating: " + rating);

    function handleRate() {
        if (loggedinuser === tutorid) {
            alert("You cannot rate yourself!")
            window.location.reload();
        }
        else {
            axios().post('/user/giveRating', {
                rate: rating,
                tutorID: tutorid,
                headers:{
                    Authorization: token
                }
            })
            .then( res => {
                console.log(res);
                alert("You have successfully rated this tutor!");
                window.location.reload();
            })
            .catch (err => {
                console.log(err);
            })
        }
    }

    function handleUpdateRate() {
    
        axios().post('/user/updateRating', {
            rateID: localStorage.getItem('yourRateID'),
            tutorID: tutorid,
            newRate: rating,
        })
        .then( res => {
            console.log(res);
            alert("You have successfully updated this tutor!");
            window.location.reload();
        })
        .catch (err => {
            console.log(err);
        })
    }

    return (<div className="rating-sec">
        <h5 className="tutee-ratings">Tutee Ratings</h5>
        <hr/>
        <h5 className="ave-ratings">{props.aveRate === undefined ? 0 : props.aveRate}</h5>
        <h6 className="text-muted based-on">based on ({props.rateList.length === 0 ? 0 : props.rateList.length}) rating(s).</h6>
        {loggedinuser !== tutorid ? 
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;
    
                return (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={50} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
            
            {props.rate === 0 ? <div>
            <button onClick={handleRate} type="submit" className="btn btn-info rate-btn">Rate this tutor</button>
            </div>
            :
            <div>
                <p>You have rated <strong>{props.rate} stars</strong> for this tutor.</p>
                <button onClick={handleUpdateRate} type="submit" className="btn btn-info btn-sm updaterate-btn">Update your rating</button>
            </div>}

        </div>
        : null}
        
       
        
</div>)
}

export default Rating;