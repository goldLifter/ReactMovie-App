import React from 'react'; 
import './Poster.css';

class Poster extends React.Component{

    state = {
        // poster: 'https://www.sunhome.ru/i/wallpapers/215/temnii-ricar-vozrozhdenie-legendi.orig.jpg'
        poster: 'https://storge.pic2.me/upload/725/57d924b37f577.jpg'
    }

    render() {

        const _BACKGROUND = 'https://image.tmdb.org/t/p/original'
        const poster_style = this.props.poster ? 
                {background: `url(${_BACKGROUND}${this.props.poster}) no-repeat center top / cover`,
                backgroundAttachment: `fixed`} : 
                {background: `url(${this.state.poster}) no-repeat center top / cover`,
                backgroundAttachment: `fixed`
            }

        return(
            <section className="poster_section" style={poster_style}>
                <div className="container container-bottom">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Poster;