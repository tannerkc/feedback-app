import React, {useContext} from 'react'
import feedbackContext from '../utils/FeedbackContext'
import FeedbackCard from './FeedbackCard'

export default function FeedbackCards() {


    const feedbackData = useContext(feedbackContext)
    return (
        <>
            {
                feedbackData.map(item =>(
                    <FeedbackCard 
                        key={item.id}
                        _id={item.id}
                        title={item.title}
                        category={item.category}
                        upvotes={item.upvotes}
                        status={item.status}
                        numComments={item.comments ? item.comments.length : 0}
                        description={item.description}
                    />
                ))
            }
        </>
    )
}
