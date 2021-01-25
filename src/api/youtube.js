import axios from 'axios';

const KEY = 'AIzaSyDWgdfk6a_86vYLw6cbcZV5FmrPGMywGRk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
