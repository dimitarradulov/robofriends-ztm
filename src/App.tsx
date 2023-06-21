import { Component, ReactNode } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robot } from './model/robot.model';

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
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField)
    );

    const loading = <p className="f3 tc">Loading...</p>;

    if (!this.state.robots.length) return loading;

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
