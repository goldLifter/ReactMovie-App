import React from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../api'

import './MovieStartPage.css'

class MovieStartPage extends React.Component{

    state={
        movie: []
    }

    componentDidMount() {
        let arr = new ApiService();
        arr.getAllMovies().then((movie) => {
            this.setState({
                movie: movie.results,
                loading: false
            })
        });
    }

    render() {
        console.log(this.state.movie)
        return(
            <div>
                <h3>Список фильмов</h3>
                <div className="movie-start-page">
                    {
                        this.state.movie.map(res => {
                            return(
                                <div key={res.id} >
                                    <Link to={`/movies/${res.id}`}>
                                        <div className="card card-page-start" >
                                            <div className="card-rating">{res.vote_average*10}%</div>
                                            <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} className="img-start-page" alt="..." />
                                            <div className="card-body">
                                                <p className="card-title">{res.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MovieStartPage;