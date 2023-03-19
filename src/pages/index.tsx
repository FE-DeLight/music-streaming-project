import React, { useEffect } from 'react';
import postData from '@/service/api';
import PlayList from '@/components/PlayList';

export default function Home(props: any): JSX.Element {
  const {
    data: { playList, popHotTrackPlayList },
  } = props;
  console.log('@@', playList, popHotTrackPlayList);
  useEffect(() => {}, []);
  return (
    <div>
      <PlayList title={playList.name} playList={playList} viewLine={2} />
      <PlayList title={popHotTrackPlayList.name} playList={popHotTrackPlayList} viewLine={2} />
    </div>
  );
}

export async function getStaticProps() {
  const List = await postData({ url: 'http://localhost:3000/api/categoryList' });
  return {
    props: {
      data: List.data,
    },
  };
}
