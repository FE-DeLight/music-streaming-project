import {
  BrowseList,
  BrowseHead,
  BrowseBody,
  BrowseBodyRow,
} from "@/components/BrowseList/index";

export default function browse() {
  return (
    <BrowseList>
      <BrowseHead>
        <div className="browse-list-head-item">
          <label htmlFor="rank-0">
            <input type="checkbox" name="rank" id="rank-0" />
          </label>
        </div>
        <div className="browse-list-head-item">순위</div>
        <div className="browse-list-head-item">곡/앨범</div>
        <div className="browse-list-head-item">아티스트</div>
        <div className="browse-list-head-item">듣기</div>
        <div className="browse-list-head-item">재생목록</div>
        <div className="browse-list-head-item">내 리스트</div>
        <div className="browse-list-head-item">더보기</div>
      </BrowseHead>
      <BrowseBody>
        <BrowseBodyRow>
          <div className="browse-list-body-item">
            <label htmlFor="rank-1">
              <input type="checkbox" name="rank" id="rank-1" />
            </label>
          </div>
          <div className="browse-list-body-item">1</div>
          <div className="browse-list-body-item">
            <div>
              <p>Ditto</p>
              <p>NewJeans &lsquo;OMG&rsquo;</p>
            </div>
          </div>
          <div className="browse-list-body-item">
            <p>NewJeans</p>
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
        </BrowseBodyRow>
        <BrowseBodyRow>
          <div className="browse-list-body-item">
            <label htmlFor="rank-2">
              <input type="checkbox" name="rank" id="rank-2" />
            </label>
          </div>
          <div className="browse-list-body-item">2</div>
          <div className="browse-list-body-item">
            <div>
              <p>Hype Boy</p>
              <p>NewJeans 1st EP &lsquo;New Jeans&rsquo;</p>
            </div>
          </div>
          <div className="browse-list-body-item">
            <p>NewJeans</p>
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
        </BrowseBodyRow>
      </BrowseBody>
    </BrowseList>
  );
}
