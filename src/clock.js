import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            isHovering: false
        }
    }

    handleChane = () =>{
        this.setState({isHovering: !this.state.isHovering})
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({date: new Date()})
        }, 1000)
    }
    render(){
        return <div>
            <p
            onMouseLeave={this.handleChane}
            style={{color: this.state.isHovering ? 'red': 'green'}}
             onMouseEnter={this.handleChane}>{this.state.date.toISOString()}</p>
        </div>
    }
} 
export default Clock