import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-a0dd5.cloudfunctions.net/api'
    
    // 'http://localhost:5001/clone-a0dd5/us-central1/api' // api cloud function url
});

export default instance;

