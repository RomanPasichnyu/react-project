import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";




const Movies: FC = () => {
    const [query, setQuery] = useSearchParams();
    const [movies, setMovies] = useState<IMovie[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const pageParam = query.get('page');
        const page = pageParam !== null ? parseInt(pageParam) : 1;
        const genre = query.get('genre') || undefined;
        movieService.getAll(page, genre).then(({data}) => setMovies(data.results))
    }, [query]);

    const goToPage = (page: number) => {
        setCurrentPage(page);
        const genre = query.get('genre') || undefined;
        if (genre) {
            setQuery({page: page.toString(), genre});
        } else {
            setQuery({page: page.toString()});
        }
    };
    const prevPage = () => {
        goToPage(currentPage - 1);
    };
    const nextPage = () => {
        goToPage(currentPage + 1);
    };

    return (
        <div className={css.MoviesMain}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            {<div className={css.buttons}>
                <button onClick={prevPage}>Prev page</button>
                <div>-{currentPage}-</div>
                <button onClick={nextPage}>Next page</button>
            </div>}
        </div>
    );
};

export {Movies};