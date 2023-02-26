import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HomeDetail(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div>Detail</div>
      <div>{router.query.id}</div>
    </>
  );
}
