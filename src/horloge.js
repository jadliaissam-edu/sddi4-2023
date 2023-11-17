import React from "react";
export class Horloge extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
            color:'black'
        }
    }
    componentDidMount(){
        setInterval(()=>this.setState({date:new Date()}),1000)
    }

    handler = () => {
        // code a executer
    }
       

    render(){
        return(
            <div>
                <h1 
                onClick={()=>alert('MEssage')}
                style={{color:this.state.color}}
                onFocus={this.handler}
                onMouseEnter={()=>this.setState({color:'red'})}
                onMouseLeave={()=>this.setState({color:'black'})} 
                >
                    TIME is {this.state.date.toISOString()}
                </h1>
            </div>
        )
    }
}
