import React, { Component } from 'react'
import PilotInfo from './PilotInfo'

class PilotList extends Component{

    render(){
        
        const starships = this.props.starships
        
        const handleSubmit = e => {
            e.preventDefault()
        }

        return(
                <>
                    {starships.map((s, id)=>{
                        console.log(s)
                        return(
                            <div key={s.url}>
                                <h5 className="ship-name">{s.name}</h5>
                                 <PilotInfo pilotInfo={s} /> 
                                <form onSubmit={handleSubmit}>
                                    <button className="btn btn-info" onClick={()=>starships.push('./PilotInfo')}>click</button>
                                </form>
                            </div>

                        )
                    })}
                </>
            )
    }
}   

export default PilotList