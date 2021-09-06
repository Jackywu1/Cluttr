import { Request, Response } from 'express';
import querystring from 'querystring';

export const authenticate = (req: Request, res: Response) => {
  const query = querystring.stringify({
    client_id: process.env.client_id as string,
    redirect_uri: 'http://127.0.0.1:5000/genius/authorize',
    state: process.env.state as string,
    response_type: 'code',
  });

  return res.redirect(`https://api.genius.com/oauth/authorize?${query}`);
};
