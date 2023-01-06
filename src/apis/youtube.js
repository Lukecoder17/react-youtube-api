import axios from "axios";

const KEY = 'AIzaSyD21EImR6dyTLXE6Z0KUcPoYsO4ED9nMH0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY
    }
});