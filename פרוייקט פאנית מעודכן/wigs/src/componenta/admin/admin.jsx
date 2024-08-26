import React, { useState } from "react";
import { Service } from '../meeting/serivce';
import { Meetings } from './meetings';
import { getAllUsers } from '../../api'

export const MainAdmin = () => {
  const [clickServices, setClickServices] = useState(false);
  const [clickMeetings, setClickMeetings] = useState(false);
  const [clickUsers, setClickUsers] = useState(false);
  const [users, setUsers] = useState([]);

  const changeServices = () => {
    setClickServices(true);
    setClickMeetings(false);
    setClickUsers(false);
  };

  const changeMeetings = () => {
    setClickMeetings(true);
    setClickServices(false);
    setClickUsers(false);
  };

  const changeUsers = () => {
    console.log('in change users');
    getUsers();
    setClickUsers(true);
    setClickMeetings(false);
    setClickServices(false);
  };

  const getUsers = async () => {
    try {
      console.log('in get users');
      const usersData = await getAllUsers();
      console.log('after going to the node');
      console.log(usersData);
      setUsers(usersData);

      console.log('users', users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <div >
        <button onClick={changeServices}>Services</button>
      </div>

      <div>
        <button onClick={changeMeetings}>Meetings</button>
      </div>

      <div>
        <button onClick={changeUsers}>Users</button>
      </div>

      {clickMeetings && <Meetings />}
      {clickServices && <Service />}

      {clickUsers && (
        <div>
          <h2>Users</h2>
          <ul>
            {users.length > 0 ? (
              users.map((user, index) => (
                <div key={index}>Name:{user.username}  <br /> Email:{user.email}  <br /> Phone:{user.phone} <br/>
                /////////////////////////////////////////////////////////////////////</div> 
              ))
            ) : (
              <li key={100}>no users</li>
            )}
          </ul>
        </div>
      )}

    </div>
  );
};
