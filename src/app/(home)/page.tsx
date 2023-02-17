import { use } from "react";
import styles from "./page.module.css";

export default function Home() {
  const data = use(getData());

  console.log("@@ : ", data);

  return (
    <div className={styles.wrap}>
      <h1>home</h1>
      <ul>
        {data.map((item: any) => (
          <li className={styles["list-item"]}>
            <span>{item.id}.</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}
