import React from 'react'
class Hello extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
        // code async
    }

    componentWillUnmount(){
        // code de cleanup
        
    }

    render(){
        const depasse4 = this.state.count > 4
        return <div style={{color:this.props.color}}>
            Counter : {this.state.count}
            <p>{this.props.color}</p>
            <div>
            <button onClick={()=>{
                this.setState({count: this.state.count  +1})
            }} >Increment</button>
            </div>
            </div>
    }
}

export default Hello;