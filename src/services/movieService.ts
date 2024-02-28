import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responceType";
import {IApiResponce, ICardDetails} from "../interfaces";

const movieService = {
    getAll:():IRes<IApiResponce[]>=>apiService.get(urls.movies.base),
    getById:(id:number):IRes<ICardDetails[]>=>apiService.get(urls.movies.byId(id))
}
export {
    movieService
}