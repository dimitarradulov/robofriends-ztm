import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robot } from '../models/robot.model';
import Scroll from './Scroll';

interface RobotsState {
  data: Robot[];
  searchField: string;
}

const App = () => {
  const [robots, setRobots] = useState<RobotsState>({
    data: [],
    searchField: '',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) =>
        setRobots((currentRobotsValue) => ({
          ...currentRobotsValue,
          data: res,
        }))
      );
  }, []);

  function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRobots((currentRobotsValue) => ({
      ...currentRobotsValue,
      searchField: event.target.value.toLowerCase(),
    }));
  }

  const filteredRobots = robots.data.filter((robot) =>
    robot.name.toLowerCase().includes(robots.searchField)
  );

  const loading = <p className="f3 tc">Loading...</p>;

  if (!robots.data.length) return loading;

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
