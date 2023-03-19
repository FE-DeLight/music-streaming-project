import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const BrowseListData = {
      header: ['순위', '곡/앨범', '아티스트', '듣기', '재생목록', '내 리스트', '더보기'],
      list: [
         {
            lank: 1,
            album: {
               cover: 'https://cdn.music-flo.com/image/v2/album/180/940/10/04/410940180_63b230db_s.jpg?1672622301730/dims/resize/140x140/quality/90',
               title: 'Ditto',
               artist: 'NewJeans',
               albumTitle: 'OMG',
            },
            more: {
               titleInfo: '',
               albumInfo: '',
               artistInfo: '',
               like: false,
               reject: false,
            },
         },
         {
            lank: 2,
            album: {
               cover: 'https://cdn.music-flo.com/image/v2/album/847/826/08/04/408826847_62e7289c_s.jpg?1659316382613/dims/resize/140x140/quality/90',
               title: 'Hype Boy',
               artist: 'NewJeans',
               albumTitle: 'New Jeans',
            },
            more: {
               titleInfo: '',
               albumInfo: '',
               artistInfo: '',
               like: false,
               reject: false,
            },
         },
      ],
   };

   res.status(200).json({ data: BrowseListData });
}
