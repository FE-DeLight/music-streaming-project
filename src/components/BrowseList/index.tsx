import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            {BrowseListData.data.header.map((item: any, index: any) => (
              <div className="browse-list-head-item" key={index + 1}>
                {item}
              </div>
            ))}
          </style.GridWrap>
        )}
      </style.browseHead>
      {!BrowseListData ? null : (
        <div className="browse-list-body">
          {BrowseListData.data.list.map((item: any, index: any) => (
            <style.GridWrap key={index}>
              <div className="browse-list-body-item">
                <label htmlFor={`rank=${index}`}>
                  <input type="checkbox" name="rank" id={`rank-${index}`} />
                </label>
              </div>
              <div className="browse-list-body-item">{item.lank}</div>
              <div className="browse-list-body-item">
                <style.ThumnailBox>
                  <style.ThumnailImg>
                    <Link href="">
                      <Image src={item.album.cover} alt="" width={60} height={60} quality={100} />
                    </Link>
                  </style.ThumnailImg>
                  <div className="album-desc">
                    <p>{item.album.title}</p>
                    <p>
                      {item.album.artist} &lsquo;{item.album.albumTitle}&rsquo;
                    </p>
                  </div>
                </style.ThumnailBox>
              </div>
              <div className="browse-list-body-item">
                <p>{item.album.artist}</p>
              </div>
              <div className="browse-list-body-item">
                <button type="button">
                  <span>재생</span>
                </button>
              </div>
              <div className="browse-list-body-item">
                <button type="button">
                  <span>재생목록</span>
                </button>
              </div>
              <div className="browse-list-body-item">
                <button type="button">
                  <span>내 리스트</span>
                </button>
              </div>
              <div className="browse-list-body-item">
                <button type="button">
                  <span>더보기</span>
                </button>
              </div>
            </style.GridWrap>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseList;
