import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import Eventlist from '../components/Eventlist'
import Navbar from '../components/Navbar';

const LOCAL_STORAGE_KEY = "react-event-list_events"

function FormPage({options}) {

    //States
    const [event, setEvent] = useState({
        reps: 0,
        intervals: [""]
    })

    const [events, setEvents] = useState([])

    options.forEach((option, idx) => {
        var temp = [...events];
        temp.push({
            reps: 0,
            intervals: [],
            name: option
        })

        setEvent([...temp])
    })
    //Effects
    useEffect( (events) => {
        const storageEvents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storageEvents) {
        setEvents(storageEvents);
        }
    }, [])

    useEffect( () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events))
    }, [events])

    

    return (
        <div>
            <header>
                <h1>Set Goals</h1>
            </header>
            <Form event={event} setEvent={setEvent} events={events} setEvents={setEvents}/>
            <Eventlist events={events} setEvents={setEvents} options={options}/>
        </div>
    );

}

export default FormPage;