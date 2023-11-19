import React from "react";
export class Age extends React.Component{
    constructor(props){
        super(props)
        this.state={age:0}

    }
    render(){
        return(
            <div>
                age:
                <input type="number" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
                <div>
                    {this.state.age==0 ? <p>saiser votre age</p> :
                    <p>Vous etes {this.state.age > 18? 'Majeur':'Mineur'} </p> }
                   
                </div>
            </div>
        )
    }
}