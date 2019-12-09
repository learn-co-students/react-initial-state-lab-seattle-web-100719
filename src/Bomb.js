// your Bomb code here!

import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props)
    {    
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render()
    {
        if (this.state.secondsLeft)
        {
            return (
                <div>{this.state.secondsLeft} seconds left before I go boom!</div>
            )
        }
        else
        {
            return (
                <div>Boom!</div>
            )
        }
        
       
    }
}

export default Bomb
