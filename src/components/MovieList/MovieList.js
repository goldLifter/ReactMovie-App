import React from 'react';
import { Link } from 'react-router-dom'
import './MovieList.css'
import ApiService from '../../api'
import Poster from '../Poster/Poster';
import Loader from '../Loader/Loader'
import { withRouter } from 'react-router-dom'

class MovieList extends React.Component {
    state = {
        results: [],
        loading: true,
        page: 1
    }

    componentDidMount() {
        this.onLoadingPage(this.state.page);
    }

    onLoadingPage = () => {
        let api = new ApiService();
        return api.getTopMovies().then((body) => {
            this.setState({
                results: body,
                loading: false
            })
        });
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Poster>
                    <section className="jumbotron">
                        <div className="container">
                            <h1 id="title-movie-page" className=" movie-list-title text-center">Movie List top 20</h1>
                            {this.state.loading ? <Loader /> :
                                <MovieListView results={this.state.results.results} />}
                        </div>
                    </section>
                </Poster>
            </React.Fragment>
        )
    }
}

export default withRouter(MovieList);


const MovieListView = (props) => {
    return (
        <div className="row">
            {
                props.results.map(res => {
                    return (
                        <div key={res.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <Link to={`/top/${res.id}`}>
                                <div className="card" >
                                    <div className="card-rating">{res.vote_average * 10}%</div>
                                    <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} className="card-img-top" alt="..." />
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
    )
}