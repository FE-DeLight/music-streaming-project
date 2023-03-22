import React, { useEffect, useState } from 'react';
import PlayerList from './PlayerList';
import PlayerBar from './PlayerBar';

export default function Index(): JSX.Element {
  const [player, setPlayer] = useState(false);
  const [PlayerListData, setPlayerListData]: any = useState();
  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categoryList');
    setPlayerListData(await res.json());
  };
  useEffect(() => {
    getData();
    console.log(PlayerListData);
  }, []);

  const musicListData: {
    thumb: string;
    title: string;
    singer: string;
    lyrics?: string;
  }[] = [
    {
      thumb: '/album_thumb_01.jpg',
      title: 'MAGIC!',
      singer: 'Zior Park',
      lyrics:
        'I was a machine\n' +
        'it was my choice\n' +
        'no love in my pockets\n' +
        'Stick to the plan for the cash\n' +
        'I used to be built this way\n' +
        'Only businessman\n' +
        'can survive in this damn system\n' +
        'What the heck\n' +
        "I didn't care before I met you\n" +
        'You make a crack in my brain\n' +
        'You make me feel the earthquake\n' +
        'You make the movie effects\n' +
        'Around you Is that a new tech\n' +
        'My heart is just pumping\n' +
        "In the mirror there's a puppy\n" +
        'Did you just cast\n' +
        'a magic spell on me\n' +
        'The Bible says\n' +
        '“the love is the greatest”\n' +
        'Finally I added the love system\n' +
        'I feel like you you feel like me\n' +
        "Maybe we're connected\n" +
        'by this system\n' +
        'All the senses that I forgot\n' +
        'I just turned on thru my whole body\n' +
        'Are you a sorceress\n' +
        'are you an angel\n' +
        "Now I'm confused\n" +
        "but don't speak out\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        "Where are you going'\n" +
        'Stay here with me all night\n' +
        'You need to teach me more about\n' +
        'your magical world\n' +
        'How can I ignore it\n' +
        "I can't remove it from my head\n" +
        "since I've experienced you\n" +
        '24/7 all day\n' +
        'high enough from your atmosphere\n' +
        "It's supernatural\n" +
        "I think there's no expression to\n" +
        'explain your magic\n' +
        "I'm just enjoying your spell\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'You turned on my vision\n' +
        'Now look\n' +
        "we're under the rainbow sky\n" +
        'You just turned off my fan\n' +
        'Finally I know what is the love\n' +
        'How beautiful\n' +
        'all the rocks are like magic',
    },
    {
      thumb: '/album_thumb_02.jpg',
      title: 'Freshman',
      singer: '페퍼톤스 (PEPPERTONES)',
    },
    {
      thumb: '/album_thumb_03.jpg',
      title: 'Hype Boy',
      singer: 'NewJeans',
    },
    {
      thumb: '/album_thumb_04.jpg',
      title: '사건의 지평선',
      singer: '윤하',
    },
    {
      thumb: '/album_thumb_05.jpg',
      title: 'After LIKE',
      singer: 'IVE (아이브)',
    },
    {
      thumb: '/album_thumb_01.jpg',
      title: 'MAGIC!',
      singer: 'Zior Park',
      lyrics:
        'I was a machine\n' +
        'it was my choice\n' +
        'no love in my pockets\n' +
        'Stick to the plan for the cash\n' +
        'I used to be built this way\n' +
        'Only businessman\n' +
        'can survive in this damn system\n' +
        'What the heck\n' +
        "I didn't care before I met you\n" +
        'You make a crack in my brain\n' +
        'You make me feel the earthquake\n' +
        'You make the movie effects\n' +
        'Around you Is that a new tech\n' +
        'My heart is just pumping\n' +
        "In the mirror there's a puppy\n" +
        'Did you just cast\n' +
        'a magic spell on me\n' +
        'The Bible says\n' +
        '“the love is the greatest”\n' +
        'Finally I added the love system\n' +
        'I feel like you you feel like me\n' +
        "Maybe we're connected\n" +
        'by this system\n' +
        'All the senses that I forgot\n' +
        'I just turned on thru my whole body\n' +
        'Are you a sorceress\n' +
        'are you an angel\n' +
        "Now I'm confused\n" +
        "but don't speak out\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        "Where are you going'\n" +
        'Stay here with me all night\n' +
        'You need to teach me more about\n' +
        'your magical world\n' +
        'How can I ignore it\n' +
        "I can't remove it from my head\n" +
        "since I've experienced you\n" +
        '24/7 all day\n' +
        'high enough from your atmosphere\n' +
        "It's supernatural\n" +
        "I think there's no expression to\n" +
        'explain your magic\n' +
        "I'm just enjoying your spell\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'You turned on my vision\n' +
        'Now look\n' +
        "we're under the rainbow sky\n" +
        'You just turned off my fan\n' +
        'Finally I know what is the love\n' +
        'How beautiful\n' +
        'all the rocks are like magic',
    },
    {
      thumb: '/album_thumb_02.jpg',
      title: 'Freshman',
      singer: '페퍼톤스 (PEPPERTONES)',
    },
    {
      thumb: '/album_thumb_03.jpg',
      title: 'Hype Boy',
      singer: 'NewJeans',
    },
    {
      thumb: '/album_thumb_04.jpg',
      title: '사건의 지평선',
      singer: '윤하',
    },
    {
      thumb: '/album_thumb_05.jpg',
      title: 'After LIKE',
      singer: 'IVE (아이브)',
    },
    {
      thumb: '/album_thumb_01.jpg',
      title: 'MAGIC!',
      singer: 'Zior Park',
      lyrics:
        'I was a machine\n' +
        'it was my choice\n' +
        'no love in my pockets\n' +
        'Stick to the plan for the cash\n' +
        'I used to be built this way\n' +
        'Only businessman\n' +
        'can survive in this damn system\n' +
        'What the heck\n' +
        "I didn't care before I met you\n" +
        'You make a crack in my brain\n' +
        'You make me feel the earthquake\n' +
        'You make the movie effects\n' +
        'Around you Is that a new tech\n' +
        'My heart is just pumping\n' +
        "In the mirror there's a puppy\n" +
        'Did you just cast\n' +
        'a magic spell on me\n' +
        'The Bible says\n' +
        '“the love is the greatest”\n' +
        'Finally I added the love system\n' +
        'I feel like you you feel like me\n' +
        "Maybe we're connected\n" +
        'by this system\n' +
        'All the senses that I forgot\n' +
        'I just turned on thru my whole body\n' +
        'Are you a sorceress\n' +
        'are you an angel\n' +
        "Now I'm confused\n" +
        "but don't speak out\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        "Where are you going'\n" +
        'Stay here with me all night\n' +
        'You need to teach me more about\n' +
        'your magical world\n' +
        'How can I ignore it\n' +
        "I can't remove it from my head\n" +
        "since I've experienced you\n" +
        '24/7 all day\n' +
        'high enough from your atmosphere\n' +
        "It's supernatural\n" +
        "I think there's no expression to\n" +
        'explain your magic\n' +
        "I'm just enjoying your spell\n" +
        'Your magic makes me forget\n' +
        "what I'm going through\n" +
        "It doesn't matter\n" +
        "I'm happy though im lost\n" +
        "I'm not curious about\n" +
        'the reason of this feeling\n' +
        'I do not get it quite\n' +
        'with my knowledge\n' +
        "but don't tell me\n" +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        'How beautiful\n' +
        'all the rocks are like magic\n' +
        'How wonderful\n' +
        'all the creatures are like magic\n' +
        "I didn't realize\n" +
        "that I'm living in this blessing\n" +
        'But you opened my mind\n' +
        'I can feel your magic\n' +
        "I didn't see the future\n" +
        'but now I can imagine it\n' +
        "I didn't feel the love\n" +
        "but now I do it's magic!\n" +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'Your love is magic!\n' +
        'Your love is amazing!\n' +
        'You turned on my vision\n' +
        'Now look\n' +
        "we're under the rainbow sky\n" +
        'You just turned off my fan\n' +
        'Finally I know what is the love\n' +
        'How beautiful\n' +
        'all the rocks are like magic',
    },
    {
      thumb: '/album_thumb_02.jpg',
      title: 'Freshman',
      singer: '페퍼톤스 (PEPPERTONES)',
    },
    {
      thumb: '/album_thumb_03.jpg',
      title: 'Hype Boy',
      singer: 'NewJeans',
    },
    {
      thumb: '/album_thumb_04.jpg',
      title: '사건의 지평선',
      singer: '윤하',
    },
    {
      thumb: '/album_thumb_05.jpg',
      title: 'After LIKE',
      singer: 'IVE (아이브)',
    },
  ];

  const currentPlayMusic: {
    thumb: string;
    title: string;
    singer: string;
    lyrics: string;
  } = {
    thumb: '/album_thumb_01.jpg',
    title: 'MAGIC!',
    singer: 'Zior Park',
    lyrics:
      'I was a machine\n' +
      'it was my choice\n' +
      'no love in my pockets\n' +
      'Stick to the plan for the cash\n' +
      'I used to be built this way\n' +
      'Only businessman\n' +
      'can survive in this damn system\n' +
      'What the heck\n' +
      "I didn't care before I met you\n" +
      'You make a crack in my brain\n' +
      'You make me feel the earthquake\n' +
      'You make the movie effects\n' +
      'Around you Is that a new tech\n' +
      'My heart is just pumping\n' +
      "In the mirror there's a puppy\n" +
      'Did you just cast\n' +
      'a magic spell on me\n' +
      'The Bible says\n' +
      '“the love is the greatest”\n' +
      'Finally I added the love system\n' +
      'I feel like you you feel like me\n' +
      "Maybe we're connected\n" +
      'by this system\n' +
      'All the senses that I forgot\n' +
      'I just turned on thru my whole body\n' +
      'Are you a sorceress\n' +
      'are you an angel\n' +
      "Now I'm confused\n" +
      "but don't speak out\n" +
      'Your magic makes me forget\n' +
      "what I'm going through\n" +
      "It doesn't matter\n" +
      "I'm happy though im lost\n" +
      "I'm not curious about\n" +
      'the reason of this feeling\n' +
      'I do not get it quite\n' +
      'with my knowledge\n' +
      "but don't tell me\n" +
      'How beautiful\n' +
      'all the rocks are like magic\n' +
      'How wonderful\n' +
      'all the creatures are like magic\n' +
      "I didn't realize\n" +
      "that I'm living in this blessing\n" +
      'But you opened my mind\n' +
      'I can feel your magic\n' +
      'How beautiful\n' +
      'all the rocks are like magic\n' +
      'How wonderful\n' +
      'all the creatures are like magic\n' +
      "I didn't realize\n" +
      "that I'm living in this blessing\n" +
      'But you opened my mind\n' +
      'I can feel your magic\n' +
      "I didn't see the future\n" +
      'but now I can imagine it\n' +
      "I didn't feel the love\n" +
      "but now I do it's magic!\n" +
      "Where are you going'\n" +
      'Stay here with me all night\n' +
      'You need to teach me more about\n' +
      'your magical world\n' +
      'How can I ignore it\n' +
      "I can't remove it from my head\n" +
      "since I've experienced you\n" +
      '24/7 all day\n' +
      'high enough from your atmosphere\n' +
      "It's supernatural\n" +
      "I think there's no expression to\n" +
      'explain your magic\n' +
      "I'm just enjoying your spell\n" +
      'Your magic makes me forget\n' +
      "what I'm going through\n" +
      "It doesn't matter\n" +
      "I'm happy though im lost\n" +
      "I'm not curious about\n" +
      'the reason of this feeling\n' +
      'I do not get it quite\n' +
      'with my knowledge\n' +
      "but don't tell me\n" +
      'How beautiful\n' +
      'all the rocks are like magic\n' +
      'How wonderful\n' +
      'all the creatures are like magic\n' +
      "I didn't realize\n" +
      "that I'm living in this blessing\n" +
      'But you opened my mind\n' +
      'I can feel your magic\n' +
      'How beautiful\n' +
      'all the rocks are like magic\n' +
      'How wonderful\n' +
      'all the creatures are like magic\n' +
      "I didn't realize\n" +
      "that I'm living in this blessing\n" +
      'But you opened my mind\n' +
      'I can feel your magic\n' +
      "I didn't see the future\n" +
      'but now I can imagine it\n' +
      "I didn't feel the love\n" +
      "but now I do it's magic!\n" +
      'Your love is magic!\n' +
      'Your love is amazing!\n' +
      'Your love is magic!\n' +
      'Your love is amazing!\n' +
      'Your love is magic!\n' +
      'Your love is amazing!\n' +
      'Your love is magic!\n' +
      'Your love is amazing!\n' +
      'You turned on my vision\n' +
      'Now look\n' +
      "we're under the rainbow sky\n" +
      'You just turned off my fan\n' +
      'Finally I know what is the love\n' +
      'How beautiful\n' +
      'all the rocks are like magic',
  };

  const openPlaylist = (e: any): void => {
    e.preventDefault();
    setPlayer(!player);
  };

  return (
    <div className="player">
      <PlayerList
        player={player}
        openPlaylist={openPlaylist}
        musicListData={musicListData}
        currentPlayMusic={currentPlayMusic}
      />
      <PlayerBar player={player} openPlaylist={openPlaylist} currentPlayMusic={currentPlayMusic} />
    </div>
  );
}
