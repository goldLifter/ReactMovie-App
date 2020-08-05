import React from 'react'
import ApiService from '../../api'
import Poster from '../Poster/Poster';
// import './MovieListItem.css'
import Loader from '../Loader/Loader';

class SerialDetails extends React.Component {

    state = {
        movie: [],
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    updatePerson() {
        const { itemId } = this.props;
        const api = new ApiService()

        return api
            .getSerailDetails(itemId)
            .then(movie => {
                this.setState({
                    movie: [movie],
                    loading: false
                })
            })
    }

    render() {
        console.log(this.state.movie)
        const _POSTER = 'https://image.tmdb.org/t/p/w500'
        return (
            <React.Fragment>
                {
                    this.state.loading ? <Loader /> :
                        this.state.movie.map(res => {
                            return (
                                <Poster key={res.id} poster={`${res.backdrop_path}`} title={res.name}>
                                    <div className="jumbotron">
                                        <div className="desc_movie row justify-content-between">
                                            <div className='col-12 col-md-3'>
                                                <img className="poster_img_item" src={`${_POSTER}${res.poster_path}`} alt="" />
                                                <ul className=" list-group list-group-view">
                                                    <li className="text-center list-group-item">
                                                        <span>Дата релиза: {res.release_date}</span>
                                                    </li>
                                                    <li className="text-center list-group-item">
                                                        <span>Статус: {res.status}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                                                <h4 className="title text-center">{res.name}</h4>
                                                <p className="list-group-item">{res.overview === "" ? "Описание отсутствует" : res.overview}</p>
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

export default SerialDetails;