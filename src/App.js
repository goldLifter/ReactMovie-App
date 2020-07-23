import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Poster from './components/Poster/Poster'
import MovieList from './components/MovieList/MovieList'
import MovieListItem from './components/MovieListItem/MovieListItem'
import MovieStartPage from './components/MovieStartPage/MovieStartPage'

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
          <Route exact path="/" render={() => <Poster><div className="jumbotron"><h2 className=" text-center">Hello React Movies App</h2><MovieStartPage /></div></Poster>} />
          {/* <Route path="/movies"  component={MovieList} /> */}
          <Route path="/movies/page/:id" 
          render={({ match }) => {
              const {id} = match.params;
              return <MovieList  itemId={id}  />
            }}
            exact />
          <Route path="/movies/:id"
            render={({ match }) => {
              const {id} = match.params;
              return <MovieListItem  itemId={id}  />
            }}
            exact
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;