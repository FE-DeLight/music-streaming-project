import {useState} from "react";
import PlayerList from "./PlayerList"
import PlayerBar from "./PlayerBar"

export default function Index(): JSX.Element {

  const [player, setPlayer] = useState(false);

  const openPlaylist = () => {
    setPlayer(!player);
  };

  return (
    <div className="player">
      <PlayerList player={player} openPlaylist={openPlaylist} />
      <PlayerBar player={player} openPlaylist={openPlaylist} />
    </div>
  );
}
