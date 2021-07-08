import React, {useContext} from 'react'
import feedbackContext from '../utils/FeedbackContext'

export default function FeedbackCards() {

    const feedbackData = useContext(feedbackContext)

    console.log(feedbackData)

    return (
        <div>
            
        </div>
    )
}
