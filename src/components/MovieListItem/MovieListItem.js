import React from 'react'
import ApiService from '../../api'
import Poster from '../Poster/Poster';
import './MovieListItem.css'
import Loader from '../Loader/Loader';

class MovieListItem extends React.Component {

    swapi = new ApiService();

    state = {
        movie: [],
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    updatePerson() {
        const { itemId } = this.props;

        this.swapi
        .getMovie(itemId)
        .then(movie => {
            this.setState({
                movie: [movie],
                loading: false
            })
        })
    }

    render(){
        const _POSTER = 'https://image.tmdb.org/t/p/w500'
        console.log(this.state.movie)
        return(
            <React.Fragment>
                    {
                        this.state.loading ? <Loader /> :
                        this.state.movie.map(res => {
                            return(
                                <Poster key={res.id} poster={`${res.backdrop_path}`} title={res.title}>
                                        <div className="jumbotron">
                                            <div className="desc_movie row justify-content-between">
                                                <div  className='col-12 col-md-3'>
                                                    <img className="poster_img_item" src={`${_POSTER}${res.poster_path}`} alt="" />
                                                    <ul className=" list-group list-group-view">
                                                        <li className="text-center list-group-item">
                                                            <span>Дата релиза: {res.release_date}</span>
                                                        </li>
                                                        <li className="text-center list-group-item">
                                                            <span>Статус: {res.status}</span>
                                                        </li>
                                                        <li className="text-center list-group-item">
                                                            <span>Страна: {res.production_countries[0].name}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                                                    <h4 className="title text-center">{res.title}</h4>
                                                    <p className="list-group-item">{res.overview ==="" ? "Описание отсутствует" : res.overview}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                            </div>
                                        </div>
                                </Poster>
                            )
                        })
                    }
            </React.Fragment>
        )
    }
    
}

export default MovieListItem;