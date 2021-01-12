import React from 'react'
import Event from './Event'

const Eventlist = (props) => (
    <div>
        <h1>My Events</h1>
        <ul className="EventList">
            {props.events.map((event) => 
               <Event event={event} key={event.id} />
            )}
        </ul>
    </div>
)


export default Eventlist