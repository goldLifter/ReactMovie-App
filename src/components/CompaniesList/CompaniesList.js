import React from 'react'
import {Link} from 'react-router-dom'
import ApiService from '../../api'


export default class CompaniesList extends React.Component {


    state = {
        result: [],
        loading: true
    }

    componentDidMount() {
        const api = new ApiService()

        api.getCompanies(1).then((result) => {
            this.setState({
                result: result.results,
                loading: false
            })
        })
    }

    render() {
        return (
            <div className='wrap'>
                <h3>{this.props.title}</h3>
                <div className="movie-start-page">
                    {
                        this.state.result.map(res => {
                            return (
                                <div className="tocard" key={res.id} >
                                    <Link to={`/top/${res.id}`}>
                                        <div className="card card-page-start" >
                                            <div className="card-rating">{res.name}</div>
                                            {/* <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} className="img-start-page" alt="..." /> */}
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