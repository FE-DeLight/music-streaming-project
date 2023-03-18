import { NextApiRequest, NextApiResponse} from "next";
import PlayList from './playList.json';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(PlayList);
}