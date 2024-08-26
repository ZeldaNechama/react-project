import React, { useEffect, useState } from "react";
import { getAllMeetings, deleteMeeting, changeMeeting } from '../meeting/api';

export const Meetings = () => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const [name, setName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [updatingMeetingId, setUpdatingMeetingId] = useState(null);
    // const [showSorted,setShowSorted]=useState(true);

    useEffect(() => {
        const getMeetings = async () => {
            try {
                const meetingsData = await getAllMeetings();
                setMeetings(meetingsData);
            } catch (error) {
                console.error('Error fetching meetings:', error);
            }
        };

        getMeetings();
    }, []);

    const updateMeeting = async () => {
        try {
            const meetingData = {
                name,
                start_time: startTime,
                duration,
                type,
                date
            };
            await changeMeeting(updatingMeetingId, meetingData);
            const updatedMeetings = await getAllMeetings();
            setMeetings(updatedMeetings);
            setShowUpdate(false);
        } catch (error) {
            console.error('Error with updating meeting', error);
        }
    };

    const delMeeting = async (id) => {
        try {
            await deleteMeeting(id);
            setMeetings(meetings.filter(meeting => meeting.id !== id));
        } catch (error) {
            console.error('Error deleting meeting:', error);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await updateMeeting();
    };

    const handleCancelUpdate = () => {
        setShowUpdate(false);

    };

    const show = async (id) => {
        setShowUpdate(true);
        setUpdatingMeetingId(id);
        const selectedMeeting = meetings.find(meeting => meeting.id === id);
        setName(selectedMeeting.name);
        setStartTime(selectedMeeting.start_time);
        setDuration(selectedMeeting.duration);
        setDate(selectedMeeting.date);
        setType(selectedMeeting.type);
    };
    const [sortBy, setSortBy] = useState(null); 


    const sortByName = () => {
        const sortedMeetings = [...meetings].sort((a, b) => a.name.localeCompare(b.name));
        setMeetings(sortedMeetings);
        setSortBy('name'); // עדכון המצב של המיון
    };

    const sortByDate = () => {
        const sortedMeetings = [...meetings].sort((a, b) => a.date.localeCompare(b.date));
        setMeetings(sortedMeetings);
        setSortBy('date'); // עדכון המצב של המיון
    };





    return (
        <div>
            {showUpdate ? (
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="name">Change your name</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="type">Change your service type</label>
                            <input type="text" id="type" value={type} onChange={e => setType(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="date">Change the date of the meeting</label>
                            <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="starttime">Change start time of meeting</label>
                            <input type="time" id="starttime" value={startTime} onChange={e => setStartTime(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="duration">Change duration</label>
                            <input type="number" id="duration" value={duration} onChange={e => setDuration(e.target.value)} />
                        </div>

                        <button type="submit">Change Meeting</button>
                        <button type="button" onClick={handleCancelUpdate}>Cancel</button>
                    </form>
                </div>
            ) : (
                meetings.length > 0 ? (
                    meetings.map((meeting) => (
                        <div key={meeting.id}>
                            <div>
                                <button onClick={() => show(meeting.id)}>🖋️</button>
                                The person you are meeting with: {meeting.name} <br />
                                Date of meetings:{meeting.date} <br />
                                Type of meeting: {meeting.type} <br />
                                Customers comment: {meeting.comment} <br />
                                The meeting starts at: {meeting.start_time} <br />
                                Amount of time: {meeting.duration}
                            </div>
                            <button onClick={() => delMeeting(meeting.id)}>❌</button>
                        </div>
                    ))
                ) : (
                    <div>No meetings found</div>
                )
            )}

            <button onClick={sortByName}>Sort by Name</button>
            <button onClick={sortByDate}>sort by Date</button>
        </div>
       
    );
};

