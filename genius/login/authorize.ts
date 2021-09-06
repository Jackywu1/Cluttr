import axios from 'axios';

export const authorize = async (code: string): Promise<string | Error> => {
  try {
    const data = {
      code,
      client_secret: process.env.client_secret as string,
      grant_type: 'authorization_code',
      client_id: process.env.client_id as string,
      redirect_uri: 'http://127.0.0.1:5000/genius/authorize',
      response_type: 'code',
    };

    const { data: response } = await axios({
      url: 'https://api.genius.com/oauth/token',
      method: 'POST',
      data,
    });

    return response.access_token as Promise<string>;
  } catch (err) {
    return err as Promise<Error>;
  }
};
