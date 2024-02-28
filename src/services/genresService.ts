import {IRes} from "../types/responceType";
import {IGenres} from "../interfaces/genresResponceInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const genresService
    = {
    getAll:():IRes<IGenres[]>=>apiService.get(urls.genres.base),
}
export {
    genresService

}