import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./route";
export default function Nav(): JSX.Element {
  const router = useRouter();
  return (
    <header>
      <div className="header-left">
        <h1>
          <Link href="/">
            <svg
              data-v-36748a16=""
              width="55"
              height="23"
              viewBox="0 0 55 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8009 18.3051H31.4211V22.4533H22.4807C20.3597 22.4533 18.6415 20.7338 18.6415 18.614V0.334047H22.9783V17.4814C22.9783 17.9356 23.3467 18.304 23.8009 18.304V18.3051ZM14.3503 0.664663C13.7589 0.995278 11.9262 1.84756 9.76402 1.76405C6.78849 1.64965 6.60773 0.613183 3.22264 0.725295C1.64278 0.777919 0.657799 1.24009 0 1.74574V5.99684C0 6.09408 0.110968 6.14785 0.187616 6.08721C0.760759 5.63305 1.89789 5.12397 3.42284 5.07134C6.586 4.96038 6.98411 6.014 9.90359 6.10895C12.2099 6.18331 13.9099 5.32417 14.5219 4.95694V0.765335C14.5219 0.676103 14.427 0.621191 14.3492 0.664663H14.3503ZM14.3618 8.91975C13.7371 9.18745 12.0875 9.79834 10.193 9.7869C7.24952 9.7686 6.53566 8.76989 3.68825 8.84425C1.79379 8.89459 0.608607 9.52035 0 10.1999V22.4533H4.3369V13.0839C7.22778 13.0702 7.54696 13.9167 10.3703 14.0529C12.5439 14.1581 13.9842 13.4694 14.5219 13.2429V9.02615C14.5219 8.94263 14.4373 8.88658 14.3606 8.91975H14.3618ZM55 11.44C55 17.7583 49.8783 22.88 43.56 22.88C37.2417 22.88 32.12 17.7583 32.12 11.44C32.12 5.12168 37.2417 0 43.56 0C49.8783 0 55 5.12168 55 11.44ZM50.6311 11.44C50.6311 7.44743 47.4656 4.21106 43.56 4.21106C39.6544 4.21106 36.489 7.44743 36.489 11.44C36.489 15.4325 39.6544 18.6689 43.56 18.6689C47.4656 18.6689 50.6311 15.4325 50.6311 11.44Z"
                fill="black"
              ></path>
            </svg>
          </Link>
        </h1>
        <ul className="nav">
          <li>
            <Link href="#" legacyBehavior>
              <a className="header-link">둘러보기</a>
            </Link>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <a className="header-link">보관함</a>
            </Link>
          </li>
        </ul>
        <div className="search-wrap">
          <input type="text" placeholder="검색어를 입력하세요." />
        </div>
      </div>

      <div className="header-right">
        <div className="flo-items">
          <ul>
            <li>
              <Link href="#" legacyBehavior>
                <a className="header-link">로그인</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="header-link">회원가입</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 80px;
        }
        .header-left {
          display: flex;
          align-items: center;
        }
        header ul {
          display: flex;
        }
        header ul > li + li {
          margin-left: 10px;
        }
        .header-link {
          display: inline-block;
          padding: 15px;
        }
        .nav {
          margin-left: 40px;
        }
        .search-wrap {
          margin-left: 40px;
        }
        .flo-items {
          font-size: 13px;
          color: #8c8c8c;
        }
      `}</style>
    </header>
  );
}
