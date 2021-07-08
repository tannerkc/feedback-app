import React, { useContext } from 'react'
import feedbackContext from '../utils/FeedbackContext'

export default function FeedbackDetails(props) {

    const feedbackData = useContext(feedbackContext)
    const feedbackId = props.match.params.id

    const feedbackObj = feedbackData.find(obj => obj.id == feedbackId);

    console.log(feedbackObj)

    return (
        <div>
            {
                feedbackObj.comments.map(comment=>(
                    <div className="commentCard" style={{margin: 30}}>
                        {comment.content}
                    </div>
                ))
            }
        </div>
    )
}
