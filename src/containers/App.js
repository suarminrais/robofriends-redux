import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import { searchChange, requestRobots } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: event => (dispatch(searchChange(event.target.value))),
  onRequestRobots: () => dispatch(requestRobots())
})

const mapStateToProps = state => ({
  searchField: state.searchRobot.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending
})

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    console.log(this.props)
    const { onSearchChange, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <Fragment>
        <section className="tc">
          <h1 className="f1 ttu">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            {
              isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                  <CardList robots={filteredRobots} />
                </ErrorBoundry>
            }
          </Scroll>
        </section>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);