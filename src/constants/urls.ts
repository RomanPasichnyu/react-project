const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'

const genres = '/genre/movie/list'


const urls = {
    movies:{
        base: movies,
        byId:(id:number):string=>`/movie/${id}`
    },
    genres:{
        base:genres,
        byId:(id:number):string=>`/genre/${id}`
    }
}


export {
    baseURL, urls
}