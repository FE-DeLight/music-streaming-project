import { NextApiRequest, NextApiResponse } from 'next';
import MusicChart from './MusicChart.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(MusicChart);
}
