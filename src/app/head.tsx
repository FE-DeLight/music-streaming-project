export default function Head() {
  return (
    <>
      <title>Dlo</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* 홈페이지 주제 */}
      <meta httpEquiv="Subject" content="music streaming site" />
      {/* 제목 */}
      <meta httpEquiv="Title" content="music streaming site" />
      {/* 제작자 */}
      <meta httpEquiv="Author" content="fd.dongle" />
      {/* 배포자 */}
      <meta httpEquiv="Distribution" content="fd.dongle" />
      {/* 검색 엔진에 의해 검색되는 단어 지정 */}
      <meta name="Keywords" content="music streaming, music" />

      {/* 캐쉬 설정 */}
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />

      {/* 날짜(제작일) */}
      <meta name="Date" content="2023-02" />

      {/* 검색엔진 노출 여부 설정 (수집 대상으로 설정) */}
      <meta name="Robots" content="Index" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
