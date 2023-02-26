import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [bookList, setBooList]: any = useState();
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/book", {
      headers: {
        Accept: "application/json",
      },
    });

    setBooList(await res.json());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {!bookList ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {bookList.data.map((book: any) => (
            <li key={book.id}>
              <span>{book.title}</span> : <span>{book.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
