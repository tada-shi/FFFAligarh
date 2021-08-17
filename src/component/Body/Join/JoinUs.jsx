import React from 'react'
import Button from '../../Button/Button'
import './JoinUs.css'

function JoinUs() {
    return (
        <section className="bg-container">
        <h1>JOIN US</h1>
        <div className="btns">
            <Button 
                className="btn btn--outline btn--large" 
                onClick={()=>{console.log('btn-P')}}>
                &#62;&#62;&#62;
            </Button>
        </div>
    </section>
    )
}

export default JoinUs
