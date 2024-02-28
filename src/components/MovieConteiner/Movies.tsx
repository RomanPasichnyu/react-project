import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IApiResponce, IMovie} from "../../interfaces";
import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import css from './Movies.module.css'


interface IProps extends PropsWithChildren{

}

    const Movies :FC<IProps>= () => {
    const [movies, setMovies] = useState<IMovie[]>([])


    useEffect(() => {
        movieService.getAll().then(({data}:any)=>setMovies(data.results))
    }, []);

    console.log(movies);

    return (
        <div className={css.MoviesMain}>
             {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {Movies};