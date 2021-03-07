import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { Formik, Form as Formk ,Field, ErrorMessage } from 'formik'
import MultiSelect from "react-multi-select-component";
import * as yup from 'yup'

// Formik  Props
const initialValues = {
    exercise: '',
    reps: '',
    intervals: []
}

const validationSchema = yup.object({
    exercise: yup.string().required('Required'),
    reps: yup.number().required("Required"),
    intervals: yup.array().required("Required")
})

let intervals = [];
let hours = 12;
for(let i=1; i<49; i++){
    if(i % 2 == 0){
        {i > 24 ?
            intervals.push({name:`${hours}:30 PM`, value:`${hours}:30 PM`})
        :
            intervals.push({name:`${hours}:30 AM`, value: `${hours}:30 PM`})
        }
        hours++;
    }else{
        {i > 24 ?
            intervals.push({name:`${hours}:00 PM`, value:`${hours}:30 PM`})
        :
            intervals.push({name: `${hours}:00 AM`, value:`${hours}:30 PM`})
        }
    }
    if(hours === 13){
        hours = 1;
    }
}

const Form = ({events, setEvents}) => {
    // const [selected, setSelected] = useState([]);

    const onSubmit = (values) => {
        // console.log('Form data', values)
        // setEvents([...events,{ 
        //     exercise: values.exercise,
        //     reps: values.reps,
        //     intervals: values.reps,
        //     id: uuid()}
        // ]);
    }

    console.log("test");

    const onChange = (list) => {
        console.log(list);
    }

    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear" },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" },
      ];
    
      const [selected, setSelected] = useState([]);

    return (
        <div>
            {events.map((event, index) => {
                return(
                    // <Formik
                    //     initialValues={initialValues}
                    //     validationSchema={validationSchema}
                    //     onSubmit={onSubmit}
                    // >
                        // <Formk className="form-fields">
                        <div>
                            <div className="form-control">
                                <label className="form-label" htmlFor="Exercise">Activity Name: {event.names}</label>
                            </div>

                            <div className="form-control">
                                <label className="form-label" htmlFor="reps">Reps</label>
                                <input type='number' id='reps' name='reps' value={event.reps}/>
                            </div>

                            <div className="form-control">
                                <label className="form-label" htmlFor="Intervals">Intervals</label>
                                <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />                            </div>

                            <button className="todo-button" type="submit">
                                <i className="fas fa-plus-square"></i>
                            </button>
                        </div>
                        /* </Formk> */
                    // </Formik>
                )
            })}
        </div>
    );
}

export default Form