import React from 'react'
import './FFFtweet.css'

function FFFtweet({id}) {
    return (
        <div className='tweet-wrapper'>
            <div className={id} id="tweet-content"></div>
        </div>
    )
}

export default FFFtweet
