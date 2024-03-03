import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responceType";
import {IApiResponse, ICardDetails} from "../interfaces";

const movieService = {
    getAll: (page = 1, genre?: string) => apiService.get<IApiResponse>(urls.movies.base, {
        params: {
            page,
            with_genres: genre
        }
    }),
    getById: (id: number): IRes<ICardDetails> => apiService.get(urls.movies.byId(id))
}
export {
    movieService
}