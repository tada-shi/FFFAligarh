import React from 'react'
import Button from '../../Button/Button'
import './JoinUs.css'

function JoinUs() {
    return (
        <section className="bg-container">
        <h1>JOIN US</h1>
        <div className="btns">
            <span>
            <Button 
                className="btn btn--outline btn--large" 
                onClick={()=>{console.log('btn-P')}}>
                VOLUNTEER
            </Button>
            </span>
            <span>
            <Button 
                className="btn btn--primary btn--large" 
                onClick={()=>{console.log('btn-J')}}>
                JOIN US
            </Button>
            </span>
        </div>
    </section>
    )
}

export default JoinUs
