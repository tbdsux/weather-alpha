// this is wrapper to the OpenWeatherMap api in order to prevent leaking of the api key
// NOTE: all urls must end with `&appid=`

import { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '../../utils/fetcher';
import { joinString } from '../../utils/joinstring';

const WeatherApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  if (!url) {
    res.status(200).json({});
    return;
  }

  const finalUrl = joinString(url) + process.env.OPENWEATHER_API;
  console.log(finalUrl);
  const q = await fetcher(finalUrl);

  if (!q) {
    res.status(200).json({ error: true, message: 'failed to fetch url' });
    return;
  }

  res.status(200).json(q);
};

export default WeatherApi;
