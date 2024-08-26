import axios from "axios";
import config from '../../config/config'
export const getService = async (id) => {

    try {

        const service = await axios.get(`${config.apiUrl}/service/${id}`);
        const s = service.data;

        return s;

    } catch (error) {
        console.log(error);

    }
}


export const createService = async (service) => {
    try {
        console.log(service);
        const newService = await axios.post(`${config.apiUrl}/service`, service);
        console.log(newService.data);


    } catch (error) {
        console.log(error);

    }
}

export const getAllServices = async (businessId) => {
console.log("im in getAllServices b_id " + businessId);
    try {
        const arrayServices = await axios.get(`${config.apiUrl}/service?business_id=${businessId}`);
        const array = arrayServices.data;
        console.log(array);
        return array;

    } catch (error) {
        console.error(error);
    }
};

export const deleteService = async (id) => {

    try {
        const service = await axios.delete(`${config.apiUrl}/service/${id}`);

    } catch (error) {
        console.log(error);
    }

};

