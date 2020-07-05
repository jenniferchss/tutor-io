import React, { useState, useEffect } from "react";
import axios from "../axios";

function Comments(props) {
    const [comment, setComment] = useState("");
    // const [commentList, setCommentList] = useState([]);
    const commentList = props.commentList;
    console.log("commentList: " + JSON.stringify(commentList, null, 2));

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
            console.log(res)
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
        
    <div class="profile card">
        <div class="card-body comments-card">
            <h5 class="comments-title">Comments (..)</h5>
            <hr />

            {/* PEOPLE'S COMMENTS */}
            {commentList === undefined ? null :
            commentList.map(mod => {return (
                <div className="comment row">
                    <div className="col-1">
                    <img src={require("../images/profile@2x.png")} className="profpict-sm" alt="profpict" />
                    </div>
                    
                    <div className="col-11">
                        <h5 className="name-comment">
                        <a onClick={() => handleClick(mod[0].userID)} href="/profile">{mod[0].firstName} {mod[0].lastName}</a>
                        </h5>
                        <small className="date-comment text-muted">1 week ago</small>
                        <p>{mod[0].content}</p>
                    </div>

                    <div className="col comments-div">
                        <hr />
                    </div>
                </div>)
            })}
                
            

            {/* MY COMMENT */}
            <div className="my-comment">
                {/* <textarea 
                    onChange={handleChange}
                    className="comment-box" 
                    placeholder="Post a public comment here."
                    value= {comment}>
                </textarea> */}
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
            
        </div>
</div>
</div>);
}

export default Comments;