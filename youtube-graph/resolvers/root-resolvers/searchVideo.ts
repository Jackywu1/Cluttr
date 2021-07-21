import axios from 'axios';


const searchVideo = async () => {
  try {
    const response = await axios.get('http://youtube:3000/youtube/search');

    return response.data;
  } catch (err) {
    return err;
  }
};

export default searchVideo;
