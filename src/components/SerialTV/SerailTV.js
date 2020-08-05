import React from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../api'

import './SerialTV.css'

class SerialTV extends React.Component{

    state={
        movie: []
    }

    componentDidMount() {
        const api = new ApiService();
        api.getSerials().then((movie) => {
            this.setState({
                movie: movie.results,
                loading: false
            })
        });
    }

    render() {
        return(
            <div className='wrap'>
                <h3 className="serial-title">{this.props.title}</h3>
                <div className="movie-serial-page">
                    {
                        this.state.movie.map(res => {
                            return(
                                <div className="tocard" key={res.id} >
                                    <Link to={`/tv/${res.id}`}>
                                        <div className="card card-page-serial" >
                                            <div className="card-rating">{res.vote_average*10}%</div>
                                            <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} className="img-start-page" alt="..." />
                                            <div className="card-body">
                                                <p className="card-title">{res.name}</p>
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

export default SerialTV;