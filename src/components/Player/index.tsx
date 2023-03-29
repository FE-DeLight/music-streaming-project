import React, { useEffect, useState } from 'react';
import PlayerList from '@/components/Player/PlayerList';
import PlayerBar from '@/components/Player/PlayerBar';

export default function Index(): JSX.Element {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const [playListData, setPlayListData]: any = useState();
  const [currentPlayMusic, setCurrentPlayMusic] = useState();

  const getData = async () => {
    const res = await (await fetch('http://localhost:3000/api/categoryList')).json();
    setPlayListData(await res.data.playList.trackList);
  };  

  const openPlaylist = (e: any): boolean | void => {
    e.preventDefault();
    setIsOpenPlayer(!isOpenPlayer);
  };
  
  const handleSelectMusic = (index :number) => {
    setCurrentPlayMusic(playListData[index]);    
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="player">
      {playListData && (
        <>
          <PlayerList
            player={isOpenPlayer}
            openPlaylist={openPlaylist}
            playListData={playListData}
            currentPlayMusic={currentPlayMusic || playListData[0]}
            handleSelectMusic={handleSelectMusic}
          />
          <PlayerBar player={isOpenPlayer} openPlaylist={openPlaylist} currentPlayMusic={currentPlayMusic || playListData[0]} />
        </>
      )}
    </div>
  );
}
