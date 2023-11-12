import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date : new Date()
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({date: new Date()})
        }, 1000)
    }
    render(){
        return <div>
            <p>{this.state.date.toISOString()}</p>
        </div>
    }
} 
export default Clock