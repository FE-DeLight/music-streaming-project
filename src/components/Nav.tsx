import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./route";
export default function Nav(): JSX.Element {
  const router = useRouter();
  return (
    <div className="nav__wrapper">
      {routes.map((route, index) => (
        <Link href={route.link} key={index} legacyBehavior>
          <a
            className={
              router.pathname === route.link ? "active nav__item" : "nav__item"
            }
          >
            {route.title}
          </a>
        </Link>
      ))}

      <style jsx>{`
        .nav__wrapper {
          display: flex;
          gap: 10px;
          margin-bottom: 3rem;
        }
        .nav__item {
          font-size: 2rem;
        }
        .active {
          color: orange;
        }
      `}</style>
    </div>
  );
}
