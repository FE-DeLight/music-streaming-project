import { NextApiRequest, NextApiResponse } from 'next';
import token from './token.json';
import { users } from './users.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const isId = users.some((user) => user.id === req.body.id);
  const isPwd = users.some((user) => user.password === req.body.password);

  if (isId && isPwd) {
    res.status(200).json({ ...token, message: '로그인 성공' });
  } else if (!isId) {
    res.status(400).json({ message: '아이디를 확인해주세요.' });
  } else if (!isPwd) {
    res.status(400).json({ message: '비밀번호를 확인해주세요.' });
  }
}
