import React from 'react'

export default class Age extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            age : ''
        }
    }

    render(){
        return <div>
            <label>Age</label>
            <input
                type='number' 
                onChange={(e)=> this.setState({age : e.target.value})}
             />
             { 
                this.state.age === '' && <p>L'age est obligatoire</p>
             }
             {
                    this.state.age === '' ? 
                    'Veuillez saisir votre age':
                    <p>Vous etes { this.state.age >= 18 ? 'Majeur' : 'Mineur'} </p>
                }
        </div>
    }
}