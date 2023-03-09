import * as style from "./BrowseList.style";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export const BrowseList = (): JSX.Element => {
  const [BrowseListData, setBrowseListData]: any = useState();
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/BrowseListData", {
      headers: {
        Accept: "application/json",
      },
    });

    setBrowseListData(await res.json());
  };
  BrowseListData ? console.log(BrowseListData.data.header) : null;

  useEffect(() => {
    getData();
  }, []);

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
                <label htmlFor={"rank=" + { index }}>
                  <input type="checkbox" name="rank" id={"rank-" + { index }} />
                </label>
              </div>
              <div className="browse-list-body-item">{item.lank}</div>
              <div className="browse-list-body-item">
                <style.ThumnailBox>
                  <style.ThumnailImg>
                    <Link href="">
                      <Image
                        src={item.album.cover}
                        alt=""
                        width={60}
                        height={60}
                        quality={100}
                      />
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
};
