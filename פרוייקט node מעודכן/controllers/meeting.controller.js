const { Router } = require('express');
const MeetingsService = require('../services/meeting.service');

const router = Router();

router.get('/', async (req, res) => {
    try {
        console.log("in get of meeting");
        const { business_id } = req.query;
        if (!business_id) {
            res.status(400).send('no business_id provided as query param');
        }
        const meetings = await MeetingsService.getMeetings(business_id);
        res.send(meetings);
    } catch (error) {
        console.error(`error in fetching meeting list ${error.message}`);
        res.status(500).send(`error in fetching meeting list ${error.message}`);
    }  
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const meeting = await MeetingsService.getMeeting(id);
        res.send(meeting);
    } catch (error) {
        console.error(`error in fetching meeting ${error.message}`);
        res.status(500).send(`error in fetching meeting ${error.message}`);
    }   
});

router.put('/:id', async (req, res) => {
    try {
        console.log("in put");
        const { meeting } = req.body;
        const { id } = req.params;
        if (!id || !meeting) {
            return res.status(400).send('no meeting or no id provided');
        }
        const _meeting = await MeetingsService.updateMeeting(id, meeting);
        return res.send(_meeting);
    } catch (error) {
        console.error(`error in updating meeting ${error.message}`);
        res.status(500).send(`error in updating meeting ${error.message}`);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await MeetingsService.deleteMeeting(id);
        res.send('deleted');
    } catch (error) {
        console.error(`error in deleting meeting ${error.message}`);
        res.status(500).send(`error in deleting meeting ${error.message}`);
    }
})

router.post('/', async (req, res) => {

    console.log("in post!!!!!!!!!");
    const { business_id, start_time, duration, meeting } = req.body;
    if (!business_id || !start_time || !duration || !meeting) {
        return res.status(400).send('on of ths following properties missing from the body: business_id / start_time / duration / meeting')
    }
    try {
        const _meeting = await MeetingsService.addMeeting(business_id, start_time, duration, meeting);
        res.send(_meeting);
    } catch (err) {
        console.error(`error in creating meeting ${error.message}`);
        res.status(500).send(err.message);
    }
    

})

module.exports = router;
