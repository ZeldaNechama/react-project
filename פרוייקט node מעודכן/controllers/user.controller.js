const { Router } = require('express');
const UserService = require('../services/user.service');


const router = Router();

router.get('/', async (req, res) => {
    try {
        
        const users = await UserService.getUsers();
        console.log(users);
        if (users) {
            console.log(users);
            res.send(users);
        }
        else {
            res.status(404).send('bad input');
        }


    } catch (error) {
        console.error(`error in fetch users ${error.message}`);
        res.status(500).send('error in fetch users');
    }

})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserService.getUser(id);
        res.send(user);
    } catch (error) {
        console.error(`error in fetch user ${error.message}`);
        res.status(500).send('error in fetch user');
    }

})

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.getUserByUsername(username, password);
        console.log(user);

        // User not found
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch (error) {
        console.log(`error in sign in ${error.message}`);
        res.status(500).send('error in sign in');
    }

});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const user = req.body.user;
        console.log(user);
        if (!user) {
            console.error('error in post user, no user provided');
            return res.status(400).send('error in post user, no user provided');
        }

        const newUser = await UserService.addUser(user);
        res.send(newUser);
    } catch (error) {
        console.error(error.message);
        console.log("xdfzfdncbkl");
        res.status(500).send(error.message);
    }

});

router.put('/:id', async (req, res) => {
    try {
        console.log("in put");
        const { id } = req.params;
        const { user } = req.body;
        if (!id || !user) {
            return res.status(500).send('no user id or no user data provided');
        }
        const updatedUser = await UserService.updateUser(id, user);
        res.send(updatedUser);
    } catch (error) {
        console.log(`error in update user ${error.message}`);
        res.status(500).send('error in update user');
    }

})

module.exports = router;
