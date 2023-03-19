import React from 'react';
import { useRouter } from 'next/router';

export default function HomeDetail(): JSX.Element {
   const router = useRouter();
   return (
      <>
         <div>Detail</div>
         <div>{router.query.id}</div>
      </>
   );
}
