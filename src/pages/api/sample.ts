import { NextApiRequest, NextApiResponse } from 'next';

const testing = async (req: NextApiRequest, res: NextApiResponse) => {
  const ip = await fetch('https://my-ip.theboringdude.workers.dev/', {
    headers: {
      'X-FORWARDED-FOR': Array.isArray(req.headers['X-FORWARDED-FOR'])
        ? req.headers['X-FORWARDED-FOR'][0]
        : req.headers['X-FORWARDED-FOR']
    }
  })
    .then((r) => r.json())
    .then((d) => d)
    .catch(() => {
      true;
    });

  res.status(200).json(ip);
};

export default testing;
