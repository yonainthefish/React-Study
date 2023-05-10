import React from 'react';
import './EventForm.css';
import { useState } from 'react';

export default function EventForm() {

    function reset() {
        setTitle('');
        setDate('');
    }

    function handleSubmit(event){
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
        }
        console.log(formData);

    }

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


    return (
        <form className='event-form' onClick={handleSubmit}>
            <label htmlFor="">
                <strong>Event Title : </strong>
                <input type="text" value={title} onChange={(event) => setTitle
                (event.target.value)} />
            </label>
            <label >
                <strong>Event Date : </strong>
                <input type="date" value={date} onChange={(event) => setDate
                (event.target.value)} />
            </label>
            <button type='submit'>제출하기</button>
            <button type='reset' onClick={reset}>초기화</button>
            
        </form>
    )
} 