import axios from 'axios';

const KEY = 'AIzaSyD_q-77m-FYWHPbxwHXdM-ldSaWUsxD984';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
