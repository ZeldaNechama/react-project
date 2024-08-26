import React, { useState } from "react";
import {createMeeting} from './api';
import config from '../../config/config';



export const Meeting = () => {

    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [type,setType]=useState('');
    const [date,setDate]=useState('');
    const [comment,setComment]=useState('');
    const [starttime,setStartTime]=useState(null);
    const [duration,setDuration]=useState(0);

    
    //const BUSINESS_ID = 'b9b05a9a-0758-422a-a7da-def7519c494b';

const clearAllInputs=()=>{
    setName('');
    setPhone('');
    setType('');
    setDate('');
    setComment('');
    setDuration('');
    setStartTime('');
}
    const saveInfo=(e)=>{
        e.preventDefault();
     const m ={
     business_id:config.businessId,
     start_time:starttime,
     duration:duration,
     meeting:{
        
           name: name,
           phone:phone,
           type:type,
           date:date,
           comment:comment
     }
    }

       const ans= createMeeting(m);

       if(ans){
           alert('meeting was booket')
       }
        clearAllInputs();
    }

    return <div >
        <form onSubmit={(e)=>saveInfo(e)} >
            <div>
                <label htmlFor="name">enter your name</label>
                <input type="text" id="name" value={name} required  onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">enter your phone number</label>
                <input type="text" id="phone" required value={phone} onChange={e =>setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="type">enter a service type</label>
                <input type="text" id="type" required value={type} onChange={(e)=>setType(e.target.value)} />
            </div>
            <div>
                <label htmlFor="date">enter a date for the meeting</label>
                <input type="date" id="date" required value={date}  onChange={(e)=>setDate(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="comment">write a comment</label>
                <input type="text" id="comment" value={comment} onChange={e=>setComment(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="starttime">put in srart time of meeting</label>
                <input type="time" id="starttime" required value={starttime} onChange={e=>setStartTime(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="duration">writetime of meating acourding to above</label>
                <input type="number" id="duration" value={duration} required onChange={e=>setDuration(e.target.value)}/>
            </div>


            <button type="submit">to schedule a meeting </button>
            




        </form>

    </div>
}

