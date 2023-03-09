import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  return (
    <section>
      <div className="section-wrap">main section</div>

      <style jsx>{`
        section {
          background-color: skyblue;
          marign: 0 auto;
          padding: 40px 80px;
        }
      `}</style>
    </section>
  );
}
