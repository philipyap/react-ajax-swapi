import React, { Component } from 'react'
import './App.css'

import {
    Browser as Router,
    Route,
    Link
} from 'react-router-dom'

import Starships from './StarshipPage'
import PilotList from './PilotList'
import PilotInfo from './PilotInfo'

class Route extends Component {
    render(){
        return(
            <Router>
                <div className="App">
                    <Switch>
                    <Route path="/pilotinfo/:id" render={(props)=> <PilotInfo pilotInfo={pilotInfo}/>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Route