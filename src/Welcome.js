import React from 'react'

class Welcome extends React.Component {
    render(){
        return <div>
            <p>Hello {this.props.name} from class Component</p>
        </div>
    }
}

export default Welcome