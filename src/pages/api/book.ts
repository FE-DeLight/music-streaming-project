import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bookList = [
    {
      id: 1,
      title: "스케일의 법칙 (작은 아이디어를 빅 비지니스로)",
      price: "19800",
    },
    {
      id: 2,
      title: "이노의 가르침 ",
      price: "6480",
    },
    {
      id: 3,
      title: "슬램덩크 리소스",
      price: "18000",
    },
    {
      id: 4,
      title: "김미경의 마흔 수업",
      price: "16200",
    },
    {
      id: 5,
      title: "사이토 히토리의 1퍼센트 부자의법칙",
      price: "15300",
    },
    {
      id: 6,
      title: "내가 죽기로 결심한 것은 4",
      price: "14400",
    },
    {
      id: 7,
      title: "내가 죽기로 결심한 것은 3",
      price: "14400",
    },
    {
      id: 8,
      title: "고양이 해결사 깜냥 5",
      price: "9900",
    },
    {
      id: 9,
      title: "K 배터리 레볼루션",
      price: "17100",
    },
    {
      id: 10,
      title: "슬랭덩크 신장재편판1",
      price: "6300",
    },
  ];

  res.status(200).json({ data: bookList });
}
