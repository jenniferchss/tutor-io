import React, { useState, useEffect } from "react";
import axios from "../axios";
import {Image} from "cloudinary-react";


function Comments(props) {
    const [comment, setComment] = useState("");
    // const [commentList, setCommentList] = useState([]);
    const commentList = props.commentList;
    const tutorid = localStorage.getItem('userid');
    const loggedinuser = localStorage.getItem('loggedinuser');
    
    console.log(commentList);
    // console.log("commentList: " + JSON.stringify(commentList, null, 2));

    // useEffect(() => {
    //     axios().get('/user/findSpecificModules/School_Of_Computing')
    //     .then(res => {
    //       console.log(res);
    //       setCommentList(res.data);
    //     })
    //     .catch (err => {
    //       console.log(err);
    //     });
    // }, [])

    function handleChange(event) {
        const comment = event.target.value;
        setComment(comment);
    }

    function handlePost() {
        const token = localStorage.getItem('usertoken');
        const tutorid = localStorage.getItem('userid');
        axios().post('/user/postComment', {
            content: comment,
            tutorID: tutorid,
            headers:{
                Authorization: token
            }
        })
        .then( res => {
            console.log(res);
            window.location.reload();
        })
        .catch (err => {
            console.log(err);
        })
    }

    function handleClick(userid) {
        localStorage.setItem('userid', userid);
        console.log('saved userid: ' + localStorage.getItem('userid'));
    }

    return (<div className="comments-sec">
        
    <div className="profile card">
        <div className="card-body comments-card">
            <h5 className="comments-title">Comments ({commentList.length})</h5>
            <hr />

            {/* PEOPLE'S COMMENTS */}
            {commentList.length === 0 ? <p className="no-comments">No comments</p> :
            commentList.map(mod => {return (
                <div className="comment row" key={mod[0].userID}>
                    <div className="col-1">
                    <img src={require("../images/profile@2x.png")} className="profpict-sm" alt="profpict" />
                    </div>
                    
                    <div className="col-11">
                        <h5 className="name-comment">
                        <a onClick={() => handleClick(mod[0].userID)} href="/profile">{mod[0].firstName} {mod[0].lastName}</a>
                        </h5>
                        <small className="date-comment text-muted">posted on: {mod[0].createdAt.slice(0,10)}</small>
                        <p>{mod[0].content}</p>
                    </div>

                    <div className="col comments-div">
                        <hr />
                    </div>
                </div>)
            })}
                
            
        {loggedinuser !== tutorid ?
            // {/* MY COMMENT */}
            <div className="my-comment">
                <div className="form-group shadow-textarea">
                    <textarea 
                        onChange={handleChange}
                        className="form-control z-depth-1"
                        rows="3" 
                        placeholder="Post a public comment here."
                        value={comment}
                    >
                    </textarea>
                </div>
                
                <div className="text-right">
                    <button onClick={handlePost} type="submit" className="btn btn-info post-btn">Post</button>
                </div>
 
            </div>
        : null }
            
        </div>
</div>
</div>);
}

export default Comments;