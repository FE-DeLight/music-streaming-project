import React from 'react';

export default function about({ bookList }: any): JSX.Element {
  return (
    <div>
      <h1>About</h1>
      <ul>
        {bookList.data.map((book: any) => (
          <li key={book.id}>
            <span>{book.title}</span> : <span>{book.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/book', {
    headers: {
      Accept: 'application/json',
    },
  });
  const bookList = await res.json();

  return {
    props: {
      bookList,
    },
  };
}
