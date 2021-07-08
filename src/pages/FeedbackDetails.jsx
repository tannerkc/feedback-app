import React, { useContext } from 'react'
import feedbackContext from '../utils/FeedbackContext'

export default function FeedbackDetails(props) {

    const feedbackData = useContext(feedbackContext)
    const feedbackId = props.match.params.id

    const feedbackObj = feedbackData.find(obj => obj.id == feedbackId);

    // const [text, setText] = useState('')

    console.log(feedbackObj)

    // const inputHandler = (text) =>{
    //     setText(text)

    // }

    return (
        <div>
            {
                feedbackObj.comments.map(comment=>(
                    <div className="commentCard" style={{margin: 30}}>
                        {comment.content}
                        {/* <input type="text" 
                        value={text}
                        onChange={(e)=>{
                            setText(e.target.value)
                        }} /> */}
                    </div>
                ))
            }
        </div>
    )
}
