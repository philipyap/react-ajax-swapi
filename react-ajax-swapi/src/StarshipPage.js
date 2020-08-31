import React, { Component } from 'react'
import PilotList from './PilotList'
import axios from 'axios'


class Starships extends Component{
    constructor(props){
        super(props)
        this.state = {
            starships:[]
        }

        this.getStarships = this.getStarships.bind(this)
    }
    getStarships(){
        return axios.get("https://swapi.dev/api/starships/")
        .then((response)=> {
            console.log(response.data.results)
            this.setState({starships: response.data.results})
        })
    }

    componentDidMount(){
        this.getStarships()
    }

    render(){
        const {starships} = this.state
        return(
            <div>
                <h1>STAR WARS STARSHIPS</h1> 
                <PilotList starships={starships} />
            </div>
        )
    }
}

export default Starships