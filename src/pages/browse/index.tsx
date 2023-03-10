import { useEffect, useState } from "react";
import { BrowseList } from "@/components/BrowseList/index";

export default function Browse() {
  const [BrowseListData, setBrowseListData]: any = useState();
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/BrowseListData", {
      headers: {
        Accept: "application/json",
      },
    });

    setBrowseListData(await res.json());
  };
  useEffect(() => {
    getData();
  }, []);

  return <BrowseList BrowseListData={BrowseListData} />;
}
