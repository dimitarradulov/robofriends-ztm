import { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { requestRobots, setSearchField } from '../actions';
import Header from '../components/Header';

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App: React.FC<any> = (props) => {
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const filteredRobots = props.robots.filter((robot: any) =>
    robot.name.toLowerCase().includes(props.searchField)
  );

  const loading = <p className="f3 tc">Loading...</p>;

  if (props.isPending) return loading;

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={props.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
