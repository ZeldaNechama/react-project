import axios from "axios";
import config from '../../config/config';

//const BUSINESS_ID = 'b9b05a9a-0758-422a-a7da-def7519c494b';

export const createMeeting = async (m) => {
    try {
        const newMeeting = await axios.post(`${config.apiUrl}/meeting`, m);
    if(newMeeting){
        return true;
    }
          
        
    } catch (error) {
        console.log(error);
    }


};

export const getAllMeetings = async () => {

    try {
        const meetings = await axios.get(`${config.apiUrl}/meeting?business_id=${config.businessId}`);
        const meetinglist = meetings.data
        console.log(meetinglist);
        return meetinglist;
    } catch (error) {
        console.log(error);

    }
};

export const deleteMeeting = async (id) => {

    try {
        const deletemeeting = await axios.delete(`${config.apiUrl}/meeting/${id}`);


    } catch (error) {
        console.log(error);

    }

};

export const changeMeeting = async (id, meeting) => {
    const changemeeting = await axios.put(`${config.apiUrl}/meeting/${id}`, meeting = {
        meeting
    })
    console.log(changemeeting.data);
    return changemeeting.data;
}