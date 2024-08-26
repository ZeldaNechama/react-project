import axios from 'axios';
import config from './config/config';


export const getUser = async (id) => {

    try {
        const user = await axios.get(`${config.apiUrl}/user/${id}`);
        console.log(user.data);
    } catch (error) {
        console.log(error);
    }


};

export const signIn = async (userinfo) => {
    try {
        const response = await axios.post(`${config.apiUrl}/user/signin`, userinfo);
        return response.status;
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (user) => {

    try {
        console.log(user);
        const response = await axios.post(`${config.apiUrl}/user`, user = {user});
        console.log(response.data);
        return response.data;
       

    } catch (error) {
        console.log(error);
    }

};

export const updateUser = async (id, user) => {
    try {
        const updatedUser = await axios.put(`${config.apiUrl}/user/${id}`, user = {
            user
        });
        console.log(updatedUser.data);

    } catch (error) {
        console.log(error);

    }
};
export const getAllUsers = async () => {
    try {
        console.log('in users');
        console.log(config.apiUrl);
        const users = await axios.get(`${config.apiUrl}/user/`);
        console.log(users.data);
        return users.data;

    } catch (error) {
        console.log(error);
    }

};