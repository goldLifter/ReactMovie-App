class ApiService  {
    _apiBase = 'https://api.themoviedb.org/3';
    _tokken = '?api_key=946775329ea9fb01ac7d98ea6fe30b8c';
    _lang = '&language=ru-RU';
    _page = '&page='

    async getAPI(url, num = 1) {
        const res = await fetch(`${this._apiBase}${url}${this._tokken}${this._lang}${this._page}${num}`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
    
        return await res.json();
    }

    async getAllMovies(num = 1) {
        const res = await this.getAPI(`/movie/top_rated`, num);
        return res;
    }

    async getTopMovies() {
        const res = await this.getAPI(`/movie/top_rated`, 1);
        return res;
    }

    async getMovie(id) {
        const res = await this.getAPI(`/movie/${id}`);
        return res;
    }

    async getPage(){
        const res = await this.getAPI(`/movie/popular`);
        return res.results;
    }

    async getLatest(movie_id) {
        const res = await this.getAPI(`/person/popular`)
        return res
    }

    async getSerials() {
        const res = await this.getAPI(`/tv/popular`)
        return res
    }

    async getSerailDetails(tv_id){
        const res = await this.getAPI(`/tv/${tv_id}`)
        return res
    }
}

export default ApiService;