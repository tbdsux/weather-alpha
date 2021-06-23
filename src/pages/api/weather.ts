import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ip = await fetch('https://api.ipify.org/')
    .then((d) => d.text())
    .then((d) => d)
    .catch(() => undefined);

  res.status(200).end(ip);
};
