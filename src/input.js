import React from 'react'

export default class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text : ''
        }
    }


    render() {
        return (
            <div>
                <input onChange={(e)=> this.setState({text: e.target.value})} />
                <p> {this.state.text.toUpperCase()} </p>
            </div>
        )
    }
}