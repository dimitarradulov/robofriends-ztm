import { Component, ReactNode } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robot } from '../models/robot.model';
import Scroll from './Scroll';

interface State {
  robots: Robot[];
  searchField: string;
}

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => this.setState({ robots: res }));
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevValue) => ({
      ...prevValue,
      searchField: event.target.value.toLowerCase(),
    }));
  };

  render(): ReactNode {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField)
    );

    const loading = <p className="f3 tc">Loading...</p>;

    if (!robots.length) return loading;

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;