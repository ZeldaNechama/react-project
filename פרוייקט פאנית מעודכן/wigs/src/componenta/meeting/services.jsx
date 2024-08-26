import React, { useEffect, useState } from "react";
// import { Serivces } from '../../services';
import { getAllServices } from '../services/api';
import { Meeting } from '../meeting/meetingInfo';
import config from '../../config/config';




export const Services = () => {


  const [currentSurivices, setCurrenetSurvices] = useState([]);
  const [showMeeting, setShowMeeting] = useState(false);
  const[showClickMeeting,setShowClickMeeting]=useState(true);




  const show = () => {
    setShowMeeting(true);
    setShowClickMeeting(false);
  }

  useEffect(() => {
    const getallServices = async () => {
      try {
        console.log(`im in service component ${config.businessId}`);
        const arrayservise = await getAllServices(config.businessId);
        console.log(arrayservise);
        setCurrenetSurvices(arrayservise);

      }
      catch (error) {
        console.error("error fatching all sevices:", error);

      }

    };
  
    getallServices();
    show();
  }, []);




  return <div>
    <h1>Our Services</h1>

    <ul>
      {currentSurivices.length > 0 &&
        currentSurivices.map((service) =>

      
          (<div>
            <h3> Service Type: {service.name}</h3>
            <h4>{service.descerpetion}</h4>
             Amount of meetings: {service.AmountOfmeatings} <br />
             Price:{service.price}
            </div>)


        )}
    </ul>
    {showMeeting && <Meeting />}

    {showClickMeeting &&<button onClick={show}>create a meeting</button>}
  </div>




}
