import React from 'react'
import { useHistory } from 'react-router-dom'

export default function FeedbackCard({title, status, upvotes, description, category, numComments, _id}) {
    
    const history = useHistory()

    return (
        <div className="feedbackCard" onClick={()=>{
            history.push(`/feedback/${_id}`)
        }}>
            <div id="upvotes">
                <img src="/images/icon-arrow-up.svg" alt="up arrow" />
                {upvotes}
            </div>
            <div className="feedbackCard__main">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag">{category}</div>
            </div>
            <div>
                {numComments}
            </div>
        </div>
    )
}
