import axios from 'axios';
import querystring from 'querystring';

const searchVideo = async (_: any, { search }: { search: string }) => {
  const query = querystring.stringify({
    term: search,
  });

  console.log('query in:', query);

  try {
    const response = await axios.get(`http://youtube:3000/youtube/search?${query}`);

    return response.data;
  } catch (err) {
    return err;
  }
};

export default searchVideo;
