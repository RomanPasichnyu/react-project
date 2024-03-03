import React, {FC, PropsWithChildren} from 'react';
import css from './Genres.module.css'
import {NavLink} from "react-router-dom";
import {IGenre} from "../../interfaces/genresResponceInterface";

interface IProps extends PropsWithChildren {
    genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id,name} = genre;


    return (
        <div className={css.GenreCard}>
            <NavLink className={css.Link} to={`/movies?genre=${id}`}>Get all {name} films</NavLink >
        </div>
    );
};

export {Genre};