import React from "react";

function Comments() {
    return (<div className="comments-sec">
        
    <div class="profile card">
        <div class="card-body comments-card">
            <h5 class="comments-title">Comments (..)</h5>
            <hr />

            {/* PEOPLE'S COMMENTS */}
            <div className="comment row">
                <div className="col-1">
                    <img src={require("../images/profile@2x.png")} className="profpict-sm" alt="profpict" />
                </div>
                <div className="col-11">
                <h5 className="name-comment">Firstname Lastname</h5>
                <small className="date-comment text-muted">1 week ago</small>
                <p>(Insert rating stars here)</p>
                <p>Lorem ipsum halshbf asjfbuerfua sjkdkajc djkaskdgfaksdj kjshdfkasb!</p>
                </div>

                <div className="col comments-div">
                    <hr />
                </div>
                
            </div>

            {/* MY COMMENT */}
            <div className="comment row">
                <div className="col-1">
                    <img src={require("../images/profile@2x.png")} className="profpict-sm" alt="profpict" />
                </div>
                <div className="col-11 my-comment">
                <h5 className="name-comment">myName lastName</h5>
                <p>(Insert rating stars here)</p>
                <textarea className="comment-box" placeholder="Write a public testimony here .."></textarea>
                </div>

                <div className="col text-right">
                <a href="#" class="btn btn-info post-btn">Post</a>
                </div>
                
            </div>
            
        </div>
</div>
</div>);
}

export default Comments;