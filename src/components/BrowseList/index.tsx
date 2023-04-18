// import { React } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentPlayMusic,
  setPlayingMusic,
  setPlayedProgress,
  setOriginalPlaylistData,
  setCopyPlaylistData,
} from '@/store/playerSlice';

import { FaPlay } from 'react-icons/fa';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { FiFolderPlus } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import * as style from './BrowseList.style';

type BrowseListProps = {
  BrowseListData: any;
};

function BrowseList({ BrowseListData }: BrowseListProps): JSX.Element {
  const dispatch = useDispatch();
  const setCurrentMusic = (index: number) => {
    console.log(BrowseListData.trackList[index]);
    dispatch(setCurrentPlayMusic(BrowseListData.trackList[index]));
    dispatch(setPlayingMusic(true));
    dispatch(setPlayedProgress(0));
    dispatch(setOriginalPlaylistData(BrowseListData.trackList[index]));
    dispatch(setCopyPlaylistData(BrowseListData.trackList[index]));
  };
  const currentPlayMusic = useSelector((state: any) => state.playerStore.currentMusicValue);

  console.log(currentPlayMusic);
  

  const musicPlay = (data: any, index: any) => {
    console.log('음악 ID :', data.musicId);
    setCurrentMusic(index);
  };

  const addPlayList = (data: any) => {
    console.log('재생 목록 추가', data);
  };

  const addMyList = (data: any) => {
    console.log('내 목록에 추가', data);
  };

  return (
    <div className="browse-list">
      <style.browseHead>
        {!BrowseListData ? null : (
          <style.GridWrap>
            <div className="browse-list-head-item">
              <label htmlFor="all-select">
                <input type="checkbox" name="rank" id="all-select" />
              </label>
            </div>
            {BrowseListData.trackListHeader.map((item: any, index: any) => (
              <div className="browse-list-head-item" key={index + 1}>
                {item.label}
              </div>
            ))}
          </style.GridWrap>
        )}
      </style.browseHead>
      {!BrowseListData ? null : (
        <div className="browse-list-body">
          {BrowseListData.trackList.map((item: any, index: any) => (
            <style.GridWrap key={index}>
              <div className="browse-list-body-item">
                <label htmlFor={`rank=${index}`}>
                  <input type="checkbox" name="rank" id={`rank-${index}`} />
                </label>
              </div>
              <div className="browse-list-body-item num">{index + 1}</div>
              <div className="browse-list-body-item">
                <style.ThumnailBox>
                  <style.ThumnailImg>
                    <Link href="">
                      <Image src={item.album.imgList[0].url} alt="" width={60} height={60} quality={100} />
                    </Link>
                  </style.ThumnailImg>
                  <div className="album-desc">
                    <p className="tit">{item.name}</p>
                    <p className="desc">
                      {item.representationArtist.name} &lsquo;{item.album.title}&rsquo;
                    </p>
                  </div>
                </style.ThumnailBox>
              </div>
              <div className="browse-list-body-item artist-name">
                <p>{item.representationArtist.name}</p>
              </div>
              <div className="browse-list-body-item">
                <style.iconButton type="button" onClick={() => musicPlay(item, index)}>
                  <FaPlay />
                  <span className="blind">재생</span>
                </style.iconButton>
              </div>
              <div className="browse-list-body-item">
                <style.iconButton fontSize="20px" type="button" onClick={() => addPlayList(item)}>
                  <MdFormatListBulletedAdd />
                  <span className="blind">재생목록</span>
                </style.iconButton>
              </div>
              <div className="browse-list-body-item">
                <style.iconButton fontSize="20px" onClick={() => addMyList(item)}>
                  <FiFolderPlus />
                  <span className="blind">내 리스트</span>
                </style.iconButton>
              </div>
              <div className="browse-list-body-item">
                <style.iconButton fontSize="20px" type="button">
                  <BsThreeDotsVertical />
                  <span className="blind">더보기</span>
                </style.iconButton>
              </div>
            </style.GridWrap>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseList;
