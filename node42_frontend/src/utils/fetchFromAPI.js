import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data.content;
};

export const getVideoAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`);

  return data.content
}


export const getVideoTypeAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type`);

  return data.content
}



export const getVideoWithTypeAPI = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-with-type/${typeId}`);

  return data.content
}

export const getVideoPageAPI = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-page/${page}`);

  return data.content // {data, listPage}
}