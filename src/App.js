import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Poster from './components/Poster/Poster'
import MovieList from './components/MovieList/MovieList'
import MovieListItem from './components/MovieListItem/MovieListItem'
import MovieStartPage from './components/MovieStartPage/MovieStartPage'
import SerialTV from './components/SerialTV/SerailTV'
import SerialDetails from './components/SerialDetails/SerialDetails';

class App extends React.Component {

  state = {
    results: [],
    page: 1
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <Header />
          <Route exact path="/" render={() => <Poster><div className="jumbotron"><h2 className=" text-center">Hello React Movies App</h2><MovieStartPage title='Популярные фильмы' /><SerialTV title='Популярные Сериалы' /></div></Poster>} />
          {/* <Route path="/movies"  component={MovieList} /> */}
          <Route exact path="/top" component={MovieList} />
          <Route path="/top/:id"
            render={({ match }) => {
              const {id} = match.params;
              
              console.log(match)
              return <MovieListItem  itemId={ id } />
            }}
            exact
          />
          <Route path="/tv/:id"
            render={({ match }) => {
              const {id} = match.params;
              
              console.log(match)
              return <SerialDetails  itemId={ id } />
            }}
            exact
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;