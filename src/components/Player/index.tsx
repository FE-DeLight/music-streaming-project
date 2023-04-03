import PlayerList from '@/components/Player/PlayerList';
import PlayerBar from '@/components/Player/PlayerBar';

export default function Index(): JSX.Element {
  return (
    <div className="player">
          <PlayerList />
          <PlayerBar />
    </div>
  );
}
