import React from 'react';
import postData from '@/service/api';

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
  const bookList = await postData({ url: 'http://localhost:3000/api/book' });

  return {
    props: {
      bookList,
    },
  };
}
