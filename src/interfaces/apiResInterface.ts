import {IMovie} from "./movieInterface";

export interface IApiResponce {
    page:number,
    results: IMovie[],
    total_pages:number,
    total_results: number
}