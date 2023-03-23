import React, { useEffect, useState } from 'react';
import PlayerList from '@/components/Player/PlayerList';
import PlayerBar from '@/components/Player/PlayerBar';

export default function Index(): JSX.Element {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const [playListData, setPlayListData]: any = useState();

  const getData = async () => {
    const res = await (await fetch('http://localhost:3000/api/categoryList')).json();
    setPlayListData(await res.data.playList.trackList);
  };
  useEffect(() => {
    getData();
  }, []);

  const currentPlayMusic = playListData && playListData[0];

  const openPlaylist = (e: any): void => {
    e.preventDefault();
    setIsOpenPlayer(!isOpenPlayer);
  };

  return (
    <div className="player">
      {playListData && (
        <>
          <PlayerList
            player={isOpenPlayer}
            openPlaylist={openPlaylist}
            playListData={playListData}
            currentPlayMusic={currentPlayMusic}
          />
          <PlayerBar player={isOpenPlayer} openPlaylist={openPlaylist} currentPlayMusic={currentPlayMusic} />
        </>
      )}
    </div>
  );
}
