class ApiService  {
    _apiBase = 'https://api.themoviedb.org/3';
    _tokken = '?api_key=946775329ea9fb01ac7d98ea6fe30b8c';
    _lang = '&language=ru-RU';
    _page = '&page='

    async getAPI(url, num=1) {
        const res = await fetch(`${this._apiBase}${url}${this._tokken}${this._lang}${this._page}${num}`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
    
        return await res.json();
    }

    async getAllMovies(num) {
        const res = await this.getAPI(`/movie/top_rated`, num);
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
}

export default ApiService;