import axios from 'axios';
import baseurl from './constants/baseurl';

async function getAllUsers(){
    try {
        const config = {
            method: 'GET',
            url: `${baseurl()}/user`,
            headers: { "Authorization": "Bearer " + localStorage.token }
        }

        const result = await axios(config);
        return result.data.data;

    } catch (error) {
        console.log(error);
    }
}



export const Users = getAllUsers();