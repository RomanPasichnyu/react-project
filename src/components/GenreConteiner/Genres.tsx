import React, { FC} from 'react';
import {IGenre} from "../../interfaces/genresResponceInterface";
import { Genre } from "./Genre";
import css from './Genres.module.css'

interface IProps {
    genres: IGenre[];
}

const Genres: FC<IProps> = ({genres}) => {
    return (
        <div className={css.Genres}>
            {genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
