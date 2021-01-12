import React, {useState} from 'react'
import './App.css';
import './EventList'
import EventList from './EventList';
import CitySearch from './CitySearch'
import { getEvents } from './api';

function App() {
    const [events, setEvents] = useState([])
    const [locations] = useState([])
    const updateEvents = (location) => {
        getEvents().then((events) => {
            const locationEvents = (location === 'all')
                ? events
                : events.filter((event) => event.location === location);
            setEvents(locationEvents)
        })
    }
    return (
        <div className="App">
            <CitySearch locations={locations} updateEvents={updateEvents}/> 
            <EventList events={events}/> 
        </div>
  );
}

export default App;
