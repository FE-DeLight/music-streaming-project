export default function Head() {
  return (
    <>
      <title>Next.js boilerplate</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* 홈페이지 주제 */}
      <meta http-equiv="Subject" content="Next.js v.13 boilerplate" />
      {/* 제목 */}
      <meta http-equiv="Title" content="Next.js v.13 boilerplate" />
      {/* 제작자 */}
      <meta http-equiv="Author" content="fd.dongle" />
      {/* 배포자 */}
      <meta http-equiv="Distribution" content="fd.dongle" />
      {/* 검색 엔진에 의해 검색되는 단어 지정 */}
      <meta
        name="Keywords"
        content="Next, Next.js, Next.js 13, Next.js boilerplate, Next.js 13 boilerplate"
      />

      {/* 캐쉬 설정 */}
      <meta http-equiv="Cache-Control" content="no-cache" />
      <meta http-equiv="Pragma" content="no-cache" />

      {/* 날짜(제작일) */}
      <meta name="Date" content="2023-02" />

      {/* 검색엔진 노출 여부 설정 (수집 대상으로 설정) */}
      <meta name="Robots" content="Index" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
