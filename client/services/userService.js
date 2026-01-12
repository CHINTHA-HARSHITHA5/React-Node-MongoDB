import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const createUser = async (data) => {
    try {
        await axios.post(API_URL, data);
    } catch (error) {
        console.log(error);
    }       
};  