import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { FiFolderPlus } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import * as style from './BrowseList.style';

type BrowseListProps = {
  BrowseListData: any;
};

function BrowseList({ BrowseListData }: BrowseListProps): JSX.Element {
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
              <div className="browse-list-body-item num">{index}</div>
              <div className="browse-list-body-item">
                <style.ThumnailBox>
                  <style.ThumnailImg>
                    <Link href="">
                      <Image src={item.album.art} alt="" width={60} height={60} quality={100} />
                    </Link>
                  </style.ThumnailImg>
                  <div className="album-desc">
                    <p className="tit">{item.album.title}</p>
                    <p className="desc">
                      {item.artist} &lsquo;{item.album.title}&rsquo;
                    </p>
                  </div>
                </style.ThumnailBox>
              </div>
              <div className="browse-list-body-item artist-name">
                <p>{item.artist}</p>
              </div>
              <div className="browse-list-body-item center">
                <style.iconButton>
                  <FaPlay />
                  <span className="blind">재생</span>
                </style.iconButton>
              </div>
              <div className="browse-list-body-item center">
                <style.iconButton fontSize="20px">
                  <MdFormatListBulletedAdd />
                  <span className="blind">재생목록</span>
                </style.iconButton>
              </div>
              <div className="browse-list-body-item center">
                <style.iconLink fontSize="20px">
                  <FiFolderPlus />
                  <span className="blind">내 리스트</span>
                </style.iconLink>
              </div>
              <div className="browse-list-body-item center">
                <style.iconButton fontSize="20px">
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
