import React from "react";
import User from "./user";

const us = [
    {id:1, nom :'Bouatmani Ahmed', cin: 'BH443322'},
    {id:2, nom :'Kassi Said', cin: 'KJ443322'},
    {id:3, nom :'Sami Ali', cin: 'FG443322'},
]

export default class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: us
        }
    }
    
    handler = (idUserASupprimer) => {
        const newUsers = this.state.users.filter(u => u.id != idUserASupprimer)
        this.setState({users: newUsers})
    }
    
    render(){
        const usersC = this.state.users.map((u, index) => <User
            key={index}
             id={u.id}
             nom = {u.nom}
             cin = {u.cin} 
             handler={this.handler}
             />
        )
        return (
            <div>
            <h1>Liste des Utilisateurs</h1>
            <div>
                {usersC.length > 0 ? usersC : 'Aucun Utilisateur'}
            </div>
            </div>
        )
    }
}