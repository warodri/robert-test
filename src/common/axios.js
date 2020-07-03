import axios from 'axios';

export const HTTP = axios.create({

    baseURL: `http://hybridtv.ss7.tv/techtest/`,

    /** In case of authorization 
    headers: {
      Authorization: 'Bearer {token}'
    }*/

})