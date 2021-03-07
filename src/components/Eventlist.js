import React from 'react'
import Event from "./Event"

const Eventlist = ({events, setEvents, options}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {events.map((event,index) => (
                    <Event
                        fakeId={index}
                        key={event.id}
                        event={event}
                        events={events}
                        setEvents={setEvents}
                        options={options}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Eventlist