import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPlayer } from '@/store/oepnPlayerSlice'
import PlayerList from '@/components/Player/PlayerList';
import PlayerBar from '@/components/Player/PlayerBar';

export default function Index(): JSX.Element {
  const dispatch = useDispatch();

  const [playListData, setPlayListData]: any = useState();
  const [currentPlayMusic, setCurrentPlayMusic] = useState();

  const getData = async () => {
    const res = await (await fetch('http://localhost:3000/api/categoryList')).json();
    setPlayListData(await res.data.playList.trackList);
  };  

  const openPlaylist = (e: any): boolean | void => {
    e.preventDefault();
    dispatch(setOpenPlayer())
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
            playListData={playListData}
            currentPlayMusic={currentPlayMusic || playListData[0]}
            handleSelectMusic={handleSelectMusic}
          />
          <PlayerBar currentPlayMusic={currentPlayMusic || playListData[0]} />
        </>
      )}
    </div>
  );
}
