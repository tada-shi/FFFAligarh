import React from 'react'
import FFFtweet from '../../FFFtweet/FFFtweet'
import './Trend.css'

function Trend() {

    const tweets =[
      {id:  'red'},{id:'yellow'},{id:'white'},{id:'royalblue'}
    ]

    return (
        <>
            <div className="tweet-container">
                {tweets.map((tweet) => {
                    const {id} = tweet
                    return <FFFtweet id={id} key={id}/>
                })}
            </div>
        </>
    )
}

export default Trend
