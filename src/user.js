import React from "react";

export default class User extends React.Component {
    render(){
        return (
        <div style={{
            border: '1px solid black',
            borderRadius: 10,
            margin:10,
            textAlign: 'left',
            padding:10
        }}> 
            <p>ID : {this.props.id}</p>
            <p>Nom : {this.props.nom} </p>
            <p>CIN : {this.props.cin} </p>
            <button onClick={()=> this.props.handler(this.props.id)}>Delete</button>
        </div>
        )
    }
}