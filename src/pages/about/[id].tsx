import { useRouter } from "next/router";

export default function Detail(): JSX.Element {
  const router = useRouter();
  return <div>Detail {router.query.id}</div>;
}
