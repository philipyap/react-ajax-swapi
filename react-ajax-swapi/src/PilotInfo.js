import React, { Component } from 'react'


class PilotInfo extends Component {
    render(props){

        const info = this.props.pilotInfo
        
        return(
            <div className="user-detail">
                <ul>
                    <li><h3>Name: {info.name}</h3></li>
                    <li><h3>Model: {info.model}</h3></li>
                </ul>
            </div>
        )
    }
}
export default PilotInfo
